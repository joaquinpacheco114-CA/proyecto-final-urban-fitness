# Urban Fitness — Sitio web estático (Proyecto Final Desarrollo Web)

Sitio web estático de 5 páginas para **Urban Fitness**, marca ficticia de indumentaria deportiva urbana. Proyecto final de la materia **Desarrollo Web** (carrera Full Stack, Coderhouse).

🔗 **Sitio en producción:** https://comforting-klepon-53d456.netlify.app/
🔗 **Repositorio:** https://github.com/joaquinpacheco114-CA/proyecto-final-urban-fitness

## Tecnologías usadas

- HTML5 semántico
- SCSS (arquitectura de partials, compilado a CSS)
- Bootstrap 5.3 (grid, navbar, carousel, acordeón, paginación — vía CDN)
- Bootstrap Icons (vía CDN)
- AOS – Animate On Scroll (vía CDN)
- JavaScript vanilla (filtros de tienda, validación de formulario, menú mobile)

## Estructura del proyecto

```
urban-fitness/
├── index.html                 → Home
├── pages/
│   ├── tienda.html            → Catálogo con filtros por categoría
│   ├── nosotros.html          → Historia, valores y equipo
│   ├── entrenamiento.html     → Notas de entrenamiento (blog)
│   └── contacto.html          → Formulario, mapa y FAQ
├── scss/
│   ├── main.scss              → SOLO @use de los partials (sin reglas propias)
│   ├── abstracts/
│   │   ├── _variables.scss    → Colores, tipografía, espaciado, breakpoints
│   │   └── _mixins.scss       → Mixins con parámetros (responsive, flex, botones, etc.)
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _buttons.scss      → usa @extend (%btn-base)
│   │   ├── _navbar.scss
│   │   ├── _cards.scss        → usa @extend (%card-base)
│   │   ├── _footer.scss
│   │   ├── _forms.scss
│   │   └── _bootstrap-overrides.scss  → re-estiliza navbar, carousel, acordeón, paginación
│   ├── layout/
│   │   ├── _hero.scss
│   │   ├── _sections.scss
│   │   └── _animations.scss   → animaciones nativas (@keyframes)
│   └── pages/
│       ├── _home.scss
│       ├── _tienda.scss
│       ├── _nosotros.scss
│       ├── _entrenamiento.scss
│       └── _contacto.scss
├── styles/
│   └── main.css               → CSS compilado (el que consumen los HTML)
├── assets/
│   └── img/                   → Logo, favicon e ilustraciones SVG originales
│       ├── products/          → Ilustraciones de productos
│       ├── blog/              → Ilustraciones de notas de entrenamiento
│       └── team/               → Avatares del equipo
└── js/
    └── site.js                → Filtros, validación de formulario, menú mobile, init de AOS
```

## Identidad visual

Paleta inspirada en el asfalto y el rojo de una cancha de barrio: base negra (`#15151a`) con acento rojo (`#e32227`) y detalles en granate/bordó. Tipografía **Oswald** (títulos, condensada) + **Inter** (texto). Todas las imágenes de producto, blog y equipo son ilustraciones SVG propias (no se usan fotos de stock), por eso el sitio no depende de conexión a servicios de imágenes externos.

## Cómo trabajar el proyecto en VS Code

1. Abrí la carpeta `urban-fitness/` completa en VS Code.
2. Instalá la extensión **Live Sass Compiler** (o similar) para compilar `scss/main.scss` → `styles/main.css` automáticamente al editar los partials. El `styles/main.css` ya viene compilado a mano en el repo, así que el sitio funciona igual sin la extensión; solo la vas a necesitar si modificás los archivos `.scss`.
3. Instalá la extensión **Live Server** y abrí `index.html` con "Open with Live Server" para ver el sitio con recarga automática.
4. Los estilos de Bootstrap, Bootstrap Icons y AOS se cargan por CDN, así que necesitás conexión a internet para verlos aplicados correctamente.

## Checklist de la consigna

- [x] 5 HTML semánticos con indentación jerárquica
- [x] `<title>`, `<meta description>` y `<meta keywords>` únicos por página
- [x] `alt` en todas las imágenes
- [x] Navbar de Bootstrap responsiva (con hamburguesa en mobile) estilada desde SCSS
- [x] 100% responsivo (mobile / tablet / desktop), sin scroll horizontal
- [x] SCSS con variables, nesting, mixins con parámetros, `@extend` y partials
- [x] `main.scss` solo con `@use`
- [x] Animación nativa SCSS (`@keyframes` + `transition`) y animación con librería externa (AOS)
- [x] Sitio desplegado en Netlify — pegá tu link arriba del todo, en este README y en "About" del repo
- [x] Repositorio público con 2+ commits descriptivos

## Cómo subir el proyecto a GitHub

```bash
cd urban-fitness
git init
git add .
git commit -m "Estructura inicial: HTML semantico, SCSS con partials y assets"
# ... hacé cambios/ajustes ...
git add .
git commit -m "Ajustes de responsividad, animaciones y SEO por pagina"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/urban-fitness.git
git push -u origin main
```

Asegurate de que el repositorio quede en modo **público** (Settings → General → Danger Zone, en GitHub).

## Cómo desplegar en Vercel o Netlify

**Netlify (arrastrar y soltar, la más simple para un sitio estático):**
1. Entrá a https://app.netlify.com/drop
2. Arrastrá la carpeta `urban-fitness` completa.
3. Copiá el link que te genera y pegalo acá arriba y en la descripción del repo de GitHub.

**Vercel (conectando el repo de GitHub):**
1. Entrá a https://vercel.com/new e importá el repositorio de GitHub.
2. Framework Preset: **Other** (es un sitio estático, no hace falta build command).
3. Deploy. Copiá el link que te da Vercel.

En ambos casos, como el proyecto usa rutas relativas (`assets/...`, `styles/...`, `pages/...`) y no un framework con build, no hace falta configurar ningún comando de build ni carpeta de salida.
