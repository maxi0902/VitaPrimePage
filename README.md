# VitaPrime — Sitio web

Landing premium para VitaPrime (asesoría e intermediación en crédito automotriz, financiero y seguros).

## Stack

HTML + CSS + JavaScript estático. Sin dependencias ni build step.

## Estructura

```
vitaprime/
├── index.html
├── styles/
│   ├── reset.css      # Variables CSS + reset
│   └── main.css       # Estilos por sección + responsive
├── scripts/
│   └── main.js        # Nav móvil, scroll, reveal animations
└── assets/
    ├── video/         # Video Inicio.mp4 (hero de fondo)
    ├── logos/         # Logos de automotoras aliadas (placeholder)
    ├── img/           # Imágenes complementarias
    └── icons/         # SVGs (los iconos están inline en index.html)
```

## Cómo verlo localmente

Doble clic en `index.html`. Funciona sin servidor porque todo es estático.

> Algunos navegadores bloquean el autoplay del video si el archivo se abre por `file://`. Para evitarlo, puedes servir la carpeta con un servidor mínimo:

**Opción 1 — Python:**
```bash
cd vitaprime
python -m http.server 8080
```
Abre http://localhost:8080

**Opción 2 — Node (http-server):**
```bash
npx http-server vitaprime -p 8080
```

**Opción 3 — VS Code:** instala la extensión "Live Server" y haz clic derecho sobre `index.html` → "Open with Live Server".

## Cómo publicarlo (cuando estés lista)

Cualquier hosting de archivos estáticos funciona — todos son gratuitos para este tipo de sitio:

### Netlify (recomendado, drag & drop)
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta `vitaprime` completa.
3. Te da una URL temporal. Para usar `vitaprime.cl`, configura el dominio en *Site settings → Domain management*.

### Vercel
1. Sube la carpeta a un repositorio de GitHub.
2. Conecta el repo en https://vercel.com → deploy automático.

### Cloudflare Pages
1. https://pages.cloudflare.com → conecta GitHub o sube por drag & drop.

### Hostinger / hosting tradicional
1. Sube la carpeta completa por FTP a `public_html/`.

> Para mantener el dominio `vitaprime.cl`, hay que apuntar los DNS al nuevo hosting (lo hacemos cuando estés lista).

## Personalización rápida

| Quiero cambiar... | Edita... |
|---|---|
| Colores | `styles/reset.css` → bloque `:root` |
| Tipografía | `styles/reset.css` → variable `--font-sans` |
| Textos de cada sección | `index.html` (busca el `id` de la sección) |
| Logos del carrusel | `index.html` → sección `.marquee` |
| FAQs | `index.html` → sección `#faqs` |
| Video del hero | reemplaza `assets/video/Video Inicio.mp4` |
| Número de WhatsApp | busca `56938664345` en `index.html` |
| Email | busca `contacto@vitaprime.cl` en `index.html` |

## Próximos pasos (fase 2 sugerida)

- Reemplazar logos en texto del carrusel por imágenes reales de cada automotora.
- Añadir foto real del equipo en la sección "Sobre nosotros" (reemplazar `.about__photo` placeholder).
- Conectar el botón "Cotizar" a un formulario real (Formspree, Netlify Forms o Mailtrap).
- Agregar testimonios reales de clientes.
- Optimizar el video del hero a formato WebM + un poster JPG para carga inicial más rápida.

---

© VitaPrime · Las Condes, Santiago
