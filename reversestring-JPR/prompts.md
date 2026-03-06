Prompt Inicial
Rol:
Actúa como un Senior Fullstack Developer y Arquitecto de Software. Eres experto en escribir código limpio (Clean Code), mantenible y altamente eficiente en JavaScript moderno (ES6+).

Contexto:
Necesitamos desarrollar una micro-herramienta web para procesar cadenas de texto. El núcleo de la funcionalidad es un algoritmo que invierta el orden de cualquier cadena proporcionada por el usuario (Ejemplo: "AI4Devs" ➔ "sveD4IA"). Disponemos de una carpeta template/ con los archivos base index.html y script.js que debes utilizar como punto de partida obligatorio.

Resultado deseado:

Interfaz de Usuario (UI): Completa el index.html con un diseño semántico que incluya un campo de entrada (input), un botón de acción y un contenedor para el resultado.

Lógica de Negocio: Implementa en script.js una función robusta para invertir el texto, asegurando que maneje casos de borde (strings vacíos, caracteres especiales, espacios).

Calidad de Código: Utiliza JSDoc para documentar todas las funciones. El código debe estar modularizado y seguir las mejores prácticas de nomenclatura.

Testing: Incluye una suite de pruebas unitarias al final del archivo o en un bloque separado, validando al menos 3 casos de uso diferentes para asegurar la integridad del algoritmo.

Tono y Estilo:
Técnico, profesional y pedagógico. El código debe hablar por sí solo, pero los comentarios deben explicar el "porqué" de las decisiones arquitectónicas tomadas.

Opciones:

Algoritmo: Puedes optar por el método estándar (split.reverse.join) o un enfoque basado en bucles si consideras que es más eficiente para el rendimiento.

Estilos: Siéntete libre de añadir estilos CSS internos dentro de una etiqueta <style> en el HTML para que la herramienta sea visualmente profesional.

Validación: Implementa validaciones para evitar que el usuario procese campos vacíos.

Salida:
Proporciona el código completo de los archivos:

index.html (Estructura y estilos).

script.js (Lógica documentada + Pruebas unitarias integradas).

Prompt: Refactorización Reactiva y UX Dinámica
Rol:
Actúa como un Senior Frontend Engineer experto en UX/UI y JavaScript Moderno. Tu enfoque es crear interfaces altamente interactivas, eficientes y con un código desacoplado.

Contexto:
Estamos evolucionando nuestra herramienta de inversión de texto. El objetivo es que la herramienta sea "viva": que el usuario vea el resultado mientras escribe y que la interfaz responda a la cantidad de datos introducidos. Trabajaremos sobre la estructura de archivos reversestring-JPR/ con el index.html y script.js previos.

Resultado deseado:

Lógica en Tiempo Real: Implementa un escuchador de eventos (input) para que la cadena se invierta automáticamente en el contenedor de resultados a medida que el usuario escribe, sin necesidad de pulsar ningún botón.

Visibilidad Condicional del Botón:

El botón de acción debe estar oculto por defecto (puedes usar CSS display: none o el atributo hidden).

El botón solo debe aparecer (ser visible) cuando el input contenga más de 3 caracteres.

Si el texto vuelve a tener 3 caracteres o menos, el botón debe desaparecer de nuevo.

Algoritmo de Inversión: Mantén el soporte para caracteres Unicode/Emojis usando el operador spread.

Calidad Técnica:

Sigue principios de Clean Code y JSDoc.

Asegura que la manipulación del DOM sea eficiente (no busques los elementos dentro del evento, hazlo fuera).

Actualiza la Suite de Tests para validar que la lógica de inversión sigue funcionando correctamente con diferentes longitudes de cadena.

Tono y Estilo:
Técnico, enfocado en la eficiencia del DOM y la experiencia de usuario. El código debe ser modular para facilitar su mantenimiento.

Opciones:

Animación: Opcionalmente, añade una transición suave (CSS transition) para la aparición/desaparición del botón.

Funcionalidad del Botón: Dado que el texto ya se invierte en tiempo real, el botón puede servir para una acción secundaria (ej. "Copiar al portapapeles" o "Limpiar campo").

Salida:

Código actualizado de index.html (incluyendo estilos para la visibilidad).

Código actualizado de script.js con la lógica reactiva y la suite de tests.