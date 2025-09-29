# Dulcería Landing Page Template 🍬

Landing page moderna y responsiva para una dulcería, desarrollada con [Astro](https://astro.build). Incluye menú de productos, galería, opiniones de clientes y sección de contacto.

---

> **Disclaimer:**  
> El diseño visual de esta landing page no es de mi autoría. Este template es una adaptación/refactorización con fines educativos y de práctica.  
> Si eres el autor original y deseas atribución o solicitar cambios, por favor contáctame.

---

## 🖼️ Hero Section

A continuación puedes incluir una imagen representativa de la sección principal (Hero):

![Hero Section](https://res.cloudinary.com/dwhbgia5f/image/upload/v1759184999/coverdulceria_kua63x.png)

---

## 🚀 Características

- **Diseño atractivo y responsivo** (desktop y móvil)
- **Menú de productos** con imágenes y precios
- **Galería de fotos** de productos y local
- **Opiniones de clientes**
- **Sección de contacto** con dirección, teléfono y horarios
- **Footer con ubicación en Google Maps**
- **Integración con FontAwesome para íconos sociales**
- **Estilos personalizados en CSS**

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── styles/
│   ├── webfonts/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── sweets.astro
├── package.json
└── astro.config.mjs
```

## 🧑‍💻 Instalación y uso

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Accede a [http://localhost:4321](http://localhost:4321) en tu navegador.

## 🛠️ Personalización

- Edita los productos en [`src/pages/sweets.astro`](src/pages/sweets.astro)
- Cambia imágenes y textos en [`src/pages/index.astro`](src/pages/index.astro)
- Modifica estilos en [`public/styles/home.css`](public/styles/home.css) y [`public/styles/media.css`](public/styles/media.css)
- Actualiza datos de contacto y redes en [`src/components/Footer.astro`](src/components/Footer.astro) y [`src/components/Header.astro`](src/components/Header.astro)

## 📦 Build para producción

```sh
npm run build
```

## 📚 Más información

- [Documentación Astro](https://docs.astro.build)
- [Guía de estructura de proyectos Astro](https://docs.astro.build/en/basics/project-structure/)

---

¡Personaliza este template y haz que tu dulcería destaque en la web!