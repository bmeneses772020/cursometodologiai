import React, { useState, useEffect } from "react";
import {
  FileText,
  PlayCircle,
  HelpCircle,
  CheckCircle2,
  Circle,
  ListChecks,
  RotateCcw,
  ChevronRight,
  BookOpen,
  Link2,
  Lock,
  PenSquare,
  Download,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* CONTENIDO DEL CURSO                                                 */
/* ------------------------------------------------------------------ */

const COURSE = {
  title: "Metodología de la Investigación para Tutores de TFG",
  subtitle: "Curso de autogestión",
  modules: [
    {
      id: "m1",
      label: "Módulo 1",
      title: "El rol del tutor de Trabajo Final de Grado",
      lessons: [
        {
          id: "l1-1",
          type: "texto",
          title: "Acerca del curso",
          duration: "4 min",
          paragraphs: [
            "Este curso de autogestión está dirigido a docentes que tutoran Trabajos Finales de Grado (TFG) en cualquier carrera universitaria. Su propósito es darte un marco claro para acompañar a tus tesistas en cada etapa, desde definir el tema hasta la defensa, con criterios para orientar, retroalimentar y evaluar.",
            "Está organizado en seis módulos: el rol del tutor, del tema al problema de investigación, objetivos y marco teórico, diseño metodológico, retroalimentación y seguimiento, y ética, integridad y evaluación. Cada módulo incluye lecturas cortas, un video de apoyo, un cuestionario, una lista de chequeo y una actividad práctica con retroalimentación inmediata.",
            "La duración estimada es de aproximadamente 3 horas, distribuidas en lecturas cortas y videos de apoyo. Puedes avanzar a tu propio ritmo: tu progreso se guarda automáticamente en este sitio.",
            "Una aclaración importante: cada universidad tiene su propio reglamento de trabajos de grado (modalidades, plazos, formatos, funciones del tutor y del tribunal). Este curso ofrece criterios generales apoyados en bibliografía académica; cuando algo de lo que aquí se plantea se contraponga con tu reglamento institucional, prevalece el reglamento.",
          ],
          tip: "Sugerencia: ten a mano el reglamento de TFG de tu universidad y, si estás tutorando ahora, un borrador real de tu tesista para aplicar cada módulo.",
        },
        {
          id: "l1-2",
          type: "texto",
          title: "¿Qué significa ser tutor de un Trabajo Final de Grado?",
          duration: "8 min",
          paragraphs: [
            "Tutorar un TFG es acompañar a un estudiante mientras desarrolla, por primera vez y con bastante autonomía, un trabajo de investigación o de aplicación profesional. Es una tarea distinta de dictar una clase: el protagonista del trabajo es el tesista, y el tutor orienta, cuestiona y retroalimenta sin escribir el trabajo por él.",
            "La literatura reconoce que este rol plantea desafíos propios para el profesor universitario. Merino Tejedor (2016) reflexiona sobre el perfil del tutor del TFG y propone mirar la tutoría desde enfoques como el empowerment, el coaching y el mentoring, así como desde el aprendizaje autorregulado. La idea de fondo es que el estudiante aprenda a gestionar su propio trabajo, y no que dependa del tutor para cada decisión.",
            "También hay evidencia de que los estudiantes valoran este acompañamiento. En un estudio descriptivo con egresados de una facultad de educación en España, Rebollo Quintela y Espiñeira Bellón (2017) encontraron que los estudiantes percibían la tutoría como muy útil y con un alto nivel de satisfacción. Sus autoras concluyen que es necesario seguir trabajando, en particular, en definir el perfil ideal del profesorado tutor. Conviene leer este estudio como una referencia de un contexto específico y no como una regla universal.",
            "A partir de estas ideas, este curso propone entender el rol del tutor con tres verbos: orientar (ayudar a decidir, no decidir por el estudiante), retroalimentar (señalar con evidencia qué funciona y qué se puede mejorar) y acompañar el proceso (sostener el ritmo, los plazos y la motivación). Por lo general, quedan fuera del rol redactar partes del trabajo, recolectar o procesar los datos en lugar del estudiante, o aprobar sin revisar. Los límites exactos dependen de tu reglamento.",
            "Un primer paso práctico es acordar por escrito, desde la primera reunión, las reglas del acompañamiento: frecuencia y modalidad de las reuniones, canal de comunicación, plazos de entrega y de respuesta, y qué se espera de cada parte. Un acuerdo breve evita malentendidos y facilita ver el avance.",
          ],
          tip: "Sugerencia: lleva un registro simple de cada tutoría (fecha, temas tratados, acuerdos y próxima entrega). Sirve como evidencia del proceso y ordena el trabajo de ambos.",
          references: [
            "Merino Tejedor, E. (2016). El tutor del trabajo fin de grado: nuevos desafíos para el profesor de universidad. International Journal of Developmental and Educational Psychology. Revista INFAD de Psicología, 4(1). https://doi.org/10.17060/ijodaep.2014.n1.v4.608",
            "Rebollo Quintela, N., & Espiñeira Bellón, E. M. (2017). La tutoría durante el proceso de desarrollo del TFG y TFM: análisis del grado de utilidad y satisfacción del alumnado. Educatio Siglo XXI, 35(2), 161–180. https://doi.org/10.6018/j/298561",
          ],
        },
        {
          id: "l1-3",
          type: "video",
          title: "Video: tu rol como tutor del TFG",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video introductorio sobre el rol del tutor (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l1-4",
          type: "quiz",
          title: "Cuestionario: el rol del tutor",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Cuál es el papel central del tutor de un TFG?",
              options: [
                "Redactar las partes más difíciles para asegurar la calidad",
                "Orientar y retroalimentar mientras el estudiante desarrolla su propio trabajo",
                "Aprobar el trabajo final sin revisiones intermedias",
                "Decidir el tema y los resultados que debe obtener el estudiante",
              ],
              correct: 1,
              explanation:
                "El protagonista del trabajo es el tesista; el tutor orienta, cuestiona y retroalimenta, pero no escribe el trabajo por él.",
            },
            {
              q: "Según Merino Tejedor (2016), la tutoría del TFG puede analizarse desde enfoques como...",
              options: [
                "La evaluación estandarizada y el control de asistencia",
                "La dictación de clases magistrales y el examen oral",
                "Empowerment, coaching y mentoring, y el aprendizaje autorregulado",
                "La corrección ortográfica y el formato del documento",
              ],
              correct: 2,
              explanation:
                "El autor reflexiona sobre el perfil del tutor y plantea esos enfoques, junto con el aprendizaje autorregulado, para que el estudiante gestione su propio trabajo.",
            },
            {
              q: "¿Qué conviene acordar por escrito al inicio de la tutoría?",
              options: [
                "Solo la nota final que se espera obtener",
                "El tema exacto y las conclusiones del trabajo",
                "Frecuencia de reuniones, canal de comunicación, plazos y expectativas de cada parte",
                "Únicamente el formato de la portada",
              ],
              correct: 2,
              explanation:
                "Un acuerdo breve sobre las reglas del acompañamiento evita malentendidos y permite ver el avance a lo largo del proceso.",
            },
            {
              q: "Si una recomendación general de este curso contradice el reglamento de TFG de tu universidad, ¿qué prevalece?",
              options: [
                "La recomendación del curso",
                "El reglamento institucional",
                "La preferencia del estudiante",
                "Lo que haya hecho el tutor en años anteriores",
              ],
              correct: 1,
              explanation:
                "Cada universidad define modalidades, plazos, formatos y funciones; el reglamento institucional es la referencia obligatoria.",
            },
          ],
        },
        {
          id: "l1-5",
          type: "checklist",
          title: "Lista de chequeo: el rol del tutor",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Puedo explicar la diferencia entre orientar, retroalimentar y reemplazar al estudiante.",
            "Sé qué tareas del TFG corresponden al estudiante y cuáles al tutor, según mi reglamento.",
            "Conozco la idea de acompañar para que el estudiante desarrolle autonomía y autorregulación.",
            "Tengo claro qué puntos debo acordar por escrito en la primera tutoría.",
            "Tengo a mano el reglamento de TFG de mi universidad y sé dónde consultar sus plazos y funciones.",
            "Llevo (o llevaré) un registro de las tutorías con acuerdos y próximas entregas.",
          ],
        },
        {
          id: "l1-6",
          type: "practica",
          title: "Actividad práctica: define tu rol de tutor",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a distinguir qué acciones forman parte del rol del tutor, a redactar el acuerdo de tutoría con tu tesista y a reflexionar sobre tu propia práctica.",
          pdfHref: "/actividad-practica-modulo1.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Orientar, retroalimentar o reemplazar?",
              instruction:
                "Lee cada acción y marca si forma parte del rol del tutor o si excede ese rol. Luego revisa tus respuestas.",
              choiceLabels: ["Parte del rol del tutor", "Excede el rol del tutor"],
              items: [
                { id: "a", text: "Señalar al estudiante que su objetivo general no es coherente con su pregunta de investigación y explicarle por qué.", correct: 0, explanation: "Es retroalimentación con fundamento: ayuda al estudiante a mejorar su propio trabajo." },
                { id: "b", text: "Redactar el marco teórico completo porque el estudiante tiene poco tiempo.", correct: 1, explanation: "Escribir el trabajo por el estudiante excede el rol: la autoría y el aprendizaje son del tesista." },
                { id: "c", text: "Acordar con el estudiante un cronograma de entregas parciales.", correct: 0, explanation: "Acompañar el proceso y sostener los plazos es parte del rol del tutor." },
                { id: "d", text: "Aplicar el instrumento a la muestra del estudiante para avanzar más rápido.", correct: 1, explanation: "La recolección de datos es responsabilidad del estudiante; el tutor la orienta, pero no la reemplaza." },
                { id: "e", text: "Sugerir lecturas y bases de datos donde buscar antecedentes.", correct: 0, explanation: "Orientar la búsqueda de fuentes es parte del acompañamiento; la búsqueda y la selección las hace el estudiante." },
              ],
            },
            {
              id: "ex2",
              kind: "prompts",
              title: "Tu acuerdo de tutoría",
              instruction:
                "Redacta, en una o dos oraciones por punto, el acuerdo que propondrías a un tesista nuevo. Después compáralo con la respuesta modelo.",
              prompts: [
                {
                  id: "frecuencia",
                  label: "Frecuencia, modalidad y canal de las tutorías:",
                  sample: "Nos reuniremos cada dos semanas durante 30 minutos, de forma presencial o por videollamada, y usaremos el correo institucional para enviar borradores y dudas puntuales.",
                },
                {
                  id: "plazos",
                  label: "Plazos de entrega del estudiante y de respuesta del tutor:",
                  sample: "El estudiante enviará cada avance al menos tres días antes de la reunión, y yo devolveré mis comentarios por escrito en un máximo de siete días hábiles.",
                },
                {
                  id: "compromisos",
                  label: "Qué espera cada parte (compromisos del estudiante y del tutor):",
                  sample: "El estudiante se compromete a entregar versiones propias, citar sus fuentes y registrar los cambios; el tutor se compromete a orientar, dar retroalimentación con ejemplos y respetar los plazos acordados.",
                },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Tu reflexión",
              instruction: "Responde en tus propias palabras.",
              prompts: [
                {
                  id: "r1",
                  label: "Piensa en una tutoría que hayas realizado o recibido: ¿en qué momento el tutor orientó y en qué momento pudo haber decidido por el estudiante?",
                  sample: "Una respuesta posible: «Orientó cuando preguntó por qué elegí ese enfoque; decidió por mí cuando me indicó directamente qué instrumento usar, sin que yo pudiera argumentarlo.»",
                },
                {
                  id: "r2",
                  label: "¿Qué punto de tu forma actual de tutorar ajustarías a partir de este módulo?",
                  sample: "Por ejemplo: «Empezaría con un acuerdo escrito de plazos y frecuencia, y registraría los acuerdos de cada reunión.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m2",
      label: "Módulo 2",
      title: "Del tema al problema de investigación",
      lessons: [
        {
          id: "l2-1",
          type: "texto",
          title: "De tema a problema: tres pasos",
          duration: "8 min",
          paragraphs: [
            "Muchos estudiantes llegan a la primera tutoría con un tema, no con un problema de investigación. Un tema es un área amplia (por ejemplo, «el uso de redes sociales en universitarios»); un problema es una situación concreta que genera una pregunta que vale la pena responder. Pasar de uno a otro es, probablemente, el trabajo más importante de las primeras tutorías.",
            "Booth et al. (2016) describen este paso en tres movimientos que puedes usar como guía de conversación: primero, nombrar el tema («estoy estudiando…»); segundo, plantear una pregunta indirecta sobre él («porque quiero averiguar quién, cómo o por qué…»); y tercero, explicar su significado («para ayudar a mi lector a entender…»). El tercer paso es el más difícil y el que más suele faltar: responde a la pregunta «¿y a quién le importa?».",
            "Los mismos autores diferencian entre problemas prácticos —situaciones del mundo que se quiere mejorar— y problemas de investigación o conceptuales —preguntas sobre algo que todavía no se entiende—, y señalan que la investigación responde a estos últimos aunque su origen sea práctico. Para la tutoría, esto ayuda a que el estudiante distinga qué necesita comprender para poder luego proponer o intervenir.",
            "Delimitar significa recortar el tema hasta volverlo investigable con el tiempo y los recursos de un TFG. Una forma práctica de hacerlo es acotar por cuatro dimensiones: población (¿quiénes?), espacio (¿dónde?), tiempo (¿cuándo?) y aspecto (¿qué dimensión específica?). Por ejemplo, el tema «redes sociales en universitarios» puede acotarse a «uso de redes sociales con fines académicos entre estudiantes de primer año de una carrera, durante el primer semestre de 2026».",
          ],
          tip: "Pregunta clave para la tutoría: «Si tuvieras que explicarle a alguien, en una frase, por qué este trabajo importa, ¿qué dirías?».",
          references: [
            "Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald, W. T. (2016). The craft of research (4th ed.). University of Chicago Press.",
          ],
        },
        {
          id: "l2-2",
          type: "texto",
          title: "Cómo evaluar un planteamiento del problema",
          duration: "8 min",
          paragraphs: [
            "Un buen planteamiento del problema se reconoce porque sus partes son coherentes entre sí. Hernández-Sampieri y Mendoza (2018) describen el planteamiento como el conjunto de elementos que comunican qué se quiere investigar: los objetivos, las preguntas, la justificación y la viabilidad, además de la evaluación de las deficiencias en el conocimiento del problema.",
            "Para la justificación, los autores proponen revisar criterios como la conveniencia (¿para qué sirve?), la relevancia social (¿quién se beneficia?), las implicaciones prácticas, el valor teórico y la utilidad metodológica. No todos los trabajos cumplen todos los criterios, pero el estudiante debe poder explicar con argumentos al menos algunos de ellos.",
            "La viabilidad se refiere a si el trabajo puede realizarse con los recursos, el tiempo y el acceso a la información que el estudiante realmente tiene. En la práctica, un problema relevante pero imposible de abordar en un semestre, o que depende de acceder a datos o personas que el estudiante no puede obtener, debe reformularse o recortarse.",
            "Algunas señales de alerta que puedes buscar en una primera versión: (a) un tema demasiado amplio, sin delimitación de población, espacio y tiempo; (b) una pregunta que se responde con sí o no, sin profundidad; (c) un «problema» que en realidad es una solución disfrazada («falta una aplicación móvil…»), lo que cierra la pregunta antes de investigarla; (d) objetivos que no responden a la pregunta; y (e) una justificación que solo afirma que el tema es «importante» sin decir para quién.",
            "Una herramienta útil es una matriz de coherencia que coloque en columnas el problema, la pregunta, el objetivo general y los objetivos específicos: revisarla con el estudiante permite ver rápidamente si cada parte responde a la anterior. En modalidades de proyecto aplicado (por ejemplo, proyectos tecnológicos), la matriz puede enfocarse en problema, objetivos, propuesta de solución, resultados esperados, indicadores y evaluación, en lugar de hipótesis y variables. Confirma qué solicita tu reglamento.",
          ],
          references: [
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l2-3",
          type: "video",
          title: "Video: cómo delimitar el problema con tu tesista",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre cómo conversar con un tesista para pasar de un tema amplio a un problema delimitado.",
        },
        {
          id: "l2-4",
          type: "quiz",
          title: "Cuestionario: del tema al problema",
          duration: "4 preguntas",
          questions: [
            {
              q: "Según Booth et al. (2016), ¿cuál de los tres pasos suele faltar y es el más difícil de plantear?",
              options: [
                "Nombrar el tema",
                "Plantear una pregunta sobre el tema",
                "Explicar el significado o relevancia del trabajo («¿y a quién le importa?»)",
                "Elegir la bibliografía",
              ],
              correct: 2,
              explanation:
                "Explicar por qué importa el trabajo y para quién es el paso que más suele omitirse, y el que da sentido a la pregunta.",
            },
            {
              q: "¿Qué es una «solución disfrazada de problema»?",
              options: [
                "Un problema demasiado amplio para delimitarse",
                "Plantear como problema la ausencia de algo que ya se decidió construir (por ejemplo, «falta una aplicación»)",
                "Un problema que no tiene antecedentes",
                "Una pregunta con respuesta de sí o no",
              ],
              correct: 1,
              explanation:
                "Cuando el problema se formula como la falta de una solución específica, se cierra la pregunta antes de investigarla.",
            },
            {
              q: "La viabilidad de un planteamiento se refiere a...",
              options: [
                "Si el tema le gusta al tutor",
                "Si el tema es muy popular en redes",
                "Si puede realizarse con los recursos, el tiempo y el acceso a la información disponibles",
                "Si tiene muchas citas bibliográficas",
              ],
              correct: 2,
              explanation:
                "Un problema relevante pero imposible de abordar con los recursos y tiempos del estudiante debe reformularse o recortarse.",
            },
            {
              q: "Delimitar un tema consiste en...",
              options: [
                "Acotarlo por población, espacio, tiempo y aspecto específico",
                "Ampliarlo para incluir más casos",
                "Eliminar la justificación",
                "Cambiarlo por otro en cada tutoría",
              ],
              correct: 0,
              explanation:
                "Delimitar es recortar el tema hasta volverlo investigable en el tiempo y con los recursos del TFG.",
            },
          ],
        },
        {
          id: "l2-5",
          type: "checklist",
          title: "Lista de chequeo: del tema al problema",
          duration: "6 ítems",
          intro: "Usa esta lista para revisar el planteamiento del problema de tu tesista.",
          items: [
            "El tema está delimitado en población, espacio, tiempo y aspecto.",
            "El estudiante puede explicar por qué importa su trabajo y para quién.",
            "La pregunta de investigación es abierta y no se responde con un simple sí o no.",
            "El problema no es una solución disfrazada (no da por hecho lo que se va a construir).",
            "El trabajo es viable con los recursos, el tiempo y el acceso a la información disponibles.",
            "Los objetivos responden a la pregunta, y la matriz de coherencia no presenta contradicciones.",
          ],
        },
        {
          id: "l2-6",
          type: "practica",
          title: "Actividad práctica: del tema al problema",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a distinguir un tema amplio de un problema delimitado, a detectar señales de alerta en un planteamiento y a delimitar un tema real.",
          pdfHref: "/actividad-practica-modulo2.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Tema amplio o problema delimitado?",
              instruction:
                "Lee cada enunciado y marca si es un tema amplio o un problema ya delimitado. Luego revisa tus respuestas.",
              choiceLabels: ["Tema amplio", "Problema delimitado"],
              items: [
                { id: "a", text: "«Las redes sociales en los jóvenes.»", correct: 0, explanation: "No especifica población, espacio, tiempo ni aspecto: es un tema amplio." },
                { id: "b", text: "«Frecuencia y finalidad del uso de redes sociales con fines académicos entre estudiantes de primer año de Ingeniería Industrial de una universidad de Santa Cruz de la Sierra durante el primer semestre de 2026.»", correct: 1, explanation: "Delimita población, espacio, tiempo y aspecto específico." },
                { id: "c", text: "«La educación en Bolivia.»", correct: 0, explanation: "Es un área enorme; no se puede investigar en un TFG sin recortarla." },
                { id: "d", text: "«Percepción de docentes de un colegio sobre la utilidad de la retroalimentación escrita en la asignatura de Lenguaje durante la gestión 2026.»", correct: 1, explanation: "Acota quiénes participan, dónde, cuándo y qué aspecto se estudia." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "Señales de alerta en un planteamiento",
              instruction:
                "Lee cada fragmento y marca si es una señal de alerta o si está bien planteado.",
              choiceLabels: ["Señal de alerta", "Bien planteado"],
              items: [
                { id: "a", text: "Problema: «Falta una aplicación móvil que gestione el inventario de la tienda.»", correct: 0, explanation: "Es una solución disfrazada de problema: presupone lo que se va a construir en vez de describir la situación." },
                { id: "b", text: "Pregunta: «¿Cómo influye la carga horaria semanal en el rendimiento académico de los estudiantes de primer año de Contaduría de la gestión 2026?»", correct: 1, explanation: "Es abierta, delimitada y se puede investigar." },
                { id: "c", text: "Pregunta: «¿Los estudiantes usan internet? (Sí / No)».", correct: 0, explanation: "Se responde con sí o no, sin profundidad ni análisis posible." },
                { id: "d", text: "Justificación: «Este tema es muy importante para la sociedad actual.»", correct: 0, explanation: "Afirma importancia sin decir para quién ni por qué: falta argumentar conveniencia o relevancia." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Delimita un tema real",
              instruction:
                "Elige un tema que esté trabajando un tesista tuyo (o uno hipotético de tu carrera) y complétalo paso a paso.",
              prompts: [
                {
                  id: "tema",
                  label: "Escribe el tema amplio inicial:",
                  sample: "Por ejemplo: «La deserción universitaria.»",
                },
                {
                  id: "delimitado",
                  label: "Delimítalo por población, espacio, tiempo y aspecto específico:",
                  sample: "Por ejemplo: «Factores económicos y académicos asociados al abandono del primer año entre estudiantes de Ingeniería de Sistemas de una universidad privada, gestiones 2024–2025.»",
                },
                {
                  id: "significado",
                  label: "Completa la frase: «Estoy estudiando… porque quiero averiguar… para ayudar a entender…».",
                  sample: "«Estoy estudiando el abandono del primer año en Ingeniería de Sistemas, porque quiero averiguar qué factores económicos y académicos se asocian a él, para ayudar a la carrera a diseñar acciones de acompañamiento más oportunas.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m3",
      label: "Módulo 3",
      title: "Objetivos, marco teórico y antecedentes",
      lessons: [
        {
          id: "l3-1",
          type: "texto",
          title: "Objetivos de investigación bien formulados",
          duration: "8 min",
          paragraphs: [
            "Los objetivos son el compromiso del trabajo: dicen qué hará el estudiante para responder a su pregunta. Hernández-Sampieri y Mendoza (2018) indican que deben expresarse con claridad y precisión, ser congruentes entre sí y con el planteamiento del problema, y poder alcanzarse. Por eso son una de las partes donde más conviene que el tutor sea exigente.",
            "Un objetivo bien escrito comienza con un verbo en infinitivo que describe una acción observable (identificar, describir, comparar, analizar, evaluar, diseñar) y especifica qué se hará, en quiénes y en qué contexto. Para elegir el verbo puedes apoyarte en la taxonomía de Bloom revisada por Anderson y Krathwohl (2001), que ordena los procesos cognitivos en seis categorías: recordar, comprender, aplicar, analizar, evaluar y crear.",
            "El verbo debe corresponder al alcance del trabajo. «Describir» o «caracterizar» son adecuados en estudios descriptivos; «comparar» o «relacionar» en estudios que buscan asociaciones; «explicar» o «determinar el efecto» exigen diseños que permitan sostener esa afirmación. Un error frecuente es prometer en el objetivo un alcance que el diseño no puede cumplir (por ejemplo, «demostrar el impacto» con un estudio solo descriptivo).",
            "Revisa la jerarquía: el objetivo general responde a la pregunta principal, y los objetivos específicos son pasos que, sumados, permiten alcanzarlo. Cada objetivo específico debe contener una sola acción y ser verificable; si hay una «y» que une dos acciones distintas, conviene separarlo en dos.",
          ],
          tip: "Prueba rápida: pide al estudiante que, para cada objetivo específico, diga cómo sabrá que lo cumplió. Si no puede responder, el objetivo es demasiado vago.",
          references: [
            "Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. Longman.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l3-2",
          type: "texto",
          title: "Marco teórico y antecedentes: cómo revisarlos",
          duration: "8 min",
          paragraphs: [
            "El marco teórico y los antecedentes suelen ser el capítulo donde los TFG se convierten en una lista de citas sin hilo conductor. Su función es doble: mostrar qué se sabe ya sobre el problema (antecedentes) y presentar los conceptos y teorías que permiten interpretarlo (marco teórico). Hernández-Sampieri y Mendoza (2018) presentan la revisión de la literatura como una etapa que ayuda a conocer lo ya investigado, a afinar el planteamiento y a sustentar el estudio; por eso no es un trámite posterior, sino una actividad que acompaña al trabajo desde el inicio.",
            "Para distinguir una buena revisión: no resume las fuentes una por una, sino que las organiza por ideas o por temas (síntesis); compara posturas y señala acuerdos y vacíos; y concluye qué aporta ese conjunto de conocimientos al problema del estudiante.",
            "Sobre la calidad de las fuentes, orienta al estudiante hacia material verificable: artículos en revistas arbitradas, libros de editoriales académicas, tesis en repositorios institucionales e informes de organismos reconocidos, comprobando autor, año y editorial o DOI. Cuando la universidad no ofrece acceso a bases de datos de pago, existen opciones de acceso gratuito o abierto, como SciELO, Redalyc, Dialnet, DOAJ y Google Académico. Pídele que cite la fuente original y que reserve blogs o páginas sin autor para usos puntuales.",
            "Algunas preguntas útiles para la tutoría: ¿qué conceptos de tu pregunta necesitas definir?, ¿qué teoría o modelo orienta tu análisis?, ¿qué estudios previos se parecen al tuyo y en qué se diferencian?, ¿qué vacío deja la literatura que tu trabajo intenta atender?",
            "Sobre la citación, el formato más habitual en los TFG es el de APA 7.ª edición (American Psychological Association, 2020), aunque tu universidad puede exigir otro. Revisa desde las primeras entregas que las citas y las referencias estén bien construidas: corregirlo al final es mucho más costoso.",
          ],
          references: [
            "American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.). https://doi.org/10.1037/0000165-000",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l3-3",
          type: "video",
          title: "Video: cómo revisar objetivos y antecedentes",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre cómo revisar con el tesista la redacción de sus objetivos y sus antecedentes.",
        },
        {
          id: "l3-4",
          type: "quiz",
          title: "Cuestionario: objetivos y marco teórico",
          duration: "4 preguntas",
          questions: [
            {
              q: "Un objetivo específico bien formulado...",
              options: [
                "Usa verbos como «conocer» o «entender» sin precisar el contexto",
                "Contiene varias acciones unidas por «y» para ser más completo",
                "Empieza con un verbo en infinitivo, tiene una sola acción y se puede verificar",
                "Se redacta al final, cuando ya están los resultados",
              ],
              correct: 2,
              explanation:
                "Un objetivo útil describe una acción observable, en quiénes y en qué contexto, y permite saber si se cumplió.",
            },
            {
              q: "La taxonomía de Bloom revisada por Anderson y Krathwohl (2001) ayuda a...",
              options: [
                "Elegir verbos que correspondan al proceso cognitivo que se espera lograr",
                "Calcular el tamaño de la muestra",
                "Decidir el formato de las referencias",
                "Elegir entre enfoque cuantitativo y cualitativo",
              ],
              correct: 0,
              explanation:
                "Organiza los procesos cognitivos (recordar, comprender, aplicar, analizar, evaluar y crear) y orienta la elección del verbo del objetivo.",
            },
            {
              q: "Un apartado de antecedentes bien elaborado...",
              options: [
                "Resume cada estudio por separado, uno detrás de otro",
                "Organiza y sintetiza los estudios por ideas o temas y señala vacíos",
                "Incluye únicamente información de páginas sin autor",
                "Se escribe sin citar para ahorrar espacio",
              ],
              correct: 1,
              explanation:
                "La síntesis por temas, con comparación de posturas y vacíos, es lo que diferencia una revisión de una lista de resúmenes.",
            },
            {
              q: "¿Por qué conviene revisar las citas y referencias desde las primeras entregas?",
              options: [
                "Porque solo importan en la defensa",
                "Porque corregirlas al final es mucho más costoso",
                "Porque el tutor no puede revisarlas más tarde",
                "Porque así se evita buscar fuentes",
              ],
              correct: 1,
              explanation:
                "Las correcciones tardías suelen implicar rehacer citas, referencias y a veces argumentos enteros; el hábito se forma desde el comienzo.",
            },
          ],
        },
        {
          id: "l3-5",
          type: "checklist",
          title: "Lista de chequeo: objetivos y marco teórico",
          duration: "6 ítems",
          intro: "Usa esta lista para revisar los objetivos y el marco teórico de tu tesista.",
          items: [
            "Cada objetivo empieza con un verbo en infinitivo y contiene una sola acción.",
            "El verbo de cada objetivo corresponde al alcance del diseño (describir, relacionar, explicar).",
            "El objetivo general responde a la pregunta, y los específicos permiten alcanzarlo.",
            "Los antecedentes están organizados por ideas o temas, y no como una lista de resúmenes.",
            "Las fuentes son verificables (autor, año, editorial o DOI) y suficientemente actuales para el tema.",
            "Las citas y las referencias siguen el formato que exige la universidad (por ejemplo, APA 7).",
          ],
        },
        {
          id: "l3-6",
          type: "practica",
          title: "Actividad práctica: objetivos y antecedentes",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a revisar la redacción de objetivos, a detectar el problema de un apartado de antecedentes y a preparar tus propias preguntas de tutoría.",
          pdfHref: "/actividad-practica-modulo3.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Objetivo bien formulado?",
              instruction:
                "Lee cada objetivo y marca si está bien formulado o necesita ajuste. Luego revisa tus respuestas.",
              choiceLabels: ["Bien formulado", "Necesita ajuste"],
              items: [
                { id: "a", text: "«Conocer cómo es la situación de los estudiantes.»", correct: 1, explanation: "«Conocer» es un verbo poco observable, y el objetivo no precisa quiénes, qué aspecto ni en qué contexto." },
                { id: "b", text: "«Describir los hábitos de estudio de los estudiantes de primer año de una carrera durante el primer semestre de 2026.»", correct: 0, explanation: "Tiene un verbo observable, una población, un aspecto y un contexto." },
                { id: "c", text: "«Analizar y proponer una solución integral y demostrar su impacto en toda la universidad.»", correct: 1, explanation: "Mezcla varias acciones y promete un alcance excesivo; conviene separarlo y acotarlo." },
                { id: "d", text: "«Comparar el rendimiento promedio entre estudiantes que participan en tutorías y quienes no participan, en una asignatura determinada.»", correct: 0, explanation: "La acción es clara, el criterio de comparación es verificable y el contexto está acotado." },
              ],
            },
            {
              id: "ex2",
              kind: "source-compare",
              title: "Detecta el problema en los antecedentes",
              instruction:
                "Lee el siguiente fragmento de antecedentes y responde. (Es un ejemplo inventado para esta actividad.)",
              source: {
                label: "Fragmento de antecedentes",
                quote:
                  "Pérez (2020) estudió la motivación en estudiantes de secundaria. García (2021) estudió la motivación en estudiantes universitarios. López (2019) estudió la deserción en el primer año. Ruiz (2022) estudió el rendimiento académico.",
                meta: "Ejemplo inventado, con autores ficticios, solo para practicar.",
              },
              prompts: [
                {
                  id: "problema",
                  label: "¿Qué problema tiene este fragmento como apartado de antecedentes?",
                  sample: "Presenta las fuentes una por una, como una lista, sin organizarlas por ideas, sin compararlas y sin explicar qué aportan al problema del estudiante.",
                },
                {
                  id: "mejora",
                  label: "¿Qué le pedirías al estudiante para mejorarlo?",
                  sample: "Que agrupe los estudios por temas (por ejemplo, motivación y deserción), que compare sus resultados, que señale qué vacío queda y que explique cómo se relaciona todo con su propia pregunta.",
                },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Tus preguntas de tutoría",
              instruction: "Prepara preguntas para revisar el marco teórico de un tesista.",
              prompts: [
                {
                  id: "p1",
                  label: "Escribe dos preguntas que harías para que el estudiante justifique la teoría o el modelo que orienta su análisis.",
                  sample: "«¿Por qué elegiste este modelo y no otro que también explica el fenómeno?» y «¿Qué conceptos de tu pregunta te permite definir esta teoría?»",
                },
                {
                  id: "p2",
                  label: "Escribe una pregunta que ayude al estudiante a detectar el vacío que su trabajo intenta atender.",
                  sample: "«Después de leer estos estudios, ¿qué sigue sin responderse y cómo lo aborda tu trabajo?»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m4",
      label: "Módulo 4",
      title: "Diseño metodológico",
      lessons: [
        {
          id: "l4-1",
          type: "texto",
          title: "Enfoques, alcances y diseños",
          duration: "9 min",
          paragraphs: [
            "El diseño metodológico es la parte del TFG donde más se nota si el trabajo fue pensado como un todo. Hernández-Sampieri y Mendoza (2018) organizan la investigación en tres rutas: cuantitativa, cualitativa y mixta. Creswell y Creswell (2018), por su parte, proponen entender el diseño de investigación como la combinación de tres elementos: la visión del mundo o postura filosófica del investigador, la estrategia de indagación y los métodos concretos de recolección y análisis de datos.",
            "Como orientación práctica para la tutoría: el enfoque se elige según la pregunta, no por preferencia. Si la pregunta busca medir, comparar o relacionar variables, suele pedir un enfoque cuantitativo; si busca comprender significados, experiencias o procesos en profundidad, uno cualitativo; si necesita ambas cosas, uno mixto. Todo lo demás —alcance, diseño, técnicas— debe derivarse del enfoque. Cuando el estudiante elige una técnica (por ejemplo, una encuesta) antes de tener clara la pregunta, el diseño suele quedar forzado.",
            "En los estudios cuantitativos, Hernández-Sampieri y Mendoza (2018) distinguen cuatro alcances: exploratorio, descriptivo, correlacional y explicativo. El alcance determina qué se puede afirmar: un estudio descriptivo caracteriza, un correlacional muestra asociación y solo un diseño que lo permita puede sostener explicaciones causales. De ahí la importancia de revisar que los verbos de los objetivos no prometan más de lo que el diseño puede dar.",
            "Sobre el enfoque mixto, Johnson y Onwuegbuzie (2004) lo plantearon como un tercer paradigma que combina elementos cuantitativos y cualitativos, aprovechando las fortalezas de cada uno y compensando sus debilidades. Creswell y Creswell (2018) describen diseños mixtos básicos: convergente, secuencial explicativo y secuencial exploratorio. En un TFG conviene preguntar si el estudiante realmente puede ejecutar ambos componentes con rigor en el tiempo disponible: combinar métodos por moda puede producir trabajos superficiales.",
          ],
          references: [
            "Creswell, J. W., & Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches (5th ed.). SAGE Publications.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
            "Johnson, R. B., & Onwuegbuzie, A. J. (2004). Mixed methods research: A research paradigm whose time has come. Educational Researcher, 33(7), 14–26. https://doi.org/10.3102/0013189X033007014",
          ],
        },
        {
          id: "l4-2",
          type: "texto",
          title: "Población, muestra, instrumentos y rigor",
          duration: "9 min",
          paragraphs: [
            "Definir a quién se estudia y con qué instrumentos suele ser el punto donde los trabajos pierden coherencia. Pide al estudiante que distinga población (el conjunto de casos al que quiere referirse) de muestra (el subconjunto con el que realmente trabajará), y que justifique el tamaño y el procedimiento de selección en lugar de elegir una cifra por costumbre.",
            "Hernández-Sampieri y Mendoza (2018) distinguen las muestras probabilísticas —en las que los elementos tienen una probabilidad conocida de ser elegidos y es posible generalizar estadísticamente— de las no probabilísticas, en las que la elección depende de criterios del investigador y no permite esa generalización. Una inconsistencia frecuente en los TFG es trabajar con una muestra por conveniencia y, luego, generalizar los resultados a toda una población.",
            "En los estudios cualitativos la lógica del muestreo es otra: se busca profundidad y riqueza de información, no representatividad estadística. El estudiante debe poder explicar por qué eligió a esos participantes o casos y cómo decidirá que ya dispone de información suficiente.",
            "Todo instrumento debe derivarse de los objetivos y de las variables o categorías del estudio. En los enfoques cuantitativos, el estudiante debe poder explicar la validez del instrumento (¿mide lo que dice medir?) y su confiabilidad (¿da resultados consistentes?), ya sea porque usa uno ya validado o porque lo construyó y lo sometió a revisión de expertos y prueba piloto. En los enfoques cualitativos, el rigor se discute con criterios propios, como la credibilidad y la transferencia, y no con los términos de la estadística (Hernández-Sampieri & Mendoza, 2018).",
            "Una pregunta final que sintetiza el módulo: «¿cómo sé que mis datos sirven para responder mi pregunta?». Si el estudiante no puede explicarlo en pocas palabras, conviene volver a revisar la coherencia entre pregunta, objetivo, muestra e instrumento.",
          ],
          references: [
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l4-3",
          type: "video",
          title: "Video: revisar la coherencia del diseño",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre cómo revisar con el tesista la coherencia entre pregunta, enfoque, muestra e instrumento.",
        },
        {
          id: "l4-4",
          type: "quiz",
          title: "Cuestionario: diseño metodológico",
          duration: "4 preguntas",
          questions: [
            {
              q: "Según Hernández-Sampieri y Mendoza (2018), las tres rutas de la investigación son...",
              options: [
                "Teórica, práctica y aplicada",
                "Exploratoria, descriptiva y explicativa",
                "Documental, de campo y de laboratorio",
                "Cuantitativa, cualitativa y mixta",
              ],
              correct: 3,
              explanation:
                "Los autores organizan la metodología en torno a las rutas cuantitativa, cualitativa y mixta.",
            },
            {
              q: "El enfoque metodológico debería elegirse principalmente según...",
              options: [
                "La pregunta de investigación",
                "La técnica que el estudiante ya domina",
                "La longitud del documento",
                "La preferencia del tutor",
              ],
              correct: 0,
              explanation:
                "Es la pregunta la que orienta el enfoque; el alcance, el diseño y las técnicas se derivan de él.",
            },
            {
              q: "Una muestra por conveniencia permite...",
              options: [
                "Generalizar estadísticamente a toda la población",
                "Calcular automáticamente el margen de error",
                "Describir a esos participantes, pero no generalizar estadísticamente a la población",
                "Evitar justificar la selección",
              ],
              correct: 2,
              explanation:
                "Las muestras no probabilísticas no permiten generalización estadística; las conclusiones deben acotarse a los participantes del estudio.",
            },
            {
              q: "La validez de un instrumento cuantitativo se refiere a...",
              options: [
                "Si da resultados consistentes en distintas aplicaciones",
                "Si mide lo que dice medir",
                "Si es corto y fácil de aplicar",
                "Si fue traducido a varios idiomas",
              ],
              correct: 1,
              explanation:
                "La validez se pregunta si el instrumento mide lo que pretende medir; la consistencia de los resultados corresponde a la confiabilidad.",
            },
          ],
        },
        {
          id: "l4-5",
          type: "checklist",
          title: "Lista de chequeo: diseño metodológico",
          duration: "6 ítems",
          intro: "Usa esta lista para revisar el diseño metodológico de tu tesista.",
          items: [
            "El enfoque (cuantitativo, cualitativo o mixto) responde a la pregunta de investigación.",
            "El alcance del estudio es coherente con los verbos de los objetivos.",
            "La población y la muestra están definidas, y el procedimiento de selección está justificado.",
            "Las conclusiones no se generalizan más allá de lo que permite la muestra.",
            "Los instrumentos se derivan de los objetivos y el estudiante puede explicar su validez y confiabilidad (o su rigor cualitativo).",
            "Un enfoque mixto, si lo hay, es realizable con rigor en el tiempo disponible.",
          ],
        },
        {
          id: "l4-6",
          type: "practica",
          title: "Actividad práctica: coherencia del diseño",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a reconocer qué enfoque sugiere una pregunta, a revisar la coherencia entre muestra y conclusiones, y a construir la cadena de coherencia de un trabajo real.",
          pdfHref: "/actividad-practica-modulo4.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Qué enfoque sugiere la pregunta?",
              instruction:
                "Lee cada pregunta y marca el enfoque que parece más adecuado. Luego revisa tus respuestas.",
              choiceLabels: ["Cuantitativo", "Cualitativo", "Mixto"],
              items: [
                { id: "a", text: "«¿Cuál es la relación entre las horas de sueño y el promedio académico en estudiantes de segundo año?»", correct: 0, explanation: "Relaciona dos variables medibles: es una pregunta típica de un enfoque cuantitativo." },
                { id: "b", text: "«¿Cómo viven los estudiantes de primera generación su ingreso a la universidad?»", correct: 1, explanation: "Busca comprender experiencias y significados en profundidad: sugiere un enfoque cualitativo." },
                { id: "c", text: "«¿Qué nivel de satisfacción tienen los usuarios del servicio, medido en una escala, y cómo explican con sus propias palabras las razones de su valoración?»", correct: 2, explanation: "Combina medición (escala) con comprensión de razones (testimonios): pide componentes de ambos enfoques." },
                { id: "d", text: "«¿Cuántos estudiantes de la carrera trabajan y cuál es el promedio de horas semanales que dedican al trabajo?»", correct: 0, explanation: "Busca cuantificar y describir con números: enfoque cuantitativo descriptivo." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "¿Muestra y conclusión coherentes?",
              instruction:
                "Lee cada situación y marca si la conclusión es coherente con la muestra o es inconsistente.",
              choiceLabels: ["Coherente", "Inconsistente"],
              items: [
                { id: "a", text: "Muestra por conveniencia de 30 estudiantes de un solo curso; el estudiante concluye que «todos los universitarios del país» presentan el fenómeno.", correct: 1, explanation: "Una muestra por conveniencia no permite generalizar a toda una población nacional." },
                { id: "b", text: "Muestra aleatoria simple tomada de una lista completa de estudiantes matriculados; el estudiante generaliza, con su margen de error, a esa misma población.", correct: 0, explanation: "El muestreo probabilístico sobre un marco completo sí permite generalizar a esa población." },
                { id: "c", text: "Estudio cualitativo con 8 participantes elegidos por criterios explícitos; el estudiante afirma que sus resultados son estadísticamente representativos de toda la ciudad.", correct: 1, explanation: "Un estudio cualitativo no busca representatividad estadística; esa afirmación no se sostiene." },
                { id: "d", text: "Estudio cualitativo con participantes elegidos por criterios explícitos; el estudiante describe los hallazgos y discute hasta qué punto podrían transferirse a contextos similares.", correct: 0, explanation: "Discute la transferencia con prudencia y sin pretender generalización estadística." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Tu cadena de coherencia",
              instruction:
                "Toma el trabajo de un tesista (o uno hipotético) y completa su cadena de coherencia.",
              prompts: [
                {
                  id: "pregunta",
                  label: "Escribe la pregunta de investigación:",
                  sample: "«¿Qué factores se asocian al abandono del primer año entre estudiantes de Ingeniería de Sistemas de una universidad privada?»",
                },
                {
                  id: "enfoque",
                  label: "Indica el enfoque y justifícalo en una oración:",
                  sample: "«Cuantitativo, porque la pregunta busca identificar la asociación entre varios factores medibles y el abandono.»",
                },
                {
                  id: "muestra",
                  label: "Describe la muestra y cómo se selecciona:",
                  sample: "«Muestra aleatoria de estudiantes matriculados en el primer año en las gestiones definidas, seleccionada a partir de la lista oficial de la carrera.»",
                },
                {
                  id: "instrumento",
                  label: "Indica el instrumento y cómo se asegurará su validez y confiabilidad:",
                  sample: "«Cuestionario adaptado de un instrumento previo, con revisión de expertos y prueba piloto; se calculará un coeficiente de confiabilidad con los datos piloto.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m5",
      label: "Módulo 5",
      title: "Retroalimentación efectiva y seguimiento",
      lessons: [
        {
          id: "l5-1",
          type: "texto",
          title: "Qué hace útil a una retroalimentación",
          duration: "9 min",
          paragraphs: [
            "La retroalimentación es la herramienta más importante del tutor: es lo que el estudiante se lleva de cada reunión y de cada borrador revisado. Hattie y Timperley (2007), en una revisión clásica sobre el tema, plantean que una retroalimentación eficaz responde tres preguntas: ¿a dónde voy? (cuáles son las metas), ¿cómo voy? (qué avance hay respecto de esas metas) y ¿qué sigue? (qué acciones permitirán mejorar).",
            "Los mismos autores distinguen cuatro niveles a los que puede dirigirse un comentario: la tarea (qué está bien o mal en el producto), el proceso (cómo se hizo y qué estrategias se usaron), la autorregulación (cómo el estudiante monitorea y gestiona su propio trabajo) y la persona (elogios o críticas generales como «muy bien» o «eres descuidado»). Según su revisión, los comentarios centrados en la persona aportan poco al aprendizaje, mientras que los centrados en el proceso y la autorregulación suelen ser más potentes que los centrados solo en la tarea.",
            "Nicol y Macfarlane-Dick (2006) proponen siete principios de buena práctica de retroalimentación que sirven como lista de revisión: (1) aclarar qué es un buen desempeño; (2) facilitar la reflexión y la autoevaluación; (3) entregar información de calidad sobre el aprendizaje; (4) fomentar el diálogo con el docente y entre pares; (5) promover creencias motivacionales positivas y la autoestima; (6) dar oportunidades de cerrar la brecha entre el desempeño actual y el deseado; y (7) usar la información para ajustar la propia enseñanza.",
            "Una forma de aplicarlo al TFG: prioriza lo global antes que lo local (la coherencia entre problema, objetivos y método antes que la ortografía); describe lo que ves con evidencia del texto, explica por qué importa y sugiere un siguiente paso o formula una pregunta; y limita la cantidad, porque unos pocos comentarios claros ayudan más que un documento lleno de marcas.",
          ],
          references: [
            "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81–112. https://doi.org/10.3102/003465430298487",
            "Nicol, D. J., & Macfarlane-Dick, D. (2006). Formative assessment and self-regulated learning: A model and seven principles of good feedback practice. Studies in Higher Education, 31(2), 199–218. https://doi.org/10.1080/03075070600572090",
          ],
        },
        {
          id: "l5-2",
          type: "texto",
          title: "Seguimiento y alfabetización en retroalimentación",
          duration: "8 min",
          paragraphs: [
            "Dar buenos comentarios no basta si el estudiante no los usa. Carless y Boud (2018) hablan de alfabetización en retroalimentación para referirse a las capacidades del estudiante para sacar provecho de ella, y destacan cuatro rasgos: valorar la retroalimentación, hacer juicios sobre la calidad de su propio trabajo y el de otros, gestionar las emociones que la retroalimentación provoca y actuar a partir de ella.",
            "Esto tiene consecuencias prácticas para la tutoría: no basta con devolver el borrador comentado; conviene pedir al estudiante que resuma qué entendió, qué cambios hará y para cuándo. Así el tutor comprueba que el mensaje llegó, y el estudiante pasa de recibir correcciones a decidir qué hacer con ellas.",
            "Para dar seguimiento, define hitos (por ejemplo: problema aprobado, marco teórico, diseño metodológico, instrumentos listos, resultados, discusión, borrador final) y asigna fechas. Registra en cada reunión los acuerdos y la próxima entrega. Un cronograma con hitos permite detectar a tiempo si el trabajo se retrasa.",
            "Algunas situaciones frecuentes merecen una conversación explícita: entregas que no llegan, estudiantes que esperan que el tutor decida todo, cambios de tema avanzado el proceso y borradores que no integran los comentarios anteriores. Como sugerencia, vuelve al acuerdo inicial, describe lo observado sin juzgar a la persona y pacten un plan con fechas.",
          ],
          tip: "Sugerencia: al cierre de cada tutoría, pide al estudiante que escriba en dos o tres líneas qué va a hacer antes de la próxima reunión.",
          references: [
            "Carless, D., & Boud, D. (2018). The development of student feedback literacy: Enabling uptake of feedback. Assessment & Evaluation in Higher Education, 43(8), 1315–1325. https://doi.org/10.1080/02602938.2018.1463354",
          ],
        },
        {
          id: "l5-3",
          type: "video",
          title: "Video: cómo dar retroalimentación sobre un borrador",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre un ejemplo de retroalimentación sobre un borrador de TFG.",
        },
        {
          id: "l5-4",
          type: "quiz",
          title: "Cuestionario: retroalimentación y seguimiento",
          duration: "4 preguntas",
          questions: [
            {
              q: "Según Hattie y Timperley (2007), una retroalimentación eficaz responde a las preguntas...",
              options: [
                "¿Quién lo hizo? ¿Cuánto tardó? ¿Qué nota merece?",
                "¿A dónde voy? ¿Cómo voy? ¿Qué sigue?",
                "¿Qué dice la teoría? ¿Qué dice el tutor? ¿Qué dice el tribunal?",
                "¿Cuántas páginas? ¿Cuántas citas? ¿Cuántas tablas?",
              ],
              correct: 1,
              explanation:
                "Las tres preguntas ordenan el comentario en torno a las metas, el avance y las acciones siguientes.",
            },
            {
              q: "De los niveles de retroalimentación, ¿cuál suele aportar menos al aprendizaje?",
              options: [
                "El de la tarea",
                "El del proceso",
                "El de la autorregulación",
                "El de la persona (elogios o críticas generales)",
              ],
              correct: 3,
              explanation:
                "Los comentarios generales sobre la persona («muy bien», «eres descuidado») aportan poca información para mejorar el trabajo.",
            },
            {
              q: "Según Carless y Boud (2018), la alfabetización en retroalimentación del estudiante implica...",
              options: [
                "Recibir comentarios sin cuestionarlos",
                "Memorizar los comentarios del tutor",
                "Valorarla, juzgar la calidad del trabajo, gestionar las emociones y actuar a partir de ella",
                "Pedir más comentarios que los necesarios",
              ],
              correct: 2,
              explanation:
                "Son cuatro rasgos: valorar la retroalimentación, hacer juicios, gestionar las emociones y tomar acción.",
            },
            {
              q: "Al revisar un borrador, ¿qué conviene priorizar primero?",
              options: [
                "La ortografía de cada oración",
                "La coherencia global entre problema, objetivos y método",
                "El tipo de letra y los márgenes",
                "El número de citas por página",
              ],
              correct: 1,
              explanation:
                "Los problemas globales cambian la estructura del trabajo y es más eficiente resolverlos antes de corregir detalles de forma.",
            },
          ],
        },
        {
          id: "l5-5",
          type: "checklist",
          title: "Lista de chequeo: retroalimentación y seguimiento",
          duration: "6 ítems",
          intro: "Usa esta lista para revisar tu práctica de retroalimentación.",
          items: [
            "Mis comentarios indican a dónde debe llegar el trabajo, cómo va y qué hacer a continuación.",
            "Priorizo los problemas globales antes que los detalles de forma.",
            "Evito comentarios generales sobre la persona y describo lo observado con evidencia del texto.",
            "Limito la cantidad de comentarios para que el estudiante pueda actuar sobre ellos.",
            "Pido al estudiante que resuma qué cambios hará y para cuándo.",
            "Tengo un cronograma con hitos y registro los acuerdos de cada reunión.",
          ],
        },
        {
          id: "l5-6",
          type: "practica",
          title: "Actividad práctica: da retroalimentación",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a identificar el nivel de un comentario, a mejorar una retroalimentación poco útil y a planificar el seguimiento de un tesista.",
          pdfHref: "/actividad-practica-modulo5.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿A qué nivel apunta el comentario?",
              instruction:
                "Lee cada comentario de un tutor y marca el nivel al que apunta: tarea, proceso, autorregulación o persona.",
              choiceLabels: ["Tarea", "Proceso", "Autorregulación", "Persona"],
              items: [
                { id: "a", text: "«Muy bien, eres un estudiante muy aplicado.»", correct: 3, explanation: "Es un elogio general sobre la persona; no dice qué hacer para mejorar el trabajo." },
                { id: "b", text: "«El objetivo específico 2 no responde a la pregunta de investigación.»", correct: 0, explanation: "Señala un aspecto concreto del producto: está dirigido a la tarea." },
                { id: "c", text: "«¿Cómo vas a comprobar tú mismo, antes de enviarme el borrador, que cada objetivo tiene su instrumento?»", correct: 2, explanation: "Invita al estudiante a monitorear su propio trabajo: apunta a la autorregulación." },
                { id: "d", text: "«Para ordenar los antecedentes, prueba agruparlos por tema en lugar de por autor.»", correct: 1, explanation: "Propone una estrategia sobre cómo hacer el trabajo: apunta al proceso." },
              ],
            },
            {
              id: "ex2",
              kind: "source-compare",
              title: "Mejora este comentario",
              instruction:
                "Lee el comentario y reescríbelo de modo que sea útil para el estudiante. (Es un ejemplo inventado para esta actividad.)",
              source: {
                label: "Comentario de un tutor en un borrador",
                quote: "«Mal planteado. Rehacer todo.»",
                meta: "Ejemplo inventado, solo para practicar.",
              },
              prompts: [
                {
                  id: "reescritura",
                  label: "Reescribe el comentario: describe lo observado con evidencia, explica por qué importa y sugiere un siguiente paso.",
                  sample: "«En la página 3, la pregunta y el objetivo general hablan de aspectos distintos (la pregunta se refiere a las causas del abandono, pero el objetivo, a describir su frecuencia). Conviene alinearlos para que el diseño sea coherente. Te propongo decidir cuál de las dos cosas quieres investigar y reformular el otro elemento; lo revisamos en la próxima reunión.»",
                },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Tu plan de seguimiento",
              instruction: "Planifica el seguimiento de un tesista real o hipotético.",
              prompts: [
                {
                  id: "hitos",
                  label: "Enumera los hitos que usarías en el cronograma, con una fecha aproximada para cada uno.",
                  sample: "Problema aprobado (semana 3), marco teórico (semana 7), diseño metodológico e instrumentos (semana 10), resultados (semana 14), discusión y conclusiones (semana 16), borrador final (semana 18).",
                },
                {
                  id: "uso",
                  label: "¿Cómo le pedirás al estudiante que demuestre que usó tu retroalimentación?",
                  sample: "«Al enviar cada nueva versión, adjuntará una nota breve con los comentarios que atendió, los cambios que hizo y cuáles decidió no aplicar, con su razón.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m6",
      label: "Módulo 6",
      title: "Ética, integridad y evaluación de la defensa",
      lessons: [
        {
          id: "l6-1",
          type: "texto",
          title: "Integridad académica y ética en el TFG",
          duration: "9 min",
          paragraphs: [
            "La Declaración de Singapur sobre la Integridad en la Investigación (2010), elaborada en la 2.ª Conferencia Mundial sobre Integridad en la Investigación, establece cuatro principios: honestidad en todos los aspectos de la investigación, responsabilidad en su ejecución, cortesía profesional e imparcialidad en las relaciones laborales, y buena gestión de la investigación en nombre de otros. El propio documento aclara que no es un texto regulador ni representa las políticas oficiales de los países u organizaciones participantes: es un marco de referencia para pensar las prácticas.",
            "Entre las responsabilidades que enumera, varias son directamente aplicables a un TFG: usar métodos adecuados y fundamentar las conclusiones en un análisis crítico de la evidencia; llevar una documentación clara que permita a otros verificar el trabajo; reconocer las contribuciones ajenas y atribuir correctamente la autoría; y revelar posibles conflictos de intereses. También menciona la fabricación, la falsificación y el plagio como conductas indebidas.",
            "En la tutoría esto puede traducirse así: (a) hablar de integridad desde la primera reunión, no solo cuando aparece un problema; (b) pedir borradores parciales y fuentes, de modo que el proceso sea visible y la evolución del texto verificable; (c) revisar que las ideas ajenas estén citadas y referenciadas; (d) comprobar que el estudiante pueda explicar con sus propias palabras lo que escribió; y (e) cuando hay participantes humanos, verificar que existan consentimiento informado, confidencialidad de los datos y, si tu universidad lo exige, aprobación de un comité de ética.",
            "Respecto de las herramientas de inteligencia artificial, tu universidad puede tener (o estar elaborando) políticas sobre su uso en trabajos académicos. Conviene acordar con el estudiante, por escrito y de acuerdo con esa política, para qué tareas puede usarlas, cómo debe declararlas y quién es responsable de verificar lo que producen. Este curso no sustituye la normativa institucional.",
            "Si sospechas de una conducta indebida, no la resuelvas solo: describe lo observado con evidencia, conversa con el estudiante y deriva el caso por los canales que establece tu reglamento.",
          ],
          references: [
            "Declaración de Singapur sobre la integridad en la investigación. (2010). 2.ª Conferencia Mundial sobre Integridad en la Investigación, Singapur, 21–24 de julio de 2010. https://www.conicyt.cl/fondecyt/files/2016/06/Declaracion_Singapur1.pdf",
          ],
        },
        {
          id: "l6-2",
          type: "texto",
          title: "Evaluar el trabajo y preparar la defensa",
          duration: "9 min",
          paragraphs: [
            "La evaluación del TFG es más justa y más formativa cuando los criterios se conocen de antemano. Las rúbricas son el instrumento más usado para ello. Panadero y Jonsson (2013) revisan la evidencia sobre el uso de rúbricas en la evaluación formativa y señalan que pueden aportar transparencia a los criterios y apoyar la autorregulación del estudiante, aunque su efecto depende de cómo se utilicen.",
            "Reddy y Andrade (2010) revisaron el uso de rúbricas en la educación superior y concluyen que muestran potencial para enseñar y evaluar, aunque la evidencia es todavía preliminar; piden prestar más atención a la claridad del lenguaje de los criterios y a la validez y la confiabilidad de lo que miden. Una rúbrica no sustituye el criterio del evaluador: lo hace explícito y comparable.",
            "Una rúbrica analítica para un TFG puede organizarse en criterios (filas) y niveles de desempeño (columnas), con una descripción observable en cada celda. Algunos criterios habituales: planteamiento del problema y coherencia, calidad del marco teórico, pertinencia del diseño metodológico, análisis y discusión de resultados, redacción y formato (por ejemplo, APA 7), uso íntegro de las fuentes y defensa. Los pesos y el formato exacto los define tu reglamento; si ya existe una rúbrica institucional, úsala y compártela con el estudiante desde el principio.",
            "Para preparar la defensa: ensayar la presentación con tiempo; ayudar al estudiante a anticipar preguntas del tribunal (sobre la justificación, las decisiones metodológicas, las limitaciones y los aportes); y recordarle que la defensa es una conversación sobre su propio trabajo, no una lectura del documento. Verifica en tu reglamento cuál es el rol del tutor durante la defensa y en la calificación, porque varía entre instituciones.",
            "Al cerrar el proceso, una breve conversación con el estudiante (qué aprendió, qué haría distinto) y una reflexión tuya sobre qué ajustarías en la próxima tutoría mejoran el siguiente ciclo.",
          ],
          references: [
            "Panadero, E., & Jonsson, A. (2013). The use of scoring rubrics for formative assessment purposes revisited: A review. Educational Research Review, 9, 129–144. https://doi.org/10.1016/j.edurev.2013.01.002",
            "Reddy, Y. M., & Andrade, H. (2010). A review of rubric use in higher education. Assessment & Evaluation in Higher Education, 35(4), 435–448. https://doi.org/10.1080/02602930902862859",
          ],
        },
        {
          id: "l6-3",
          type: "video",
          title: "Video: integridad y preparación de la defensa",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video de cierre sobre integridad académica y preparación de la defensa.",
        },
        {
          id: "l6-4",
          type: "quiz",
          title: "Cuestionario: ética, integridad y evaluación",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Cuál de estos es uno de los cuatro principios de la Declaración de Singapur (2010)?",
              options: [
                "Rapidez en la publicación de resultados",
                "Prioridad del tutor en la autoría",
                "Honestidad en todos los aspectos de la investigación",
                "Confidencialidad absoluta de todos los resultados",
              ],
              correct: 2,
              explanation:
                "Los principios son honestidad, responsabilidad, cortesía profesional e imparcialidad, y buena gestión de la investigación en nombre de otros.",
            },
            {
              q: "Ante la sospecha de una conducta indebida (por ejemplo, un plagio extenso), ¿qué conviene hacer?",
              options: [
                "Ignorarla para no afectar la relación con el estudiante",
                "Corregirla en silencio y no dejar registro",
                "Describir lo observado con evidencia, conversar con el estudiante y derivar el caso por los canales del reglamento",
                "Reescribir el texto por el estudiante",
              ],
              correct: 2,
              explanation:
                "No se resuelve de forma aislada: se documenta, se conversa y se sigue el procedimiento institucional.",
            },
            {
              q: "Una rúbrica analítica para un TFG se compone de...",
              options: [
                "Una sola nota global sin criterios",
                "Criterios con niveles de desempeño descritos de forma observable",
                "Una lista de preguntas para el tribunal",
                "El resumen del trabajo",
              ],
              correct: 1,
              explanation:
                "Una rúbrica analítica combina criterios y niveles de desempeño con descriptores observables.",
            },
            {
              q: "Respecto del rol del tutor durante la defensa y en la calificación...",
              options: [
                "Siempre es el mismo en todas las universidades",
                "Nunca participa",
                "Depende del reglamento institucional; conviene consultarlo antes",
                "Lo decide el estudiante",
              ],
              correct: 2,
              explanation:
                "Varía entre instituciones; el reglamento establece qué puede hacer el tutor en la defensa y en la evaluación.",
            },
          ],
        },
        {
          id: "l6-5",
          type: "checklist",
          title: "Lista de chequeo: ética, integridad y evaluación",
          duration: "6 ítems",
          intro: "Usa esta lista para revisar tu práctica en integridad y evaluación.",
          items: [
            "Converso sobre integridad académica con mis tesistas desde la primera reunión.",
            "Pido borradores parciales y fuentes para que el proceso sea visible.",
            "Verifico consentimiento informado, confidencialidad y, si corresponde, aprobación ética cuando hay participantes.",
            "Conozco la política de mi universidad sobre el uso de herramientas de IA y la he acordado con mi tesista.",
            "Uso una rúbrica con criterios observables y la comparto con el estudiante desde el inicio.",
            "Conozco el rol que me asigna el reglamento en la defensa y en la calificación.",
          ],
        },
        {
          id: "l6-6",
          type: "practica",
          title: "Actividad práctica: integridad y evaluación",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a decidir cómo actuar ante situaciones de integridad, a distinguir criterios de rúbrica observables de otros vagos y a preparar una defensa.",
          pdfHref: "/actividad-practica-modulo6.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Qué haces ante cada situación?",
              instruction:
                "Lee cada situación y marca la respuesta más adecuada. Luego revisa tus respuestas y la explicación.",
              choiceLabels: ["Orientación en la tutoría", "Registrar y derivar según el reglamento"],
              items: [
                { id: "a", text: "En un primer borrador, el estudiante cita a un autor pero copia casi todo el párrafo sin comillas.", correct: 0, explanation: "En un borrador es una oportunidad formativa: explica la diferencia entre parafrasear y copiar y pide la corrección. Si se repite o hay intención de ocultar, corresponde aplicar el reglamento." },
                { id: "b", text: "Las tablas de resultados no coinciden con los datos que el estudiante te mostró y no puede explicar de dónde salieron.", correct: 1, explanation: "Puede tratarse de una falsificación de datos. Pide evidencia; si no la hay, corresponde registrar y derivar según el reglamento." },
                { id: "c", text: "El estudiante planea aplicar encuestas a menores de edad sin pedir autorización a sus responsables.", correct: 0, explanation: "Aún no ocurrió la falta: es el momento de orientar sobre consentimiento informado y de verificar si se requiere aprobación ética." },
                { id: "d", text: "Descubres que un capítulo completo coincide con una tesis de otra universidad.", correct: 1, explanation: "Una coincidencia extensa exige registrar la evidencia y seguir el procedimiento institucional, sin resolverlo de forma aislada." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "Criterios de rúbrica: ¿observable o vago?",
              instruction:
                "Lee cada criterio y marca si es observable (se puede verificar en el trabajo) o vago.",
              choiceLabels: ["Observable", "Vago"],
              items: [
                { id: "a", text: "«El estudiante es esforzado.»", correct: 1, explanation: "Describe a la persona, no el producto; no se puede verificar en el trabajo." },
                { id: "b", text: "«Los objetivos específicos son coherentes con el objetivo general y con la pregunta de investigación.»", correct: 0, explanation: "Se puede verificar comparando el texto de cada elemento." },
                { id: "c", text: "«El trabajo es bueno.»", correct: 1, explanation: "No dice qué se evalúa ni cómo se reconoce un buen desempeño." },
                { id: "d", text: "«Las citas y referencias siguen el formato exigido, sin omisiones de fuentes citadas.»", correct: 0, explanation: "Se verifica revisando que cada cita tenga su referencia y siga el formato." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Prepara una defensa",
              instruction: "Planifica la preparación de la defensa de un tesista real o hipotético.",
              prompts: [
                {
                  id: "preguntas",
                  label: "Escribe tres preguntas que el tribunal podría hacer sobre las decisiones metodológicas.",
                  sample: "«¿Por qué eligió ese enfoque y no otro?», «¿Cómo justifica el tamaño y el tipo de muestra?» y «¿Qué limitaciones tiene su instrumento y cómo las controló?»",
                },
                {
                  id: "ensayo",
                  label: "Describe cómo organizarías un ensayo de la defensa con el estudiante.",
                  sample: "«Un ensayo con tiempo cronometrado, seguido de preguntas de práctica y una conversación de retroalimentación sobre claridad, dominio del tema y manejo del tiempo.»",
                },
                {
                  id: "criterio",
                  label: "Redacta un criterio de rúbrica observable con su descriptor de nivel alto.",
                  sample: "Criterio: «Coherencia del diseño». Nivel alto: «El enfoque, la muestra y los instrumentos se derivan de la pregunta y los objetivos, y el estudiante justifica cada decisión con fuentes.»",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const FLAT_LESSONS = COURSE.modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title }))
);
const TOTAL_LESSONS = FLAT_LESSONS.length;
const STORAGE_KEY = "tutores-tfg-progress-v1";

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

function youTubeEmbedUrl(raw) {
  if (!raw) return null;
  try {
    const url = new URL(raw.trim());
    let id = null;
    if (url.hostname.includes("youtu.be")) {
      id = url.pathname.replace("/", "");
    } else if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (url.pathname.startsWith("/embed/")) id = url.pathname.split("/embed/")[1];
    }
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

const TYPE_META = {
  texto: { label: "TEXTO", Icon: FileText },
  video: { label: "VIDEO", Icon: PlayCircle },
  quiz: { label: "CUESTIONARIO", Icon: HelpCircle },
  checklist: { label: "LISTA DE CHEQUEO", Icon: ListChecks },
  practica: { label: "ACTIVIDAD PRÁCTICA", Icon: PenSquare },
};

/* ------------------------------------------------------------------ */
/* APP                                                                  */
/* ------------------------------------------------------------------ */

export default function App({ onLock } = {}) {
  const [activeId, setActiveId] = useState(FLAT_LESSONS[0].id);
  const [completed, setCompleted] = useState(new Set());
  const [videoLinks, setVideoLinks] = useState({});
  const [checklistState, setChecklistState] = useState({});
  const [practiceAnswers, setPracticeAnswers] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("idle"); // idle | saving | saved
  const [confirmReset, setConfirmReset] = useState(false);

  // Cargar progreso guardado
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setCompleted(new Set(parsed.completed || []));
        setVideoLinks(parsed.videoLinks || {});
        setChecklistState(parsed.checklistState || {});
        setPracticeAnswers(parsed.practiceAnswers || {});
        if (parsed.activeId && FLAT_LESSONS.some((l) => l.id === parsed.activeId)) {
          setActiveId(parsed.activeId);
        }
      }
    } catch {
      // no hay progreso guardado todavía
    } finally {
      setLoaded(true);
    }
  }, []);

  // Guardar progreso (de inmediato — localStorage es rápido, no hace falta esperar)
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completed: Array.from(completed),
          videoLinks,
          checklistState,
          practiceAnswers,
          activeId,
        })
      );
      setSaveState("saved");
    } catch {
      setSaveState("idle");
    }
  }, [completed, videoLinks, checklistState, practiceAnswers, activeId, loaded]);

  const markComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const resetProgress = () => {
    setCompleted(new Set());
    setVideoLinks({});
    setChecklistState({});
    setPracticeAnswers({});
    setActiveId(FLAT_LESSONS[0].id);
    setConfirmReset(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignorar si no existía
    }
  };

  const activeIndex = FLAT_LESSONS.findIndex((l) => l.id === activeId);
  const active = FLAT_LESSONS[activeIndex];
  const nextLesson = FLAT_LESSONS[activeIndex + 1];
  const progressPct = Math.round((completed.size / TOTAL_LESSONS) * 100);

  const goTo = (id) => setActiveId(id);
  const goNext = () => {
    if (nextLesson) setActiveId(nextLesson.id);
  };

  if (!loaded) {
    return (
      <div className="fa-root fa-loading">
        <div className="fa-spinner" />
        <p>Cargando tu progreso…</p>
        <Fonts />
      </div>
    );
  }

  return (
    <div className="fa-root">
      <Fonts />

      {/* -------- Encabezado -------- */}
      <header className="fa-header">
        <div className="fa-header-left">
          <BookOpen size={20} strokeWidth={2} />
          <div>
            <div className="fa-title">{COURSE.title}</div>
            <div className="fa-subtitle">{COURSE.subtitle}</div>
          </div>
        </div>
        <div className="fa-header-right">
          <div className="fa-progress-wrap">
            <div className="fa-progress-track">
              <div className="fa-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="fa-progress-label">
              {completed.size}/{TOTAL_LESSONS} lecciones · {progressPct}%
            </span>
          </div>
        </div>
      </header>

      <div className="fa-body">
        {/* -------- Sidebar -------- */}
        <nav className="fa-sidebar" aria-label="Contenido del curso">
          {COURSE.modules.map((mod) => (
            <div key={mod.id} className="fa-module">
              <div className="fa-module-heading">
                <span className="fa-module-label">{mod.label}</span>
                <span className="fa-module-title">{mod.title}</span>
              </div>
              <ol className="fa-lesson-list">
                {mod.lessons.map((lesson) => {
                  const meta = TYPE_META[lesson.type];
                  const isActive = lesson.id === activeId;
                  const isDone = completed.has(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <button
                        className={`fa-lesson-item${isActive ? " is-active" : ""}${
                          isDone ? " is-done" : ""
                        }`}
                        onClick={() => goTo(lesson.id)}
                      >
                        <span className="fa-lesson-check">
                          {isDone ? (
                            <CheckCircle2 size={17} strokeWidth={2} />
                          ) : (
                            <Circle size={17} strokeWidth={1.6} />
                          )}
                        </span>
                        <span className="fa-lesson-text">
                          <span className="fa-lesson-title">{lesson.title}</span>
                          <span className="fa-lesson-meta">
                            <meta.Icon size={12} strokeWidth={2} />
                            {meta.label} · {lesson.duration}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}

          <div className="fa-sidebar-footer">
            <span className="fa-save-indicator">
              {saveState === "saving" ? "Guardando…" : "Progreso guardado en este sitio"}
            </span>
            {confirmReset ? (
              <div className="fa-reset-confirm">
                <span>¿Reiniciar todo el progreso?</span>
                <div>
                  <button className="fa-btn-ghost-sm" onClick={() => setConfirmReset(false)}>
                    Cancelar
                  </button>
                  <button className="fa-btn-danger-sm" onClick={resetProgress}>
                    Sí, reiniciar
                  </button>
                </div>
              </div>
            ) : (
              <button className="fa-reset-btn" onClick={() => setConfirmReset(true)}>
                <RotateCcw size={13} strokeWidth={2} />
                Reiniciar progreso
              </button>
            )}
            {onLock && (
              <button className="fa-reset-btn" onClick={onLock} style={{ marginTop: "2px" }}>
                <Lock size={13} strokeWidth={2} />
                Bloquear acceso de nuevo
              </button>
            )}
          </div>
        </nav>

        {/* -------- Contenido principal -------- */}
        <main className="fa-main">
          {active && (
            <LessonCard
              key={active.id}
              lesson={active}
              index={activeIndex}
              moduleTitle={active.moduleTitle}
              isDone={completed.has(active.id)}
              videoLink={videoLinks[active.id] || ""}
              onSetVideoLink={(url) =>
                setVideoLinks((prev) => ({ ...prev, [active.id]: url }))
              }
              checkedItems={checklistState[active.id] || []}
              onToggleItem={(itemIndex) =>
                setChecklistState((prev) => {
                  const current = prev[active.id] || [];
                  const next = [...current];
                  next[itemIndex] = !next[itemIndex];
                  return { ...prev, [active.id]: next };
                })
              }
              practiceValues={practiceAnswers[active.id] || {}}
              onPracticeChange={(fieldKey, value) =>
                setPracticeAnswers((prev) => ({
                  ...prev,
                  [active.id]: { ...(prev[active.id] || {}), [fieldKey]: value },
                }))
              }
              onComplete={() => markComplete(active.id)}
              onNext={goNext}
              hasNext={Boolean(nextLesson)}
            />
          )}
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TARJETA DE LECCIÓN                                                   */
/* ------------------------------------------------------------------ */

function LessonCard({
  lesson,
  index,
  moduleTitle,
  isDone,
  videoLink,
  onSetVideoLink,
  checkedItems,
  onToggleItem,
  practiceValues,
  onPracticeChange,
  onComplete,
  onNext,
  hasNext,
}) {
  const meta = TYPE_META[lesson.type];

  return (
    <article className="fa-card">
      <div className="fa-card-folio">
        <span>{moduleTitle}</span>
        <span className="fa-folio-page">p. {String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="fa-card-punch" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="fa-card-head">
        <span className="fa-card-type">
          <meta.Icon size={13} strokeWidth={2} />
          {meta.label}
        </span>
        <h1 className="fa-card-title">{lesson.title}</h1>
      </div>

      <div className="fa-card-body">
        {lesson.type === "texto" && <TextLesson lesson={lesson} />}
        {lesson.type === "video" && (
          <VideoLesson lesson={lesson} link={videoLink} onSetLink={onSetVideoLink} />
        )}
        {lesson.type === "quiz" && (
          <QuizLesson lesson={lesson} onPassed={onComplete} onNext={onNext} hasNext={hasNext} isDone={isDone} />
        )}
        {lesson.type === "checklist" && (
          <ChecklistLesson lesson={lesson} checkedItems={checkedItems} onToggleItem={onToggleItem} />
        )}
        {lesson.type === "practica" && (
          <PracticaLesson lesson={lesson} values={practiceValues} onChange={onPracticeChange} />
        )}
      </div>

      {lesson.type !== "quiz" && (
        <div className="fa-card-footer">
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button
            className="fa-btn-primary"
            onClick={() => {
              onComplete();
              if (hasNext) onNext();
            }}
          >
            {hasNext ? "Completar y continuar" : "Completar curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </article>
  );
}

function TextLesson({ lesson }) {
  return (
    <div className="fa-text-lesson">
      {lesson.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {lesson.tip && <div className="fa-tip">{lesson.tip}</div>}
      {lesson.references && lesson.references.length > 0 && (
        <div className="fa-references">
          <span className="fa-references-title">Referencias (APA 7)</span>
          <ul>
            {lesson.references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function VideoLesson({ lesson, link, onSetLink }) {
  const [draft, setDraft] = useState(link);
  const embed = youTubeEmbedUrl(link);

  useEffect(() => setDraft(link), [link]);

  return (
    <div className="fa-video-lesson">
      <p className="fa-video-desc">{lesson.description}</p>

      {embed ? (
        <div className="fa-video-frame">
          <iframe src={embed} title={lesson.title} allowFullScreen frameBorder="0" />
        </div>
      ) : (
        <div className="fa-video-placeholder">
          <PlayCircle size={28} strokeWidth={1.5} />
          <span>Aún no se ha agregado un video para esta lección.</span>
        </div>
      )}

      <div className="fa-video-input-row">
        <Link2 size={15} strokeWidth={2} />
        <input
          type="text"
          placeholder="Pega aquí el enlace de YouTube…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button className="fa-btn-secondary" onClick={() => onSetLink(draft.trim())}>
          Guardar enlace
        </button>
      </div>
    </div>
  );
}

function ChecklistLesson({ lesson, checkedItems, onToggleItem }) {
  const checkedCount = lesson.items.filter((_, i) => checkedItems[i]).length;
  const allChecked = checkedCount === lesson.items.length;

  return (
    <div className="fa-checklist">
      <p className="fa-checklist-intro">{lesson.intro}</p>

      <div className="fa-checklist-progress">
        <div className="fa-checklist-track">
          <div
            className="fa-checklist-fill"
            style={{ width: `${(checkedCount / lesson.items.length) * 100}%` }}
          />
        </div>
        <span>
          {checkedCount}/{lesson.items.length} marcados
        </span>
      </div>

      <ul className="fa-checklist-items">
        {lesson.items.map((item, i) => {
          const checked = Boolean(checkedItems[i]);
          return (
            <li key={i}>
              <button
                className={`fa-checklist-item${checked ? " is-checked" : ""}`}
                onClick={() => onToggleItem(i)}
              >
                <span className="fa-checklist-box">
                  {checked ? (
                    <CheckCircle2 size={18} strokeWidth={2} />
                  ) : (
                    <Circle size={18} strokeWidth={1.6} />
                  )}
                </span>
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {allChecked && (
        <div className="fa-checklist-done">
          <CheckCircle2 size={15} strokeWidth={2} />
          Has revisado todos los puntos de esta lista.
        </div>
      )}
    </div>
  );
}

function PracticaLesson({ lesson, values, onChange }) {
  return (
    <div className="fa-practica">
      <p className="fa-practica-intro">{lesson.intro}</p>

      {lesson.pdfHref && (
        <a className="fa-practica-download" href={lesson.pdfHref} download target="_blank" rel="noreferrer">
          <Download size={15} strokeWidth={2} />
          Descargar esta actividad en PDF
        </a>
      )}

      {lesson.exercises.map((ex, i) => (
        <div className="fa-practica-exercise" key={ex.id}>
          <div className="fa-practica-exercise-head">
            <span className="fa-practica-num">{i + 1}</span>
            <span className="fa-practica-title">{ex.title}</span>
          </div>
          <p className="fa-practica-instruction">{ex.instruction}</p>

          {ex.kind === "choice-items" && <ChoiceItemsBlock ex={ex} values={values} onChange={onChange} />}

          {ex.kind === "source-compare" && (
            <>
              <div className="fa-practica-source">
                <span className="fa-practica-source-label">{ex.source.label}</span>
                <p className="fa-practica-source-quote">{ex.source.quote}</p>
                {ex.source.meta && <p className="fa-practica-source-meta">{ex.source.meta}</p>}
              </div>
              {ex.studentVersion && (
                <div className="fa-practica-source">
                  <span className="fa-practica-source-label">{ex.studentVersion.label}</span>
                  <p className="fa-practica-source-quote">{ex.studentVersion.quote}</p>
                </div>
              )}
              {ex.prompts.map((p) => (
                <PromptField key={p.id} exId={ex.id} p={p} values={values} onChange={onChange} />
              ))}
            </>
          )}

          {ex.kind === "prompts" &&
            ex.prompts.map((p) => (
              <PromptField key={p.id} exId={ex.id} p={p} values={values} onChange={onChange} />
            ))}
        </div>
      ))}
    </div>
  );
}

function ChoiceItemsBlock({ ex, values, onChange }) {
  const [revealed, setRevealed] = useState(false);
  const labels = ex.choiceLabels || ["Sí", "No"];
  const allAnswered = ex.items.every((item) => values[`${ex.id}-${item.id}-choice`] !== undefined && values[`${ex.id}-${item.id}-choice`] !== "");

  const retry = () => {
    setRevealed(false);
    ex.items.forEach((item) => {
      onChange(`${ex.id}-${item.id}-choice`, "");
    });
  };

  return (
    <>
      {ex.items.map((item) => {
        const choiceKey = `${ex.id}-${item.id}-choice`;
        const justifKey = `${ex.id}-${item.id}-justif`;
        const choice = values[choiceKey];
        const hasCorrect = typeof item.correct === "number";
        return (
          <div className="fa-practica-item" key={item.id}>
            <p className="fa-practica-item-text">{item.text}</p>
            <div className="fa-practica-choices">
              {labels.map((label, li) => {
                const val = String(li);
                let stateClass = "";
                if (revealed && hasCorrect) {
                  if (li === item.correct) stateClass = " is-correct";
                  else if (choice === val) stateClass = " is-wrong";
                } else if (choice === val) {
                  stateClass = " is-selected";
                }
                return (
                  <button
                    key={val}
                    type="button"
                    disabled={revealed}
                    className={`fa-practica-choice${stateClass}`}
                    onClick={() => onChange(choiceKey, choice === val ? "" : val)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <textarea
              className="fa-practica-textarea"
              placeholder="Justifica tu respuesta en una frase corta…"
              rows={2}
              value={values[justifKey] || ""}
              onChange={(e) => onChange(justifKey, e.target.value)}
            />
            {revealed && item.explanation && (
              <p className="fa-practica-feedback">
                {choice !== "" && Number(choice) === item.correct ? "Correcto. " : "No es correcto. "}
                {item.explanation}
              </p>
            )}
          </div>
        );
      })}

      {!revealed ? (
        <button
          type="button"
          className="fa-btn-secondary fa-practica-check-btn"
          disabled={!allAnswered}
          onClick={() => setRevealed(true)}
        >
          <CheckCircle2 size={14} strokeWidth={2} />
          Revisar mis respuestas
        </button>
      ) : (
        <button type="button" className="fa-btn-secondary fa-practica-check-btn" onClick={retry}>
          <RotateCcw size={14} strokeWidth={2} />
          Intentar de nuevo
        </button>
      )}
    </>
  );
}

function PromptField({ exId, p, values, onChange }) {
  const [showSample, setShowSample] = useState(false);
  const key = `${exId}-${p.id}`;

  return (
    <div className="fa-practica-prompt">
      <label className="fa-practica-prompt-label">{p.label}</label>
      <textarea
        className="fa-practica-textarea"
        rows={3}
        value={values[key] || ""}
        onChange={(e) => onChange(key, e.target.value)}
      />
      {p.sample && (
        <>
          <button
            type="button"
            className="fa-practica-sample-btn"
            onClick={() => setShowSample((v) => !v)}
          >
            {showSample ? "Ocultar respuesta modelo" : "Ver respuesta modelo"}
          </button>
          {showSample && (
            <div className="fa-practica-sample">
              <span className="fa-practica-sample-label">Respuesta modelo</span>
              <p>{p.sample}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function QuizLesson({ lesson, onPassed, onNext, hasNext, isDone }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = lesson.questions.every((_, i) => answers[i] !== undefined);
  const score = lesson.questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0
  );
  const pct = Math.round((score / lesson.questions.length) * 100);

  const submit = () => {
    setSubmitted(true);
    onPassed();
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="fa-quiz">
      {lesson.questions.map((q, qi) => (
        <div className="fa-quiz-q" key={qi}>
          <p className="fa-quiz-question">
            {qi + 1}. {q.q}
          </p>
          <div className="fa-quiz-options">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              let stateClass = "";
              if (submitted) {
                if (oi === q.correct) stateClass = "is-correct";
                else if (selected && oi !== q.correct) stateClass = "is-wrong";
              } else if (selected) {
                stateClass = "is-selected";
              }
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  className={`fa-quiz-option ${stateClass}`}
                  onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                >
                  <span className="fa-option-bullet">{String.fromCharCode(97 + oi)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="fa-quiz-explanation">
              {answers[qi] === q.correct ? "Correcto. " : "No es correcto. "}
              {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="fa-btn-primary" disabled={!allAnswered} onClick={submit}>
          Enviar respuestas
          <ChevronRight size={16} strokeWidth={2.2} />
        </button>
      ) : (
        <div className="fa-quiz-result">
          <div className="fa-quiz-score">
            Resultado: {score}/{lesson.questions.length} ({pct}%)
          </div>
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button className="fa-btn-secondary" onClick={retry}>
            <RotateCcw size={14} strokeWidth={2} />
            Intentar de nuevo
          </button>
          <button className="fa-btn-primary" onClick={onNext} disabled={!hasNext}>
            {hasNext ? "Continuar" : "Fin del curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ESTILOS Y TIPOGRAFÍA                                                 */
/* ------------------------------------------------------------------ */

function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      :root {
        --ink: #0B3D42;
        --ink-soft: #1B4C52;
        --paper: #F6F1E7;
        --paper-card: #FCFAF4;
        --gold: #C98A2E;
        --wine: #7A2E3B;
        --sage: #4F7A5D;
        --line: #DDD3BE;
        --text: #29291F;
        --text-soft: #6b6b5f;
      }

      * { box-sizing: border-box; }

      .fa-root {
        font-family: 'Inter', sans-serif;
        color: var(--text);
        background: var(--paper);
        background-image:
          radial-gradient(circle at 1px 1px, rgba(11,61,66,0.05) 1px, transparent 0);
        background-size: 22px 22px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .fa-loading {
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: var(--ink);
        font-family: 'Source Serif 4', serif;
        padding: 60px 20px;
      }
      .fa-spinner {
        width: 26px; height: 26px;
        border: 3px solid var(--line);
        border-top-color: var(--gold);
        border-radius: 50%;
        animation: fa-spin 0.8s linear infinite;
      }
      @keyframes fa-spin { to { transform: rotate(360deg); } }

      .fa-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 22px;
        background: var(--ink);
        color: var(--paper);
        flex-wrap: wrap;
      }
      .fa-header-left { display: flex; align-items: center; gap: 10px; }
      .fa-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 19px;
        letter-spacing: 0.2px;
        line-height: 1.1;
      }
      .fa-subtitle {
        font-size: 11.5px;
        color: #CFE0DD;
        margin-top: 2px;
      }
      .fa-header-right { display: flex; align-items: center; }
      .fa-progress-wrap { display: flex; flex-direction: column; gap: 4px; min-width: 170px; }
      .fa-progress-track {
        width: 100%; height: 6px; border-radius: 3px;
        background: rgba(255,255,255,0.18);
        overflow: hidden;
      }
      .fa-progress-fill {
        height: 100%;
        background: var(--gold);
        transition: width 0.4s ease;
      }
      .fa-progress-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: #CFE0DD;
        text-align: right;
      }

      .fa-body {
        display: flex;
        flex: 1;
        min-height: 0;
        align-items: flex-start;
      }

      /* ---- Sidebar ---- */
      .fa-sidebar {
        width: 300px;
        flex-shrink: 0;
        background: var(--paper-card);
        border-right: 1px solid var(--line);
        padding: 18px 0 0 0;
        max-height: 82vh;
        overflow-y: auto;
      }
      .fa-module { padding: 0 18px 14px 18px; border-bottom: 1px dashed var(--line); margin-bottom: 6px; }
      .fa-module:last-of-type { border-bottom: none; }
      .fa-module-heading { margin-bottom: 8px; }
      .fa-module-label {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        letter-spacing: 1px;
        color: var(--gold);
        text-transform: uppercase;
      }
      .fa-module-title {
        display: block;
        font-family: 'Source Serif 4', serif;
        font-weight: 600;
        font-size: 15px;
        color: var(--ink);
      }
      .fa-lesson-list { list-style: none; margin: 0; padding: 0; }
      .fa-lesson-item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 9px;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        padding: 7px 8px;
        border-radius: 6px;
      }
      .fa-lesson-item:hover { background: rgba(11,61,66,0.06); }
      .fa-lesson-item.is-active { background: rgba(201,138,46,0.14); }
      .fa-lesson-check { margin-top: 2px; color: var(--text-soft); flex-shrink: 0; }
      .fa-lesson-item.is-done .fa-lesson-check { color: var(--sage); }
      .fa-lesson-item.is-active .fa-lesson-title { color: var(--ink); font-weight: 600; }
      .fa-lesson-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-left: 14px;
        border-left: 1px solid transparent;
      }
      .fa-lesson-item.is-active .fa-lesson-text { border-left-color: var(--gold); }
      .fa-lesson-title { font-size: 13.2px; line-height: 1.35; color: var(--text); }
      .fa-lesson-meta {
        display: flex; align-items: center; gap: 4px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .fa-sidebar-footer {
        padding: 14px 18px 20px 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-top: 1px solid var(--line);
      }
      .fa-save-indicator { font-size: 10.5px; color: var(--text-soft); font-family: 'IBM Plex Mono', monospace; }
      .fa-reset-btn {
        display: flex; align-items: center; gap: 6px;
        background: none; border: 1px solid var(--line); border-radius: 6px;
        padding: 7px 10px; font-size: 12px; color: var(--wine);
        cursor: pointer; width: fit-content;
      }
      .fa-reset-btn:hover { background: rgba(122,46,59,0.06); }
      .fa-reset-confirm { display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--wine); }
      .fa-btn-ghost-sm, .fa-btn-danger-sm {
        border: 1px solid var(--line); background: none; border-radius: 5px;
        padding: 5px 9px; font-size: 11.5px; cursor: pointer; margin-right: 6px;
      }
      .fa-btn-danger-sm { background: var(--wine); color: #fff; border-color: var(--wine); }

      /* ---- Contenido principal ---- */
      .fa-main {
        flex: 1;
        min-width: 0;
        padding: 26px 30px 40px 30px;
        max-height: 82vh;
        overflow-y: auto;
      }

      .fa-card {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 10px;
        max-width: 760px;
        margin: 0 auto;
        padding: 26px 32px 30px 32px;
        position: relative;
        box-shadow: 0 1px 0 var(--line), 0 8px 22px -18px rgba(11,61,66,0.5);
      }

      .fa-card-punch {
        position: absolute;
        left: 14px; top: 22px;
        display: flex; flex-direction: column; gap: 46px;
      }
      .fa-card-punch span {
        width: 9px; height: 9px; border-radius: 50%;
        background: var(--paper);
        border: 1px solid var(--line);
      }

      .fa-card-folio {
        display: flex; justify-content: space-between; align-items: baseline;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.6px;
        border-bottom: 1px solid var(--line);
        padding-bottom: 10px;
        margin-bottom: 18px;
        margin-left: 26px;
      }
      .fa-folio-page { color: var(--gold); }

      .fa-card-head { margin-left: 26px; margin-bottom: 18px; }
      .fa-card-type {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px; letter-spacing: 1px;
        color: var(--wine);
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      .fa-card-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 26px;
        color: var(--ink);
        line-height: 1.2;
        margin: 0;
      }

      .fa-card-body { margin-left: 26px; }

      .fa-text-lesson p {
        font-size: 15px; line-height: 1.75; margin: 0 0 14px 0; color: var(--text);
      }
      .fa-references {
        margin-top: 18px;
        padding-top: 12px;
        border-top: 1px solid var(--line);
      }
      .fa-references-title {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-soft);
        margin-bottom: 6px;
      }
      .fa-references ul { list-style: none; margin: 0; padding: 0; }
      .fa-references li {
        font-size: 12.5px;
        line-height: 1.55;
        color: var(--text-soft);
        padding-left: 1.6em;
        text-indent: -1.6em;
        margin-bottom: 6px;
        word-break: break-word;
      }
      .fa-tip {
        margin-top: 6px;
        padding: 12px 14px;
        background: rgba(201,138,46,0.1);
        border-left: 3px solid var(--gold);
        border-radius: 4px;
        font-size: 13.5px;
        color: var(--ink-soft);
      }

      .fa-video-desc { font-size: 14px; color: var(--text-soft); margin-bottom: 14px; line-height: 1.6; }
      .fa-video-frame {
        position: relative; width: 100%; padding-top: 56.25%;
        border-radius: 8px; overflow: hidden; background: #000; margin-bottom: 16px;
      }
      .fa-video-frame iframe {
        position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
      }
      .fa-video-placeholder {
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
        height: 200px; border: 1px dashed var(--line); border-radius: 8px;
        color: var(--text-soft); font-size: 13px; margin-bottom: 16px; background: rgba(11,61,66,0.03);
      }
      .fa-video-input-row {
        display: flex; align-items: center; gap: 8px;
        border: 1px solid var(--line); border-radius: 7px; padding: 6px 10px;
        background: var(--paper);
      }
      .fa-video-input-row input {
        flex: 1; border: none; background: none; outline: none; font-size: 13px; color: var(--text);
        font-family: 'Inter', sans-serif;
      }

      .fa-btn-primary {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--ink); color: var(--paper);
        border: none; border-radius: 7px;
        padding: 10px 18px; font-size: 13.5px; font-weight: 600;
        cursor: pointer;
      }
      .fa-btn-primary:hover { background: var(--ink-soft); }
      .fa-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

      .fa-btn-secondary {
        display: inline-flex; align-items: center; gap: 6px;
        background: none; color: var(--ink);
        border: 1px solid var(--ink); border-radius: 7px;
        padding: 7px 13px; font-size: 12.5px; font-weight: 500;
        cursor: pointer; white-space: nowrap;
      }
      .fa-btn-secondary:hover { background: rgba(11,61,66,0.06); }

      .fa-card-footer {
        margin-left: 26px; margin-top: 22px; padding-top: 18px;
        border-top: 1px solid var(--line);
        display: flex; align-items: center; gap: 14px;
      }
      .fa-done-badge {
        display: inline-flex; align-items: center; gap: 5px;
        color: var(--sage); font-size: 12.5px; font-weight: 600;
      }

      /* ---- Checklist ---- */
      .fa-checklist-intro { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0 0 16px 0; }
      .fa-checklist-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
      .fa-checklist-track { flex: 1; height: 6px; border-radius: 3px; background: var(--line); overflow: hidden; }
      .fa-checklist-fill { height: 100%; background: var(--sage); transition: width 0.3s ease; }
      .fa-checklist-progress span {
        font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-soft); white-space: nowrap;
      }
      .fa-checklist-items { list-style: none; margin: 0 0 6px 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      .fa-checklist-item {
        width: 100%;
        display: flex; align-items: flex-start; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 8px;
        padding: 11px 14px; font-size: 14px; line-height: 1.5;
        background: var(--paper); cursor: pointer; color: var(--text);
      }
      .fa-checklist-item:hover { border-color: var(--gold); }
      .fa-checklist-item.is-checked {
        border-color: var(--sage); background: rgba(79,122,93,0.09); color: var(--ink);
      }
      .fa-checklist-box { color: var(--text-soft); flex-shrink: 0; margin-top: 1px; }
      .fa-checklist-item.is-checked .fa-checklist-box { color: var(--sage); }
      .fa-checklist-done {
        display: flex; align-items: center; gap: 7px;
        margin-top: 14px; font-size: 13px; color: var(--sage); font-weight: 600;
      }

      /* ---- Actividad práctica ---- */
      .fa-practica-intro { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0 0 14px 0; }
      .fa-practica-download {
        display: inline-flex; align-items: center; gap: 7px;
        background: var(--ink); color: var(--paper); text-decoration: none;
        border-radius: 7px; padding: 9px 15px; font-size: 12.5px; font-weight: 600;
        margin-bottom: 22px;
      }
      .fa-practica-download:hover { background: var(--ink-soft); }

      .fa-practica-exercise {
        border-top: 1px dashed var(--line);
        padding-top: 18px;
        margin-top: 18px;
      }
      .fa-practica-exercise:first-of-type { border-top: none; margin-top: 0; padding-top: 0; }
      .fa-practica-exercise-head { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
      .fa-practica-num {
        width: 24px; height: 24px; border-radius: 50%; background: var(--gold); color: var(--paper);
        display: flex; align-items: center; justify-content: center;
        font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 12.5px; flex-shrink: 0;
      }
      .fa-practica-title { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 16px; color: var(--ink); }
      .fa-practica-instruction { font-size: 13px; color: var(--text-soft); margin: 0 0 12px 34px; line-height: 1.5; white-space: pre-line; }

      .fa-practica-item {
        margin: 0 0 12px 34px;
        background: var(--paper-card); border: 1px solid var(--line); border-radius: 8px;
        padding: 12px 14px;
      }
      .fa-practica-item-text { font-size: 13.5px; color: var(--text); margin: 0 0 9px 0; line-height: 1.5; }
      .fa-practica-choices { display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
      .fa-practica-choice {
        border: 1px solid var(--line); background: var(--paper); border-radius: 6px;
        padding: 6px 12px; font-size: 12px; font-weight: 600; color: var(--text-soft); cursor: pointer;
      }
      .fa-practica-choice:hover { border-color: var(--gold); }
      .fa-practica-choice.is-selected { background: var(--ink); border-color: var(--ink); color: var(--paper); }

      .fa-practica-textarea {
        width: 100%; border: 1px solid var(--line); border-radius: 6px;
        padding: 8px 10px; font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text);
        background: var(--paper); resize: vertical;
      }
      .fa-practica-textarea:focus { outline: none; border-color: var(--gold); }

      .fa-practica-source {
        margin: 0 0 10px 34px;
        background: rgba(201,138,46,0.08); border: 1px solid var(--line); border-radius: 8px;
        padding: 12px 14px;
      }
      .fa-practica-source-label {
        display: block; font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; font-weight: 700;
        letter-spacing: 0.8px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px;
      }
      .fa-practica-source-quote { font-style: italic; font-size: 13.5px; color: var(--text); margin: 0; line-height: 1.5; }
      .fa-practica-source-meta { font-size: 11.5px; color: var(--text-soft); margin: 6px 0 0 0; }

      .fa-practica-prompt { margin: 0 0 12px 34px; }
      .fa-practica-prompt-label {
        display: block; font-size: 12.5px; font-weight: 600; color: var(--ink); margin-bottom: 6px;
        white-space: pre-line; line-height: 1.5;
      }

      .fa-practica-choice.is-correct { border-color: var(--sage); background: rgba(79,122,93,0.14); color: var(--ink); }
      .fa-practica-choice.is-wrong { border-color: var(--wine); background: rgba(122,46,59,0.12); color: var(--wine); }
      .fa-practica-choice:disabled { cursor: default; }
      .fa-practica-feedback {
        margin: 8px 0 0 0; font-size: 12px; color: var(--text-soft); line-height: 1.5;
      }
      .fa-practica-check-btn { margin: 4px 0 22px 34px; }

      .fa-practica-sample-btn {
        margin-top: 8px; background: none; border: none; color: var(--wine);
        font-size: 12px; font-weight: 600; cursor: pointer; padding: 0; text-decoration: underline;
      }
      .fa-practica-sample {
        margin-top: 8px; background: rgba(79,122,93,0.08); border: 1px solid var(--line);
        border-radius: 6px; padding: 10px 12px;
      }
      .fa-practica-sample-label {
        display: block; font-family: 'IBM Plex Mono', monospace; font-size: 9px; font-weight: 700;
        letter-spacing: 0.8px; text-transform: uppercase; color: var(--sage); margin-bottom: 5px;
      }
      .fa-practica-sample p { margin: 0; font-size: 13px; color: var(--text); line-height: 1.5; font-style: italic; }

      /* ---- Quiz ---- */
      .fa-quiz-q { margin-bottom: 22px; }
      .fa-quiz-question { font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
      .fa-quiz-options { display: flex; flex-direction: column; gap: 7px; }
      .fa-quiz-option {
        display: flex; align-items: center; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 7px;
        padding: 9px 12px; font-size: 13.5px;
        background: var(--paper); cursor: pointer;
      }
      .fa-quiz-option:hover:not(:disabled) { border-color: var(--gold); }
      .fa-quiz-option.is-selected { border-color: var(--gold); background: rgba(201,138,46,0.1); }
      .fa-quiz-option.is-correct { border-color: var(--sage); background: rgba(79,122,93,0.12); }
      .fa-quiz-option.is-wrong { border-color: var(--wine); background: rgba(122,46,59,0.1); }
      .fa-option-bullet {
        width: 20px; height: 20px; border-radius: 50%;
        border: 1px solid var(--line); background: var(--paper-card);
        display: flex; align-items: center; justify-content: center;
        font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; flex-shrink: 0;
        text-transform: uppercase;
      }
      .fa-quiz-explanation {
        margin-top: 8px; font-size: 12.5px; color: var(--text-soft);
        padding-left: 2px; line-height: 1.5;
      }
      .fa-quiz-result {
        display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        border-top: 1px solid var(--line); padding-top: 16px; margin-top: 6px;
      }
      .fa-quiz-score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px; color: var(--ink); font-weight: 600;
      }

      @media (max-width: 780px) {
        .fa-body { flex-direction: column; }
        .fa-sidebar { width: 100%; max-height: none; border-right: none; border-bottom: 1px solid var(--line); }
        .fa-main { max-height: none; padding: 20px 16px 32px 16px; }
        .fa-card { padding: 22px 18px 26px 18px; }
        .fa-card-punch { display: none; }
        .fa-card-folio, .fa-card-head, .fa-card-body, .fa-card-footer { margin-left: 0; }
        .fa-card-title { font-size: 21px; }
      }
    `}</style>
  );
}
