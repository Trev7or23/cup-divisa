---
name: Cyber-Fintech Dark Neon
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#b9cac4'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#83948f'
  outline-variant: '#3a4a46'
  surface-tint: '#00dfc1'
  primary: '#d7fff3'
  on-primary: '#00382f'
  primary-container: '#00f5d4'
  on-primary-container: '#006c5c'
  inverse-primary: '#006b5b'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#dcffea'
  on-tertiary: '#003824'
  tertiary-container: '#66f3b6'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#26fedc'
  primary-fixed-dim: '#00dfc1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  currency-display:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  currency-tabular:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

Este sistema de diseño está concebido para plataformas financieras modernas, paneles de trading y monitoreo de divisas (con énfasis en CUP y tasas de cambio internacionales). Combina la precisión analítica de herramientas financieras de alta gama con la energía visual del neo-tecnicismo oscuro. 

El estilo visual fusiona **minimalismo estructurado** y **toques ciber-ópticos**: fondos oscuros profundos con gradaciones violetas de baja luminosidad, tarjetas sobrias y acentos neón controlados (cian eléctrico y esmeralda) que dirigen el foco sin generar saturación cognitiva ni comprometer la legibilidad. El resultado evoca confianza, vanguardia tecnológica, dinamismo en tiempo real y rigurosa exactitud en el manejo de datos monetarios.

## Colors

La paleta se apoya en una base profunda e inmersiva sobre la cual los acentos vibrantes adquieren luminancia nítida y jerárquica:

- **Primary (`#00F5D4`)**: Cian eléctrico utilizado para llamadas primarias a la acción, estados activos prioritarios y micro-resaltados críticos de navegación.
- **Secondary (`#3B82F6`)**: Azul cobalto vibrante destinado a acciones secundarias, gráficos de tendencia estable y tabs seleccionados.
- **Tertiary (`#10B981`)**: Verde esmeralda neón reservado para variaciones positivas de tasas de cambio, balances en alza y confirmaciones exitosas de operaciones.
- **Neutral Base (`#0B0F19`)**: Fondo oscuro con subtono violeta profundo, reduciendo la fatiga visual nocturna.
- **Surface & Cards (`#111827`)**: Superficies de elevación 1 y contenedores de información.
- **Borders & Dividers (`#1F2937`)**: Delimitación estructural de bajo contraste. En interacciones activas o foco, se complementa con halos sutiles derivados de `#00F5D4` con 25% de opacidad.
- **Alert / Negative (`#EF4444`)**: Rojo puro para depreciaciones de divisas y errores críticos.

## Typography

El emparejamiento tipográfico balancea audacia técnica y máxima legibilidad:

- **Titulares (`Space Grotesk`)**: Transmite modernidad y contornos geométricos afilados que refuerzan la naturaleza Fintech.
- **Cuerpo (`Hanken Grotesk`)**: Su dibujo limpio y neutral garantiza lecturas fluidas en informes y tablas densas.
- **Datos y Métricas (`JetBrains Mono`)**: Empleado para todos los importes, diferenciales de tasas en CUP y códigos de moneda (USD/CUP, MLC/CUP, EUR/CUP). Utiliza propiedades `font-variant-numeric: tabular-nums` para evitar saltos ópticos y asegurar alineación vertical estricta en cuadrículas de números en vivo.

## Layout & Spacing

El diseño emplea un sistema de cuadrícula fluida adaptable de 12 columnas en escritorio, 8 en tabletas y 4 en pantallas móviles:

- **Móvil (< 768px)**: Márgenes externos de `1rem`, medianil (`gutter`) de `1rem`. Vistas de tarjetas apiladas en columna única con controles en anchura completa.
- **Tablet (768px – 1024px)**: Márgenes de `1.5rem`, medianil de `1rem`. Gráficos y tablas adoptan layouts de 2 columnas.
- **Desktop (> 1024px)**: Márgenes de `2.5rem`, medianiles de `1.5rem`. Paneles de intercambio y tablas de monitoreo multidivisa organizados en estructuras multi-panel lado a lado.

## Elevation & Depth

La jerarquía visual se construye mediante superposición de superficies oscuras, bordes luminiscentes y halos de neón calibrados:

- **Nivel 0 (Lienzo)**: Fondo base `#0B0F19` con gradientes radiales oscuros en tonos índigo/violeta profundo de fondo.
- **Nivel 1 (Tarjetas y Contenedores)**: Superficie `#111827` delimitada por un borde continuo de 1px en `#1F2937`.
- **Nivel 2 (Modales, Flyouts y Tooltips)**: Superficie `#1F2937` con sombra ambiental `0 12px 32px rgba(0, 0, 0, 0.6)`.
- **Luminiscencia de Foco (Neon Glow)**: Elementos interactivos destacados (inputs activos, botones primarios en hover, tarjetas prioritarias) proyectan un resplandor exterior suave: `box-shadow: 0 0 16px rgba(0, 245, 212, 0.25), 0 0 2px rgba(0, 245, 212, 0.75)`.

## Shapes

El sistema implementa una escala geométrica equilibrada (`roundedness: 2`, equivalente a 8px / 0.5rem base):

- **Contenedores y Tarjetas (`rounded-lg`)**: Radio de curvatura de 1rem (16px), aportando fluidez a las cajas oscuras.
- **Inputs, Botones y Tabs (`rounded`)**: Radio base de 0.5rem (8px), asegurando un encuadre compacto y profesional.
- **Badges y Chips (`rounded-full`)**: Terminación en cápsula (pill-shaped) para diferenciar el rol informativo del rol estructural.

## Components

### Botones
- **Primario**: Fondo `#00F5D4`, texto en `#0B0F19` de alto contraste, tipografía `Space Grotesk` en peso 600. En hover/active genera un halo perimetral `rgba(0, 245, 212, 0.4)`.
- **Secundario**: Fondo transparente, borde de 1px en `#3B82F6`, texto en `#3B82F6`. En hover adopta relleno suave `rgba(59, 130, 246, 0.1)`.
- **Ghost**: Texto en blanco tenue `#9CA3AF`, sin borde; en foco aplica anillo de 2px en `#00F5D4`.

### Inputs y Campos de Conversión
- Fondo de campo `#111827` con contorno de 1px en `#1F2937`.
- **Labels flotantes / claros**: Tipografía monoespaciada en `#9CA3AF` que se eleva sobre el borde o descansa con separación fija de `0.25rem`.
- **Estado de foco**: Borde en `#00F5D4` con halo neón difuso de 4px a 20% de opacidad y `outline: none` para garantizar cumplimiento de visibilidad AA/AAA sin bordes nativos redundantes.
- **Fijación de Divisa**: Selector integrado a la derecha (e.g., `CUP`, `USD`) con números tabulares para montos.

### Tabs Accesibles
- Rol ARIA estricto (`tablist`, `tab`, `tabpanel`).
- Contenedor en cápsula o pastilla plana `#111827`. El tab seleccionado recibe fondo `#1F2937`, texto `#00F5D4`, y una línea base activa de 2px en `#00F5D4` o relieve sutil. Navegables mediante teclado (teclas de flechas).

### Badges de Variación Financiera
- **Tasa Positiva**: Fondo `rgba(16, 185, 129, 0.12)`, texto y flecha indicadora en `#10B981`.
- **Tasa Negativa**: Fondo `rgba(239, 68, 68, 0.12)`, texto y flecha indicadora en `#EF4444`.
- **Neutro / Informativo**: Fondo `rgba(59, 130, 246, 0.12)`, texto en `#60A5FA`.
- Formato tipográfico en `JetBrains Mono` a 11px, caja alta.

### Tarjetas de Monitoreo (Currency Cards)
- Superficie `#111827`, borde en `#1F2937`, paddings internos de `1.5rem`.
- Distribución: Código par en `Space Grotesk` (arriba a la izquierda), indicador badge de estado (arriba a la derecha), tasa de cambio en tamaño display monoespaciado (al centro) y diferencial neto en CUP (en la base).