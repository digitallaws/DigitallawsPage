# Contenido y páginas

## Inicio (`/`)

`src/pages/HomePage.tsx` compone las secciones principales: presentación, descripción de la empresa, productos, alianza, seguridad y contacto. Cada bloque vive como componente reutilizable en `src/components/`.

## Productos (`/productos`)

`src/pages/ProductsPage.tsx` presenta el portafolio corporativo e incluye detalles del producto DIMAIL y un catálogo reutilizado desde `Products`.

## PQRS (`/pqrs`)

`src/pages/PqrsPage.tsx` muestra un formulario con datos de contacto y el tipo de solicitud. Al enviar, la interfaz genera un radicado local y presenta una confirmación. Actualmente no persiste la solicitud ni la transmite a un backend; no debe tratarse como canal operativo de recepción hasta integrar esa funcionalidad.

## Seguridad (`/seguridad`)

`src/pages/SecurityPage.tsx` presenta información de seguridad del servicio.

## Información legal

- `/privacidad` — `src/pages/PrivacyPage.tsx`
- `/terminos` — `src/pages/TermsPage.tsx`
- `/cookies` — `src/pages/CookiesPage.tsx`

Estas páginas se montan dentro de `SiteLayout`, que comparte la navegación, el tema visual y el pie de página.

## Estados de navegación y error

- Rutas no declaradas muestran `src/pages/NotFoundPage.tsx`.
- Errores durante el renderizado de React muestran `src/pages/ErrorPage.tsx` mediante `src/components/ErrorBoundary.tsx`.