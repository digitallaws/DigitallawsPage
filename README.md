# DigitalLaws — sitio corporativo

Sitio web corporativo de DigitalLaws construido con React, TypeScript y Vite. Esta guía cubre el contenido actual, la estructura del código, el desarrollo local y la publicación en AWS.

## Documentación

- [Resumen del sitio y sus páginas](docs/contenido.md)
- [Páginas 404 y manejo de errores](docs/errores.md)
- [Arquitectura y estructura del código](docs/arquitectura.md)
- [Desarrollo local y configuración](docs/desarrollo.md)
- [Despliegue y operación en AWS](docs/despliegue.md)

## Inicio rápido

Requisitos: Node.js 22 y npm.

```bash
npm ci
npm run dev
```

Vite imprime en la terminal la dirección local de desarrollo. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

La salida de producción queda en `dist/`.

## Tecnologías principales

- React 19, TypeScript y React Router 7.
- Vite (paquete `rolldown-vite`) y Tailwind CSS 4.
- AWS S3 privado y CloudFront para servir la versión publicada.

## Estado de integraciones

El sitio es principalmente estático. El formulario de PQRS actualmente valida campos en el navegador y genera un código local; no persiste ni transmite la solicitud a un servicio. Los enlaces de contacto usan WhatsApp y correo.

Consulta [Despliegue y operación](docs/despliegue.md) antes de publicar. Los archivos de GitHub Actions deben estar en `main` para que el flujo automático se ejecute.