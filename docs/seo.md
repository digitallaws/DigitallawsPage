# SEO de Digitallaws

## Cambios locales

- Idioma `es-CO` y nombre de marca corregidos.
- Portada enfocada en desarrollo de software en Colombia, integración de sistemas y sectores jurídico, empresarial y público, siguiendo el diccionario aportado.
- Páginas `/desarrollo-software`, `/integraciones-api` y `/software-juridico`, enlazadas desde la portada y entre sí.
- Título y descripción únicos para las 10 rutas conocidas, canonical, Open Graph, Twitter Card y datos estructurados `Organization`, actualizados por `src/components/Seo.tsx` al navegar.
- Rutas desconocidas con `noindex, follow`, sin canonical ni datos de organización una vez ejecutado JavaScript.
- `npm run build` genera `dist/robots.txt` y `dist/sitemap.xml` a partir del catálogo de rutas. Estos archivos se generan en producción, no en el servidor de desarrollo.

La fuente de metadatos es `src/seo/pages.json`; el origen canónico está en `src/seo/site.json`. Se eligió `https://www.digitallaws.co` como principal entre los dos hostnames indicados por el propietario. No se cambiaron DNS ni infraestructura.

## Pendientes de infraestructura e indexación

1. Verificar que el dominio principal sirva el sitio con HTTPS y configurar una redirección permanente de `https://digitallaws.co/ruta` a `https://www.digitallaws.co/ruta`, conservando ruta y parámetros. Redirigir HTTP a HTTPS y evitar indexar el hostname temporal de CloudFront.
2. Implementar prerenderizado o renderizado de servidor. Actualmente el HTML inicial es una plantilla común; el contenido y los metadatos específicos requieren JavaScript. Google puede procesarlos, pero los bots que no ejecutan JavaScript, incluidas algunas previsualizaciones sociales, no reciben los metadatos de cada ruta. Las etiquetas Open Graph actuales no resuelven por sí solas esa limitación.
3. Corregir la respuesta HTTP de rutas inexistentes. Según `docs/despliegue.md`, CloudFront responde con `index.html` y estado 200 a errores 403/404. El `noindex` del cliente mitiga la indexación de errores, pero no reemplaza una respuesta HTTP 404 real.
4. Tras publicar, verificar la propiedad en Google Search Console, enviar `https://www.digitallaws.co/sitemap.xml` e inspeccionar portada, productos y páginas de servicios. Revisar canonical seleccionado, HTML renderizado e indexación.
5. Medir Core Web Vitals con datos reales y revisar la versión móvil. No se han medido posiciones, tráfico, volumen de búsquedas ni rendimiento real en esta intervención.

## Próximas páginas editoriales

Desarrollar contenido específico para notificaciones judiciales, correo certificado, sector público, gestión de pólizas, DIMAIL y aliados cuando se confirme el alcance comercial y funcional de cada solución. Evitar duplicar el mismo texto o prometer prestaciones no verificadas. El diccionario propone prioridades editoriales, no volúmenes medidos de búsqueda.

Antes de publicar contenidos normativos, revisar las fuentes oficiales y distinguir cada modalidad de notificación y sus requisitos. Las páginas nuevas no añaden garantías de validez jurídica ni afirmaciones normativas.

## Hallazgos adicionales

- El pie muestra `contacto@digitalalws.co`, pero enlaza a `contacto@digitalalws.com`. Confirmar el buzón correcto; no se inventó una dirección nueva.
- Revisar comercialmente las métricas y afirmaciones de certificación ya existentes en productos; esta intervención no las verifica.
- No se alteraron los cambios locales anteriores del usuario ni se publicó el sitio.

## Referencias

- [Google: SEO para JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: descripciones de resultados](https://developers.google.com/search/docs/appearance/snippet)
- [Google: sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
