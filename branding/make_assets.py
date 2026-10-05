"""Genera icone e logo dell'app a partire dal logo originale ritagliato dalla tavola di riferimento (reference-board.png)."""
import os, numpy as np
from PIL import Image, ImageFilter, ImageDraw

ROOT = os.path.dirname(os.path.abspath(__file__))
RES = os.path.join(ROOT, '..', 'android', 'app', 'src', 'main', 'res')
WEB = os.path.join(ROOT, '..', 'web', 'src', 'assets')
os.makedirs(WEB, exist_ok=True)

board = Image.open(os.path.join(ROOT, 'reference-board.png')).convert('RGB')
# riquadro del logo (individuato sulla saturazione): x 172-344, y 73-276, con piccolo margine
pad = 5
logo = board.crop((172 - pad, 73 - pad, 344 + pad + 1, 276 + pad + 1))
LW, LH = logo.size

def up(img, f):
    big = img.resize((img.width * f, img.height * f), Image.LANCZOS)
    return big.filter(ImageFilter.UnsharpMask(radius=2.2, percent=90, threshold=2))

master = up(logo, 4)                       # ~ 740 x 864, sfondo bianco
master.save(os.path.join(ROOT, 'logo-pin.png'))

def fit(img, h):                           # ridimensiona a altezza h
    return img.resize((round(img.width * h / img.height), h), Image.LANCZOS)

def place(canvas, img, cy=0.5):
    x = (canvas.width - img.width) // 2
    y = int(canvas.height * cy - img.height / 2)
    canvas.paste(img, (x, y))

# --- logo in app con sfondo trasparente (flood-fill del bianco esterno; il bianco interno resta opaco)
from scipy import ndimage as ndi
def transparent(img):
    a = np.array(img.convert('RGB')).astype(int)
    white = a.min(2) > 242
    core = ndi.binary_erosion(white, iterations=3)           # spezza la sottile fessura sul fondo
    lab, n = ndi.label(core)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    outer = ndi.binary_dilation(np.isin(lab, list(edge)), iterations=3) & white
    alpha = np.where(outer, 0.0, 1.0)
    alpha = ndi.gaussian_filter(alpha, 1.2)
    # sfumatura morbida sul bordo: i pixel quasi bianchi vicini al bordo diventano trasparenti in proporzione
    out = np.dstack([a, (alpha * 255).astype(int)]).clip(0, 255).astype(np.uint8)
    return Image.fromarray(out, 'RGBA')
fit(transparent(master), 360).save(os.path.join(WEB, 'logo.png'), optimize=True)

# --- icone legacy (<= API 25) quadrate e tonde
sizes = {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
for dn, px in sizes.items():
    d = os.path.join(RES, f'mipmap-{dn}'); os.makedirs(d, exist_ok=True)
    S = px * 4
    for kind in ('ic_launcher', 'ic_launcher_round'):
        cv = Image.new('RGBA', (S, S), (0, 0, 0, 0))
        mask = Image.new('L', (S, S), 0)
        dr = ImageDraw.Draw(mask)
        if kind == 'ic_launcher':
            dr.rounded_rectangle((0, 0, S - 1, S - 1), radius=int(S * 0.22), fill=255)
        else:
            dr.ellipse((0, 0, S - 1, S - 1), fill=255)
        tile = Image.new('RGBA', (S, S), (255, 255, 255, 255))
        lg = fit(master, int(S * (0.60 if kind == 'ic_launcher' else 0.54))).convert('RGBA')
        place(tile, lg, 0.5)
        cv.paste(tile, (0, 0), mask)
        cv.resize((px, px), Image.LANCZOS).save(os.path.join(d, kind + '.png'), optimize=True)

# --- icona adattiva: primo piano (sfondo = bianco), 432 px = 108dp @4x
d = os.path.join(RES, 'drawable-nodpi'); os.makedirs(d, exist_ok=True)
fg = Image.new('RGB', (432, 432), (255, 255, 255))
place(fg, fit(master, 232), 0.5)
fg.save(os.path.join(d, 'ic_launcher_fg.png'), optimize=True)

# --- icona monocromatica (temi Android 13+): sagoma con foro e croce
a = np.array(fit(master, 232)).astype(float)
mx, mn = a.max(2), a.min(2)
sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0)
alpha = np.clip((sat - 0.10) / 0.35, 0, 1)
mono = np.zeros((432, 432, 4), np.uint8)
h, w = alpha.shape
y0, x0 = (432 - h) // 2, (432 - w) // 2
mono[y0:y0 + h, x0:x0 + w, 3] = (alpha * 255).astype(np.uint8)
Image.fromarray(mono, 'RGBA').save(os.path.join(d, 'ic_launcher_mono.png'), optimize=True)

# --- splash (96dp @ xxxhdpi = 384px) con il logo su bianco
sp = Image.new('RGB', (384, 384), (255, 255, 255))
place(sp, fit(master, 300), 0.5)
sp.save(os.path.join(d, 'splash_logo.png'), optimize=True)
print('ok', master.size)
