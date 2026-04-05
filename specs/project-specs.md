# Especificaciones del Proyecto: LuxMist

## 1. Vision General
Landing page B2B premium para LuxMist, empresa canadiense (Quebec) que instala maquinas automaticas de perfume en discotecas, bares y pubs. El objetivo es convertir duenos de locales en clientes, no vender al consumidor final.

## 2. Modelo de Negocio
- LuxMist instala maquinas de perfume automaticas en locales nocturnos
- Sin inversion inicial para el dueno del local
- El local genera ingresos pasivos adicionales
- LuxMist se encarga de mantenimiento, reposicion y soporte
- Revenue share entre LuxMist y el local

## 3. Objetivo de la Landing
- **Conversion B2B**: Que duenos de bares/discotecas/pubs soliciten instalacion
- **NO es e-commerce**: No se vende perfume al consumidor final
- **Lead generation**: Captar datos via formulario o WhatsApp
- **Confianza y claridad**: Demostrar rentabilidad con datos concretos

## 4. Publico Objetivo
- Duenos/gerentes de discotecas, bares, pubs en Quebec, Canada
- Idioma principal: Frances (quebecois formal)
- Idioma secundario: Ingles
- Perfil: empresarios que buscan maximizar ingresos de su local

## 5. Alcance
### Incluido
- Hero con propuesta de valor clara (ingresos sin inversion)
- Explicacion simple del servicio
- Beneficios para el local (3-4 beneficios clave)
- Ejemplo de ingresos potenciales mensuales (dato de conversion)
- Seccion "Comment ca fonctionne" (como funciona, 3 pasos)
- CTA claro (formulario de contacto + boton WhatsApp)
- Toggle de idioma Frances/Ingles
- Diseno premium tipo lujo

### Excluido
- E-commerce / carrito
- Blog / noticias
- Backend / base de datos
- Panel de administracion

## 6. Arquitectura
### Tech Stack
- HTML5 semantico
- CSS3 con custom properties
- Vanilla JavaScript (ES6+)
- Google Fonts (CDN)
- Sin frameworks, sin build tools

### Estructura de la pagina
1. **Navbar** (sticky): Logo + toggle idioma (FR | EN) + CTA boton
2. **Hero** (100vh): Titulo impactante, subtitulo con propuesta, CTA principal
3. **Problema/Solucion**: Por que instalar LuxMist (dolor del local → solucion)
4. **Beneficios** (3-4 cards): Ingresos pasivos, sin inversion, mejora experiencia, sin esfuerzo
5. **Ingresos Potenciales**: Calculadora/ejemplo visual de ganancias mensuales
6. **Como Funciona** (3 pasos): Contacto → Instalacion → Ganancias
7. **Social Proof**: Testimonios o cifras de confianza
8. **CTA Final**: Formulario + WhatsApp + urgencia
9. **Footer**: Legal, contacto, ubicacion

## 7. Diseno Visual
### Estetica: Lujo Premium Oscuro
Referencia: marcas como Tom Ford, Chanel, Dior — minimalista, oscuro, elegante.

### Paleta
| Color | Hex | Uso |
|-------|-----|-----|
| Negro Profundo | #0A0A0A | Fondo principal |
| Negro Suave | #141414 | Fondo secciones alternas |
| Dorado | #C9A84C | Acentos principales, CTAs, titulos |
| Dorado Claro | #E8D5A3 | Hover, textos destacados |
| Blanco | #FFFFFF | Texto principal sobre oscuro |
| Gris Platino | #B8B8B8 | Texto secundario |
| Gris Oscuro | #2A2A2A | Bordes, separadores, tarjetas |

### Tipografia
- Titulos: Playfair Display (700, 800) — serif elegante, premium
- Cuerpo: Inter (300, 400, 500) — moderna, legible
- Numeros/datos: DM Sans (500, 700) — limpia para cifras

### Responsive Breakpoints
- Movil: < 768px (diseno base, mobile-first)
- Tablet: 768px - 1199px
- Desktop: >= 1200px

## 8. Contenido Bilingue
### Frances (por defecto) — lang="fr-CA"
- Todo el contenido principal en frances quebecois formal
- No usar anglicismos innecesarios
- Tono: profesional, persuasivo, directo

### Ingles (secundario)
- Toggle visible en navbar (FR | EN)
- Mismo contenido traducido
- Cambio instantaneo sin recarga de pagina (JS data-attributes)

## 9. Secciones Detalladas

### 9.1 Hero
- Fondo: gradiente negro con efecto de particulas/bruma sutil
- Titulo FR: "Generez des revenus supplementaires sans investissement"
- Titulo EN: "Generate extra revenue with zero investment"
- Subtitulo FR: "Installez une machine a parfum automatique dans votre etablissement et gagnez jusqu'a 2 000 $/mois — sans aucun effort"
- CTA: "Demander une installation gratuite" / "Request a free installation"
- Indicador visual de scroll

### 9.2 Beneficios (4 cards)
1. Revenus Passifs / Passive Income — icono: monedas/grafico
2. Zero Investissement / Zero Investment — icono: escudo/check
3. Experience Premium / Premium Experience — icono: estrella/perfume
4. Aucun Effort / Zero Effort — icono: reloj/automatico

### 9.3 Ingresos Potenciales
- Visualizacion tipo "calculadora" o infografico
- Dato clave: "Jusqu'a 2 000 $/mois" prominente
- Desglose: X utilizaciones/dia × precio × 30 dias = ingreso mensual
- Fuente grande para numeros (DM Sans 700)

### 9.4 Como Funciona (3 pasos)
1. "Contactez-nous" / "Contact us" — icono telefono
2. "Nous installons gratuitement" / "We install for free" — icono herramienta
3. "Vous gagnez" / "You earn" — icono dinero

### 9.5 CTA Final
- Formulario: Nom, Email, Nom de l'etablissement, Telephone, Ville
- Boton WhatsApp prominente
- Texto urgencia: "Places limitees dans votre region"

## 10. SEO y Metadatos
- Title FR: "LuxMist | Revenus supplementaires pour votre bar — sans investissement"
- Title EN: "LuxMist | Extra revenue for your bar — zero investment"
- Meta description bilingue
- Open Graph tags
- Schema.org LocalBusiness
- lang="fr-CA" por defecto
- Favicon SVG dorado sobre negro

## 11. Metricas de Conversion
La landing debe optimizarse para:
- Click en CTA principal (hero)
- Scroll depth (al menos hasta seccion de ingresos)
- Envio de formulario
- Click en boton WhatsApp
