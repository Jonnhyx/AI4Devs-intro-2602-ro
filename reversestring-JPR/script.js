/**
 * @module StringUtilities
 * Colección de utilidades profesionales para manipulación de cadenas.
 */
const StringUtilities = (() => {
    
    /**
     * Invierte el orden de una cadena de texto.
     * @param {string} str - La cadena de entrada.
     * @returns {string} - La cadena invertida.
     * @throws {TypeError} - Si la entrada no es un string.
     */
    const reverse = (str) => {
        if (typeof str !== 'string') {
            throw new TypeError('El argumento debe ser una cadena de texto.');
        }
        
        // Se utiliza el método spread para manejar correctamente caracteres Unicode/Emojis
        // split('') puede fallar con ciertos caracteres complejos.
        return [...str].reverse().join('');
    };

    return { reverse };
})();

/**
 * Lógica de Interfaz de Usuario (UI)
 */
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const button = document.getElementById('reverseBtn');
    const output = document.getElementById('resultOutput');

    const handleReverse = () => {
        const value = input.value.trim();
        
        if (!value) {
            output.textContent = 'Por favor, escribe algo.';
            output.style.color = '#ef4444'; // Color de error
            return;
        }

        try {
            const result = StringUtilities.reverse(value);
            output.textContent = result;
            output.style.color = '#2563eb'; // Color primario
        } catch (error) {
            console.error("Error en procesamiento:", error);
            output.textContent = 'Error interno.';
        }
    };

    // Eventos
    button.addEventListener('click', handleReverse);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleReverse();
    });
});

/**
 * TEST SUITE (Unit Testing)
 * Ejecuta validaciones automáticas en la consola del navegador.
 */
const runTests = () => {
    console.group('%c Suite de Pruebas: StringUtilities ', 'background: #222; color: #bada55');
    
    const cases = [
        { input: "AI4Devs", expected: "sveD4IA", desc: "Caso base solicitado" },
        { input: "12345", expected: "54321", desc: "Números como string" },
        { input: "Hola Mundo", expected: "odnuM aloH", desc: "Strings con espacios" },
        { input: "", expected: "", desc: "String vacío" },
        { input: "🚀Fly", expected: "ylF🚀", desc: "Soporte para Emojis/Unicode" }
    ];

    cases.forEach(({ input, expected, desc }) => {
        const result = StringUtilities.reverse(input);
        const passed = result === expected;
        console.log(
            `${passed ? '✅' : '❌'} %c${desc}:`, 
            'font-weight: bold', 
            `Input: "${input}" | Expected: "${expected}" | Got: "${result}"`
        );
    });

    console.groupEnd();
};

// Ejecutamos los tests automáticamente al cargar para asegurar integridad
runTests();