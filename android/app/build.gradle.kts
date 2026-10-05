plugins {
    id("com.android.application")
}

// La versione dell'app e' definita in /VERSION (una sola fonte, usata anche dal builder SDK-less).
val appVersion = rootProject.file("../VERSION").readText().trim()
val appVersionCode = appVersion.split(".").let { (a, b, c) -> a.toInt() * 10000 + b.toInt() * 100 + c.toInt() }

android {
    namespace = "it.puntosalute.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "it.puntosalute.app"
        minSdk = 24
        targetSdk = 34
        versionCode = appVersionCode
        versionName = appVersion
    }

    // Firma: variabili d'ambiente (CI/produzione) oppure chiave di SVILUPPO inclusa nel repository.
    // Per la pubblicazione genera una chiave privata e NON committarla (vedi README).
    signingConfigs {
        create("release") {
            val ks = System.getenv("PS_KEYSTORE") ?: rootProject.file("../keystore/puntosalute.p12").path
            storeFile = file(ks)
            storePassword = System.getenv("PS_KEYSTORE_PASSWORD") ?: "puntosalute"
            keyAlias = System.getenv("PS_KEY_ALIAS") ?: "puntosalute"
            keyPassword = System.getenv("PS_KEY_PASSWORD") ?: (System.getenv("PS_KEYSTORE_PASSWORD") ?: "puntosalute")
            storeType = "PKCS12"
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("release")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    // Gli asset (web app + modelli 3D) sono gia' compressi: evita doppia compressione dei .glb
    androidResources {
        noCompress += listOf("glb", "woff2", "png", "jpg")
    }
}
