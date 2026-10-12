# Metodología de la Investigación para Tutores de TFG

Curso de autogestión para docentes que tutoran Trabajos Finales de Grado, construido con React + Vite — misma plantilla que APA 7 y Expresión Escrita y Comprensión Lectora.

Incluye 6 módulos y 36 lecciones (texto, video, cuestionarios, listas de chequeo y actividades prácticas con retroalimentación), referencias en APA 7 al final de las lecturas, página de ventas con QR/transferencia y candado de código de acceso.

## Módulos

1. El rol del tutor de Trabajo Final de Grado
2. Del tema al problema de investigación
3. Objetivos, marco teórico y antecedentes
4. Diseño metodológico
5. Retroalimentación efectiva y seguimiento
6. Ética, integridad y evaluación de la defensa

## Antes de publicar: revisa estos datos

- `src/Landing.jsx`, bloque `CONFIG`: mismos datos de pago y contacto que los otros cursos. Revísalos por si algo cambió.
- `src/Gate.jsx`: el código de acceso por defecto es `TUTORES-OCTUBRE2026`. Puedes cambiarlo o agregar más códigos en `VALID_CODES`. El código es visible para quien sepa leer el código fuente del sitio; es un candado simple, no seguridad bancaria.
- Los **videos** (lecciones `l1-3`, `l2-3`, `l3-3`, `l4-3`, `l5-3`, `l6-3`) están como campos para pegar un enlace de YouTube. Mientras no pegues uno, el estudiante verá el espacio vacío.

## Sobre las fuentes (contenido confiable)

Cada lectura cita sus fuentes en el texto y las lista en APA 7 al final de la lección. Se comprobaron en la web las fichas de las fuentes principales y, para los artículos de retroalimentación y rúbricas, el contenido que se les atribuye (Hattie y Timperley, 2007; Nicol y Macfarlane-Dick, 2006; Carless y Boud, 2018; Reddy y Andrade, 2010) (autores, año, revista, volumen, páginas y DOI, o editorial y edición en los libros). Aun así:

- Los **libros** (Hernández-Sampieri & Mendoza, 2018; Creswell & Creswell, 2018; Booth et al., 2016; Anderson & Krathwohl, 2001) se verificaron por catálogos de bibliotecas y librerías, no por la editorial. Si vas a citar páginas concretas, consulta el libro.
- En *The craft of research* (Booth et al., 2016), los catálogos consultados solo listan a Booth y Colomb; la lista completa de autores de la 4.ª edición (Williams, Bizup, FitzGerald) no pude confirmarla en línea. Compárala con tu ejemplar.
- Las referencias de **Merino Tejedor (2016)** no incluyen páginas finales porque no se pudieron comprobar.
- Las ideas atribuidas a cada autor se mantienen al nivel que respaldan sus propios resúmenes y títulos. Es buena práctica que, antes de usar el curso con estudiantes de posgrado o en una publicación, revises las lecturas contra las fuentes originales.
- El curso ofrece **criterios generales**: el reglamento de TFG de cada universidad prevalece sobre cualquier recomendación del curso.

## Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior.

## Cómo correrlo en tu computadora

```
npm install
npm run dev
```

## Cómo publicarlo en internet (gratis)

1. Sube **el contenido** de esta carpeta a un repositorio de GitHub **nuevo** (por ejemplo, `tutores-tfg`), sin mezclarlo con los repositorios de los otros cursos. No subas `node_modules` ni `dist`.
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub, "Add New Project" → importa el repositorio nuevo.
3. Deja la configuración automática y haz clic en "Deploy".
4. Copia el enlace que te da Vercel y pídele a Claude que actualice la tarjeta de este curso en tu vitrina **Ficha Cursos**.

## Actividades prácticas

Las 6 actividades prácticas (una por módulo) se completan en línea, con guardado automático, y se descargan como PDF desde `public/actividad-practica-modulo1.pdf` a `public/actividad-practica-modulo6.pdf`.

### Retroalimentación: cómo sabe el estudiante si acertó

- En los ejercicios de elección (`"choice-items"`), cada ítem lleva `correct` (índice de la opción correcta, desde 0) y `explanation`. Al responder todos aparece **"Revisar mis respuestas"**, que marca en verde lo correcto y en rojo lo incorrecto, con la explicación debajo. **"Intentar de nuevo"** reinicia el ejercicio.
- En los ejercicios abiertos (`"prompts"` y `"source-compare"`), cada pregunta lleva `sample` (respuesta modelo). Aparece **"Ver respuesta modelo"** para que el estudiante compare su redacción, sin marcarla como correcta o incorrecta.

## Autora

Msc. Betty Meneses Ayllón
