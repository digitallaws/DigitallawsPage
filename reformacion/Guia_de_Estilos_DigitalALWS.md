# Guía de estilos — DigitalALWS

**Sitio web corporativo · Sistema visual**  
**Versión:** 1.0

Esta guía documenta la tipografía, la escala de tamaños, los radios de borde y la paleta de colores de DigitalALWS en sus modos oscuro y claro. Su objetivo es mantener una identidad visual **elegante, limpia, consistente y accesible** en todas las páginas del sitio.

## 1. Tipografía principal

| Propiedad | Definición |
| --- | --- |
| Familia principal | **Plus Jakarta Sans** ([Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)) |
| Fuentes alternativas | `Inter`, `system-ui`, `-apple-system`, `sans-serif` |
| Familia CSS | `"Plus Jakarta Sans", Inter, system-ui, -apple-system, sans-serif` |

### Pesos tipográficos

| Peso | Valor | Uso recomendado |
| --- | ---: | --- |
| Regular | `400` | Textos descriptivos, párrafos y notas legales |
| Medium | `500` | Enlaces, textos de apoyo y etiquetas secundarias |
| SemiBold | `600` | Botones, subtítulos, navegación y etiquetas de formularios |
| Bold | `700` | Títulos, énfasis y nombres de producto |
| ExtraBold | `800` | Títulos principales de gran impacto y números destacados |

## 2. Escala tipográfica y espaciados

| Nivel / rol | Tamaño | Interlineado (`line-height`) | Uso principal |
| --- | --- | --- | --- |
| Display / H1 Hero | `48–56px` · `3–3.5rem` | `1.15–1.2` | Título principal de portada y encabezados hero |
| H2 / Sección | `32–36px` · `2–2.25rem` | `1.25` | Títulos de secciones, como «Nuestros productos» |
| H3 / Subtítulo o tarjeta | `20–24px` · `1.25–1.5rem` | `1.35` | Títulos de tarjetas de producto y bloques destacados |
| Body Large | `18px` · `1.125rem` | `1.5–1.6` | Descripciones de encabezado y párrafos introductorios |
| Body Regular | `15–16px` · `0.95–1rem` | `1.6` | Párrafos generales, textos legales y campos de entrada |
| Caption / Metadatos | `12–14px` · `0.75–0.875rem` | `1.4` | Badges, etiquetas, estados y pie de página |
| Métricas / Números | `32–40px` · `2–2.5rem` | `1.1` | Indicadores numéricos, cuando correspondan a datos verificados |

> **Adaptación responsive:** los tamaños de títulos son referencias para escritorio. Deben reducirse proporcionalmente en pantallas pequeñas para evitar cortes y mantener una buena jerarquía de lectura.

### Radios de borde (`border-radius`)

| Componente | Radio recomendado |
| --- | --- |
| Botones y badges | `8px` a `9999px` (estilo píldora) |
| Tarjetas, formularios y contenedores | `12–16px` |

## 3. Esquema de colores

### 3.1. Color de marca y acentos — ambos modos

| Rol | Valor | Referencia / uso |
| --- | --- | --- |
| Azul primario (`Brand Primary`) | `#2563EB` | Blue 600 · color principal de marca y botones |
| Azul interactivo / Hover | `#1D4ED8` | Blue 700 · interacción y estados hover |
| Azul claro | `#3B82F6` | Blue 500 · énfasis secundario |
| Azul suave | `#60A5FA` | Blue 400 · detalles y acentos |
| Tinte azul / Badge activo | `rgba(37, 99, 235, 0.12)` | Fondos sutiles para etiquetas y estados activos |

### 3.2. Modo oscuro — Executive Dark Tech 🌙

| Rol | Valor hexadecimal / CSS | Descripción de uso |
| --- | --- | --- |
| Fondo principal (`Background / Canvas`) | `#071326` | Color base general de la página |
| Superficie más baja (`Container Lowest`) | `#030E21` | Secciones contrastadas y pie de página |
| Superficie de tarjeta (`Container Low`) | `#101C2F` | Tarjetas de productos y bloques de formularios |
| Superficie elevada (`Container High`) | `#16253C` | Modales, menús emergentes y tarjetas destacadas |
| Bordes y separadores | `#1E293B` / `rgba(255, 255, 255, 0.08)` | Divisores, campos y tarjetas |
| Borde activo / Focus | `#2563EB` | Foco de campos e interacciones |
| Texto primario | `#F8FAFC` | Slate 50 · títulos y énfasis |
| Texto secundario | `#94A3B8` | Slate 400 · párrafos y descripciones |
| Texto terciario / Muted | `#64748B` | Slate 500 · fechas, notas y placeholders |

### 3.3. Modo claro — Executive Light Tech ☀️

| Rol | Valor hexadecimal | Descripción de uso |
| --- | --- | --- |
| Fondo principal (`Background / Canvas`) | `#FAF8FF` / `#F8FAFC` | Alternativas para un fondo limpio e institucional |
| Superficie blanca (`Cards & Containers`) | `#FFFFFF` | Tarjetas de productos y formularios |
| Superficie secundaria (`Container Low`) | `#F1F5F9` | Slate 100 · campos, tablas y banners |
| Bordes y separadores | `#E2E8F0` | Slate 200 · contornos suaves |
| Borde activo / Focus | `#2563EB` | Blue 600 · foco y botones |
| Texto primario | `#0F172A` | Slate 900 · títulos y encabezados |
| Texto secundario | `#475569` | Slate 600 · párrafos y descripciones |
| Texto terciario / Muted | `#94A3B8` | Slate 400 · placeholders y avisos secundarios |

### 3.4. Estados y notificaciones — ambos modos

| Estado | Color | Uso recomendado |
| --- | --- | --- |
| Éxito / Disponible | `#10B981` | Emerald · badge «Disponible» o confirmaciones exitosas |
| En desarrollo / Advertencia | `#F59E0B` | Amber · badge «En desarrollo» y advertencias |
| Próximamente / Informativo | `#0EA5E9` | Sky Blue · badge «Próximamente» y avisos informativos |

## 4. Principios de aplicación

1. **Priorizar la legibilidad.** Utilizar el color de texto correspondiente a cada superficie y verificar el contraste en ambos modos.
2. **Mantener la jerarquía.** Reservar los tamaños Display para mensajes principales; utilizar H2 y H3 de manera consistente.
3. **Dosificar el acento azul.** Destacarlo en llamadas a la acción, enlaces y estados interactivos sin saturar la interfaz.
4. **Preservar una apariencia corporativa.** Favorecer los espacios en blanco, las composiciones ordenadas y las tarjetas sobrias.
5. **Representar estados reales.** Las etiquetas de disponibilidad, las métricas y cualquier afirmación de seguridad deben basarse en información verificada. Los números ilustrativos no deben publicarse como datos reales.

---

*DigitalALWS · Guía de estilos del sitio corporativo.*
