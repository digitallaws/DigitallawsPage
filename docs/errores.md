# Página 404 y errores de interfaz

El sitio distingue las rutas inexistentes de los errores que impiden renderizar la interfaz.

## Ruta inexistente: `NotFoundPage`

`src/pages/NotFoundPage.tsx` aparece cuando React Router no encuentra una ruta declarada en `src/App.tsx`. Informa que la dirección no existe y permite volver al inicio. CloudFront entrega `index.html` para que React Router resuelva las rutas de la SPA.

## Error de renderizado: `ErrorPage`

`src/components/ErrorBoundary.tsx` envuelve la aplicación React desde `src/main.tsx`. Si un componente falla durante el renderizado, muestra `src/pages/ErrorPage.tsx`, con opciones para volver al inicio o recargar.

El error se registra en la consola del navegador con el stack de componentes. El límite no intercepta errores HTTP, fallas de red, errores de eventos ni errores del servidor/CDN; esos requieren manejo específico.

## Comprobación manual

- Abrir una ruta aleatoria, por ejemplo `/ruta-que-no-existe`, debe mostrar la pantalla 404.
- Si ocurre un error durante el renderizado de un componente, debe mostrarse `ErrorPage` y dejar el detalle en la consola.