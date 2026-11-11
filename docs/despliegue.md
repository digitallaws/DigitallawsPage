# Despliegue y operación

## Infraestructura actual

| Recurso | Valor |
| --- | --- |
| Región S3 | `us-east-1` |
| Bucket compartido de sitios | `website-produccion-730335377205` |
| Prefijo de DigitalLaws | `digitallaws/` |
| Distribución CloudFront | `E3OHYZXSBN0Z41` |
| Dominio CloudFront | `dzuoxek6sn2u.cloudfront.net` |
| Acceso de origen | S3 privado mediante OAC |
| Repositorio | `digitallaws/DigitallawsPage` |
| Rama de despliegue | `main` |

La distribución sirve una SPA. La raíz usa `index.html`; CloudFront devuelve `index.html` para errores de ruta 403/404 con estado 200 para permitir que React Router resuelva la URL.

## GitHub Actions y OIDC

El workflow está en `.github/workflows/deploy-aws.yml`. Compila con Node 22 (`npm ci`, `npm run build`), sincroniza `dist/` únicamente a `s3://website-produccion-730335377205/digitallaws/` e invalida la distribución indicada. `--delete` está limitado a ese prefijo para no borrar otros sitios del bucket.

GitHub se autentica con OIDC; no se usan claves AWS permanentes. El workflow espera un GitHub Environment llamado `production` con este **environment secret**:

| Nombre | Valor |
| --- | --- |
| `AWS_ROLE_TO_ASSUME` | `arn:aws:iam::730335377205:role/digitallaws-website-github-deploy` |

El rol está limitado a publicar en el prefijo `digitallaws/` e invalidar la distribución de DigitalLaws. Mantén el secreto en el Environment `production` del repositorio `digitallaws/DigitallawsPage`.

## Activar el flujo

1. Confirma que el secret anterior exista en `Settings → Environments → production → Environment secrets`.
2. Incluye `.github/workflows/deploy-aws.yml` en un commit de `main`.
3. Haz push a `main` o ejecuta manualmente el workflow desde Actions.
4. Revisa que el job de build y publicación termine correctamente.
5. Verifica el sitio y sus rutas directas en CloudFront.

El workflow se preparó localmente; hasta que se agregue y se suba al repositorio, GitHub no puede ejecutarlo.

## Dominio propio

La distribución usa actualmente su hostname de CloudFront. No tiene alias de dominio propio configurado. Para asociar un dominio, primero se debe decidir el hostname, emitir/validar un certificado ACM en `us-east-1`, asociarlo a CloudFront y registrar el DNS correspondiente en Cloudflare.

## Rollback

El sitio corporativo Dimail ocupa el prefijo `dimail/` en el mismo bucket. No ejecutar `aws s3 sync --delete` contra la raíz del bucket. Para revertir una publicación de DigitalLaws, volver a subir la versión anterior del build al prefijo `digitallaws/` y crear una invalidación de CloudFront.

## Docker local

El `Dockerfile` compila la aplicación en Node y copia `dist/` a Nginx. Nginx escucha en el puerto 80 y configura fallback a `index.html`. La publicación de producción descrita arriba se hace directamente a S3/CloudFront, no a un contenedor ECS.