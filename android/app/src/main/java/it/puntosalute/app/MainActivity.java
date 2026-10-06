package it.puntosalute.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Punto Salute - guscio nativo.
 *
 * L'intera app (HTML/CSS/JS + dati clinici + motore 3D) e' inclusa negli asset dell'APK e viene
 * servita alla WebView su un'origine https virtuale. Nessun permesso INTERNET e' richiesto:
 * l'app funziona interamente offline e nessun dato lascia il dispositivo.
 */
public class MainActivity extends Activity {

    static final String APP_VERSION = "1.4.0";
    private static final String HOST = "appassets.androidplatform.net";
    private static final String ORIGIN = "https://" + HOST;
    private static final String START_URL = ORIGIN + "/index.html";

    private WebView webView;
    private View splashOverlay;
    private ValueCallback<Uri[]> fileCb;

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Android 12+: la splash di sistema (sfondo bianco + logo) viene tolta subito, senza animazione di uscita,
        // perche' sotto c'e' gia' la splash dell'app identica; resta cosi' visibile il logo fino alla Home.
        if (Build.VERSION.SDK_INT >= 31) {
            getSplashScreen().setOnExitAnimationListener(new android.window.SplashScreen.OnExitAnimationListener() {
                @Override
                public void onSplashScreenExit(android.window.SplashScreenView view) {
                    view.remove();
                }
            });
        }

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#FFFFFF"));

        // Schermata di avvio: stessa grafica (sfondo bianco + logo) della splash di sistema, tenuta sopra la WebView
        // finche' la Home non e' pronta, cosi' non compare nessuna schermata intermedia.
        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.WHITE);
        root.addView(webView, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        splashOverlay = new View(this);
        int splashId = getResources().getIdentifier("splash", "drawable", getPackageName());
        if (splashId != 0) splashOverlay.setBackgroundResource(splashId); else splashOverlay.setBackgroundColor(Color.WHITE);
        root.addView(splashOverlay, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        // rete di sicurezza: se la web app non segnala "pronta", la splash sparisce comunque dopo qualche secondo
        splashOverlay.postDelayed(new Runnable() {
            @Override
            public void run() {
                hideSplash();
            }
        }, 6000);

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setAllowFileAccessFromFileURLs(false);
        s.setAllowUniversalAccessFromFileURLs(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setMediaPlaybackRequiresUserGesture(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setTextZoom(100);
        s.setSaveFormData(false);
        s.setGeolocationEnabled(false);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        // dopo un aggiornamento dell'app si svuota la cache della WebView, cosi' non puo' restare grafica della versione precedente
        android.content.SharedPreferences prefs = getSharedPreferences("ps", MODE_PRIVATE);
        if (!APP_VERSION.equals(prefs.getString("webVersion", ""))) {
            webView.clearCache(true);
            prefs.edit().putString("webVersion", APP_VERSION).apply();
        }

        webView.setWebViewClient(new AssetClient());
        // selezione di file (ripristino del backup): apre il selettore di documenti di Android
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCb != null) { fileCb.onReceiveValue(null); fileCb = null; }
                fileCb = callback;
                try {
                    Intent pick = new Intent(Intent.ACTION_GET_CONTENT);
                    pick.addCategory(Intent.CATEGORY_OPENABLE);
                    pick.setType("*/*");
                    startActivityForResult(Intent.createChooser(pick, "Scegli il file di backup"), 4711);
                } catch (Exception e) {
                    fileCb = null;
                    callback.onReceiveValue(null);
                    return false;
                }
                return true;
            }
        });
        webView.addJavascriptInterface(new Bridge(), "PuntoSalute");
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);

        if (savedInstanceState != null && webView.restoreState(savedInstanceState) != null) {
            return;
        }
        webView.loadUrl(START_URL + "?v=" + APP_VERSION);
    }

    private void hideSplash() {
        final View s = splashOverlay;
        if (s == null || s.getVisibility() != View.VISIBLE) return;
        s.animate().alpha(0f).setDuration(180).withEndAction(new Runnable() {
            @Override
            public void run() {
                s.setVisibility(View.GONE);
            }
        }).start();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 4711) {
            if (fileCb != null) {
                Uri[] res = null;
                if (resultCode == RESULT_OK && data != null && data.getData() != null) res = new Uri[] { data.getData() };
                fileCb.onReceiveValue(res);
                fileCb = null;
            }
            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (webView != null) webView.saveState(outState);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) webView.onResume();
    }

    @Override
    protected void onPause() {
        if (webView != null) webView.onPause();
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.removeJavascriptInterface("PuntoSalute");
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (webView != null) {
            webView.evaluateJavascript("window.__psTheme && window.__psTheme()", null);
        }
    }

    /** Il tasto indietro viene prima offerto alla web app (router interno). */
    @Override
    public void onBackPressed() {
        if (webView == null) {
            super.onBackPressed();
            return;
        }
        webView.evaluateJavascript("(window.__psBack ? window.__psBack() : false)", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String value) {
                if (!"true".equals(value)) {
                    finish();
                }
            }
        });
    }

    // ------------------------------------------------------------------------------------------
    // Servizio degli asset su origine https virtuale (nessuna rete coinvolta)
    // ------------------------------------------------------------------------------------------

    private static final Map<String, String> MIME = new HashMap<String, String>();

    static {
        MIME.put("html", "text/html");
        MIME.put("htm", "text/html");
        MIME.put("js", "text/javascript");
        MIME.put("mjs", "text/javascript");
        MIME.put("css", "text/css");
        MIME.put("json", "application/json");
        MIME.put("svg", "image/svg+xml");
        MIME.put("png", "image/png");
        MIME.put("jpg", "image/jpeg");
        MIME.put("jpeg", "image/jpeg");
        MIME.put("webp", "image/webp");
        MIME.put("ico", "image/x-icon");
        MIME.put("woff2", "font/woff2");
        MIME.put("woff", "font/woff");
        MIME.put("glb", "model/gltf-binary");
        MIME.put("txt", "text/plain");
        MIME.put("webmanifest", "application/manifest+json");
    }

    private static String mimeFor(String path) {
        int dot = path.lastIndexOf('.');
        if (dot < 0) return "application/octet-stream";
        String ext = path.substring(dot + 1).toLowerCase();
        String m = MIME.get(ext);
        return m != null ? m : "application/octet-stream";
    }

    private class AssetClient extends WebViewClient {

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if (!HOST.equals(uri.getHost())) {
                // Nessun contenuto remoto: tutto cio' che non e' dell'app viene bloccato.
                return new WebResourceResponse("text/plain", "utf-8", 404, "Blocked", new HashMap<String, String>(), emptyBody());
            }
            String path = uri.getPath();
            if (path == null || path.length() == 0 || "/".equals(path)) path = "/index.html";
            if (path.contains("..")) {
                return notFound();
            }
            try {
                InputStream in = getAssets().open("www" + path);
                Map<String, String> headers = new HashMap<String, String>();
                headers.put("Access-Control-Allow-Origin", ORIGIN);
                headers.put("Cache-Control", "no-store");
                String mime = mimeFor(path);
                String enc = mime.startsWith("text/") || mime.indexOf("json") >= 0 || mime.indexOf("svg") >= 0 ? "utf-8" : null;
                return new WebResourceResponse(mime, enc, 200, "OK", headers, in);
            } catch (IOException e) {
                return notFound();
            }
        }

        private WebResourceResponse notFound() {
            return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", new HashMap<String, String>(), emptyBody());
        }

        private InputStream emptyBody() {
            return new ByteArrayInputStream(new byte[0]);
        }

        /** Se il processo di rendering della WebView termina (memoria, aggiornamento WebView) l'app non si chiude: riparte. */
        @Override
        public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
            Toast.makeText(MainActivity.this, "Ripristino dell'app in corso…", Toast.LENGTH_SHORT).show();
            try {
                if (webView != null) {
                    webView.destroy();
                    webView = null;
                }
            } catch (Exception ignored) { /* noop */ }
            Intent restart = getIntent();
            finish();
            startActivity(restart);
            return true;
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if (HOST.equals(uri.getHost())) return false;
            openExternal(uri.toString());
            return true;
        }
    }

    private void openExternal(String url) {
        try {
            Uri u = Uri.parse(url);
            String scheme = u.getScheme();
            if (scheme == null || !(scheme.equals("https") || scheme.equals("http") || scheme.equals("mailto") || scheme.equals("tel"))) {
                return;
            }
            Intent i = new Intent(Intent.ACTION_VIEW, u);
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
        } catch (Exception e) {
            Toast.makeText(this, "Impossibile aprire il collegamento", Toast.LENGTH_SHORT).show();
        }
    }

    // ------------------------------------------------------------------------------------------
    // Bridge JS <-> nativo (solo funzioni minime e innocue)
    // ------------------------------------------------------------------------------------------

    private class Bridge {

        /** La web app ha mostrato la Home: si toglie la splash. */
        @JavascriptInterface
        public void appReady() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    hideSplash();
                }
            });
        }

        @JavascriptInterface
        public String version() {
            return APP_VERSION;
        }

        @JavascriptInterface
        public boolean isNight() {
            int mode = getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
            return mode == Configuration.UI_MODE_NIGHT_YES;
        }

        /** Condivide un testo (esportazione di piani assistenziali, note, risultati). */
        @JavascriptInterface
        public void share(final String title, final String text) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Intent send = new Intent(Intent.ACTION_SEND);
                        send.setType("text/plain");
                        send.putExtra(Intent.EXTRA_SUBJECT, title);
                        send.putExtra(Intent.EXTRA_TEXT, text);
                        startActivity(Intent.createChooser(send, title));
                    } catch (Exception e) {
                        Toast.makeText(MainActivity.this, "Condivisione non disponibile", Toast.LENGTH_SHORT).show();
                    }
                }
            });
        }

        @JavascriptInterface
        public void openExternal(final String url) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    MainActivity.this.openExternal(url);
                }
            });
        }

        /** Scarica il feed delle fonti (solo https, host consentiti, max 2 MB) e lo consegna a window.__psFeed(ok, corpo). */
        @JavascriptInterface
        public void fetchFeed(final String url) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    String result;
                    boolean ok = false;
                    java.net.HttpURLConnection c = null;
                    try {
                        Uri u = Uri.parse(url);
                        String host = u.getHost() == null ? "" : u.getHost().toLowerCase();
                        boolean allowed = "https".equals(u.getScheme())
                                && (host.endsWith(".github.io") || host.equals("raw.githubusercontent.com") || host.endsWith(".githubusercontent.com"));
                        if (!allowed) throw new IOException("indirizzo non consentito");
                        c = (java.net.HttpURLConnection) new java.net.URL(url).openConnection();
                        c.setConnectTimeout(8000);
                        c.setReadTimeout(10000);
                        c.setInstanceFollowRedirects(false);
                        c.setRequestProperty("Accept", "application/json");
                        if (c.getResponseCode() != 200) throw new IOException("HTTP " + c.getResponseCode());
                        InputStream in = c.getInputStream();
                        java.io.ByteArrayOutputStream bo = new java.io.ByteArrayOutputStream();
                        byte[] buf = new byte[8192];
                        int n, total = 0;
                        while ((n = in.read(buf)) > 0) {
                            total += n;
                            if (total > 2 * 1024 * 1024) throw new IOException("feed troppo grande");
                            bo.write(buf, 0, n);
                        }
                        result = bo.toString("UTF-8");
                        ok = true;
                    } catch (Exception e) {
                        result = String.valueOf(e.getMessage());
                    } finally {
                        if (c != null) c.disconnect();
                    }
                    final String js = "window.__psFeed && window.__psFeed(" + ok + "," + org.json.JSONObject.quote(result) + ")";
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            if (webView != null) webView.evaluateJavascript(js, null);
                        }
                    });
                }
            }).start();
        }


        /** Salva un file (PDF, PNG) nei Download del telefono; opzionalmente apre la condivisione. Esito a window.__psSaved(ok, messaggio). */
        @JavascriptInterface
        public void saveFile(final String name, final String mime, final String base64, final boolean share) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    boolean ok = false;
                    String msg;
                    Uri saved = null;
                    try {
                        byte[] data = android.util.Base64.decode(base64, android.util.Base64.DEFAULT);
                        if (data.length == 0 || data.length > 40 * 1024 * 1024) throw new IOException("file non valido");
                        String safe = name == null ? "punto-salute" : name.replaceAll("[^A-Za-z0-9._-]", "_");
                        if (safe.length() > 80) safe = safe.substring(safe.length() - 80);
                        if (safe.length() == 0 || safe.startsWith(".")) safe = "punto-salute" + safe;
                        String type = (mime == null || mime.length() == 0) ? "application/octet-stream" : mime;
                        if (Build.VERSION.SDK_INT >= 29) {
                            android.content.ContentValues v = new android.content.ContentValues();
                            v.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, safe);
                            v.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, type);
                            v.put(android.provider.MediaStore.MediaColumns.RELATIVE_PATH, android.os.Environment.DIRECTORY_DOWNLOADS + "/Punto Salute");
                            v.put(android.provider.MediaStore.MediaColumns.IS_PENDING, 1);
                            android.content.ContentResolver cr = getContentResolver();
                            Uri uri = cr.insert(android.provider.MediaStore.Downloads.EXTERNAL_CONTENT_URI, v);
                            if (uri == null) throw new IOException("impossibile creare il file");
                            java.io.OutputStream os = cr.openOutputStream(uri);
                            if (os == null) throw new IOException("impossibile scrivere il file");
                            try { os.write(data); os.flush(); } finally { os.close(); }
                            android.content.ContentValues done = new android.content.ContentValues();
                            done.put(android.provider.MediaStore.MediaColumns.IS_PENDING, 0);
                            cr.update(uri, done, null, null);
                            saved = uri;
                            msg = "Salvato in Download/Punto Salute";
                        } else {
                            java.io.File dir = getExternalFilesDir(android.os.Environment.DIRECTORY_DOWNLOADS);
                            if (dir == null) throw new IOException("memoria non disponibile");
                            if (!dir.exists()) dir.mkdirs();
                            java.io.File f = new java.io.File(dir, safe);
                            java.io.FileOutputStream fo = new java.io.FileOutputStream(f);
                            try { fo.write(data); fo.flush(); } finally { fo.close(); }
                            msg = "Salvato in " + f.getAbsolutePath();
                        }
                        ok = true;
                        if (share && saved != null) {
                            final Uri su = saved;
                            final String st = type;
                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    try {
                                        Intent send = new Intent(Intent.ACTION_SEND);
                                        send.setType(st);
                                        send.putExtra(Intent.EXTRA_STREAM, su);
                                        send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                                        startActivity(Intent.createChooser(send, "Condividi"));
                                    } catch (Exception ignored) {
                                        // condivisione non disponibile: il file e' comunque salvato
                                    }
                                }
                            });
                        }
                    } catch (Exception e) {
                        msg = String.valueOf(e.getMessage());
                    }
                    final String js = "window.__psSaved && window.__psSaved(" + ok + "," + org.json.JSONObject.quote(msg) + ")";
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            if (webView != null) webView.evaluateJavascript(js, null);
                        }
                    });
                }
            }).start();
        }

        /**
         * Richiesta HTTPS generica per assistente e ricerca web. reqJson: {url, method, headers, body, timeout}.
         * Solo https, host pubblici (niente indirizzi IP o reti locali), nessun reindirizzamento, risposta max 2 MB.
         * Esito a window.__psHttp(id, ok, stato, corpo).
         */
        @JavascriptInterface
        public void http(final String id, final String reqJson) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    boolean ok = false;
                    int status = 0;
                    String result;
                    java.net.HttpURLConnection c = null;
                    try {
                        org.json.JSONObject req = new org.json.JSONObject(reqJson);
                        String url = req.getString("url");
                        Uri u = Uri.parse(url);
                        String host = u.getHost() == null ? "" : u.getHost().toLowerCase();
                        boolean ipLiteral = host.matches("[0-9.]+") || host.contains(":");
                        if (!"https".equals(u.getScheme()) || host.length() == 0 || ipLiteral || host.equals("localhost")
                                || !host.contains(".") || host.endsWith(".local") || host.endsWith(".internal")) {
                            throw new IOException("indirizzo non consentito");
                        }
                        String method = req.optString("method", "GET").toUpperCase();
                        if (!"GET".equals(method) && !"POST".equals(method)) throw new IOException("metodo non consentito");
                        c = (java.net.HttpURLConnection) new java.net.URL(url).openConnection();
                        c.setConnectTimeout(10000);
                        c.setReadTimeout(Math.min(req.optInt("timeout", 30000), 90000));
                        c.setInstanceFollowRedirects(false);
                        c.setRequestMethod(method);
                        c.setRequestProperty("User-Agent", "PuntoSalute/" + APP_VERSION + " (Android)");
                        org.json.JSONObject hd = req.optJSONObject("headers");
                        if (hd != null) {
                            java.util.Iterator<String> it = hd.keys();
                            while (it.hasNext()) {
                                String k = it.next();
                                if (k.matches("(?i)content-type|authorization|accept|http-referer|x-title")) c.setRequestProperty(k, hd.getString(k));
                            }
                        }
                        if ("POST".equals(method)) {
                            byte[] body = req.optString("body", "").getBytes("UTF-8");
                            if (body.length > 1024 * 1024) throw new IOException("richiesta troppo grande");
                            c.setDoOutput(true);
                            c.setFixedLengthStreamingMode(body.length);
                            java.io.OutputStream os = c.getOutputStream();
                            try { os.write(body); } finally { os.close(); }
                        }
                        status = c.getResponseCode();
                        InputStream in = status >= 400 ? c.getErrorStream() : c.getInputStream();
                        java.io.ByteArrayOutputStream bo = new java.io.ByteArrayOutputStream();
                        if (in != null) {
                            byte[] buf = new byte[8192];
                            int n, total = 0;
                            while ((n = in.read(buf)) > 0) {
                                total += n;
                                if (total > 2 * 1024 * 1024) throw new IOException("risposta troppo grande");
                                bo.write(buf, 0, n);
                            }
                        }
                        result = bo.toString("UTF-8");
                        ok = status >= 200 && status < 300;
                    } catch (Exception e) {
                        result = String.valueOf(e.getMessage());
                    } finally {
                        if (c != null) c.disconnect();
                    }
                    final String js = "window.__psHttp && window.__psHttp(" + org.json.JSONObject.quote(id) + "," + ok + "," + status + "," + org.json.JSONObject.quote(result) + ")";
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            if (webView != null) webView.evaluateJavascript(js, null);
                        }
                    });
                }
            }).start();
        }

        @JavascriptInterface
        public void toast(final String message) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();
                }
            });
        }

        @JavascriptInterface
        public void keepScreenOn(final boolean on) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (on) {
                        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                    } else {
                        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                    }
                }
            });
        }

        /** Colora barra di stato e di navigazione in modo coerente con l'interfaccia web. */
        @JavascriptInterface
        public void setBars(final String statusColor, final String navColor, final boolean lightIcons) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    applyBars(statusColor, navColor, lightIcons);
                }
            });
        }
    }

    @SuppressWarnings("deprecation")
    private void applyBars(String statusColor, String navColor, boolean lightIcons) {
        try {
            Window w = getWindow();
            w.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            w.setStatusBarColor(Color.parseColor(statusColor));
            w.setNavigationBarColor(Color.parseColor(navColor));
            View decor = w.getDecorView();
            int flags = decor.getSystemUiVisibility();
            // lightIcons == true -> icone chiare (sfondo scuro); false -> icone scure (sfondo chiaro)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (lightIcons) flags &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
                else flags |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                if (lightIcons) flags &= ~View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
                else flags |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
            }
            decor.setSystemUiVisibility(flags);
        } catch (Exception ignored) {
            // colore non valido: si mantiene il tema di sistema
        }
    }
}
