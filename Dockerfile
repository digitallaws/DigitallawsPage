# syntax=docker/dockerfile:1.7

# Etapa de build: compila la app Vite/React
ARG NODE_VERSION=22-alpine
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

# Instala dependencias con caché eficiente
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copia el resto del código
COPY . .

# Compila a producción
RUN npm run build

# Etapa de runtime: sirve estáticos con Nginx
FROM nginx:alpine AS runner

# Copia los archivos compilados
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración de Nginx para SPA (fallback a index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

