/**
 * @module TextProcessor
 * Lógica de negocio para procesamiento de strings con estándares de ingeniería.
 */
const TextProcessor = (() => {
    /**
     * Invierte una cadena de texto de forma segura.
     * Se utiliza el operador spread [...] para descomponer el string en lugar de .split('').
     * Esto garantiza que los pares subrogados (como Emojis) no se rompan al invertirse.
     * * @param {string} str - La cadena de entrada.
     * @returns {string} - La cadena invertida.
     * @throws {TypeError} - Si la entrada no es un string.
     */
    const reverse = (str) => {
        if (typeof str !== 'string') {
            throw new TypeError('La entrada debe ser una cadena de texto.');
        }
        return [...str].reverse().join('');
    };

    return { reverse };
})();

/**
 * UI Controller
 * Gestiona los eventos del DOM y la experiencia de usuario (UX).
 */
document.addEventListener('DOMContentLoaded', () => {
    // Cache de selectores del DOM para optimizar el rendimiento
    const dom = {
        input: document.getElementById('userInput'),
        button: document.getElementById('actionBtn'),
        output: document.getElementById('resultOutput'),
        counter: document.getElementById('charCount')
    };

    /**
     * Gestiona la actualización en tiempo real y los estados de la interfaz.
     * @param {Event} e - Evento de entrada de texto.
     */
    const handleInput = (e) => {
        const value = e.target.value.trim();
        const length = value.length;

        // Actualizamos el contador visual de caracteres
        dom.counter.textContent = `(${length})`;

        // Reseteamos estados visuales por defecto
        dom.output.classList.remove('error-text');
        dom.output.classList.add('success-text');

        // Caso: Campo vacío
        if (length === 0) {
            dom.output.textContent = '---';
            dom.button.classList.remove('is-visible');
            return;
        }

        try {
            // 1. Inversión reactiva (en tiempo real)
            const invertedText = TextProcessor.reverse(value);
            dom.output.textContent = invertedText;

            // 2. Control de visibilidad del botón (Más de 3 letras)
            if (length > 3) {
                dom.button.classList.add('is-visible');
            } else {
                dom.button.classList.remove('is-visible');
            }

        } catch (error) {
            // Manejo consistente de errores técnicos
            console.error("Error crítico en procesamiento:", error);
            dom.output.textContent = 'Error en el procesamiento';
            dom.output.classList.replace('success-text', 'error-text');
            dom.button.classList.remove('is-visible');
        }
    };

    /**
     * Acción secundaria: Copiar el resultado al portapapeles.
     */
    const copyToClipboard = async () => {
        const textToCopy = dom.output.textContent;
        if (!textToCopy || textToCopy === '---') return;

        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Feedback visual temporal en el botón
            const originalLabel = dom.button.textContent;
            dom.button.textContent = '¡Copiado! ✅';
            dom.button.style.backgroundColor = '#10b981'; // Verde éxito
            
            setTimeout(() => {
                dom.button.textContent = originalLabel;
                dom.button.style.backgroundColor = ''; // Reset a CSS original
            }, 2000);

        } catch (err) {
            console.error('Fallo al copiar al portapapeles:', err);
        }
    };

    // Asignación de listeners
    dom.input.addEventListener('input', handleInput);
    dom.button.addEventListener('click', copyToClipboard);

    // Ejecución de la suite de pruebas al inicio
    runTestSuite(TextProcessor.reverse);
});

/**
 * TEST SUITE (TDD Approach)
 * Ejecuta validaciones automáticas para asegurar la integridad del código.
 */
function runTestSuite(reverseFn) {
    console.group('%c 🧪 Suite de Pruebas: Inversor de Texto ', 'background: #222; color: #3b82f6; font-weight: bold; padding: 4px;');
    
    const cases = [
        { input: "AI4Devs", expected: "sveD4IA", desc: "Caso base solicitado" },
        { input: "JS", expected: "SJ", desc: "Cadena corta" },
        { input: "Hola Mundo", expected: "odnuM aloH", desc: "Strings con espacios" },
        { input: "🚀Coding", expected: "gnidoC🚀", desc: "Soporte Unicode/Emojis" }
    ];

    cases.forEach(({ input, expected, desc }) => {
        const result = reverseFn(input);
        const passed = result === expected;
        console.log(
            `${passed ? '✅' : '❌'} %c${desc}:%c Esperado "${expected}" -> Recibido "${result}"`,
            'font-weight: bold', 'color: inherit'
        );
    });

    console.groupEnd();
}