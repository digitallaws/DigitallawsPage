# Desarrollo local

## Requisitos

- Node.js 22.x.
- npm (el repositorio tiene `package-lock.json`; CI usa `npm ci`).
- Git para crear cambios y enviarlos al repositorio.

## Instalación y ejecución

Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

El servidor de Vite muestra la URL local en la terminal. Los cambios en `src/` se reflejan con recarga en caliente.

## Variables de entorno

La interfaz actual no requiere variables `VITE_*` para funcionar. No hay mapa ni integración con una API en este sitio. El formulario PQRS presenta una confirmación local y los enlaces de contacto abren correo o WhatsApp.

## Scripts disponibles

| Comando | Resultado |
| --- | --- |
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Verificación TypeScript y compilación en `dist/` |
| `npm run preview` | Sirve localmente el build de `dist/` |
| `npm run typecheck` | Comprobación de tipos con TypeScript 7 |
| `npm run format` | Comprueba formato con Prettier |
| `npm run format:fix` | Aplica formato con Prettier |

## Estructura

```text
src/
  assets/       Imágenes, logos e ilustraciones usadas por la interfaz
  components/   Secciones, ErrorBoundary y componentes reutilizables
  context/      Estado del tema claro/oscuro
  layouts/      Layout compartido de navegación y pie
  pages/        Componentes asociados a las rutas
  App.tsx       Tabla de rutas
  main.tsx      Punto de entrada React
public/         Recursos servidos sin pasar por imports
.github/        Automatización GitHub Actions
Dockerfile      Build multietapa y servidor Nginx
nginx.conf      Fallback SPA para Nginx
```

## Nota sobre PQRS

El formulario actual es una interfaz demostrativa: no hace una petición HTTP ni guarda registros. Antes de usarlo para recibir solicitudes reales, se debe conectar a un backend seguro y definir validación, persistencia, consentimiento, protección antiabuso y confirmación real de recepción.
