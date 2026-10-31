// Banco de Preguntas Masivo - SimuExam
const questionBank = {
    Calculo: [
        {
            id: 1,
            difficulty: "basico",
            question: "Calcule el límite: $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$",
            options: ["0", "1", "Infinito", "No existe"],
            correct: 1,
            explanation: "Este es un límite trigonométrico notable fundamental cuyo valor estándar es 1."
        },
        {
            id: 2,
            difficulty: "intermedio",
            question: "¿Cuál es la derivada de $f(x) = x^3 - 4x + 7$?",
            options: ["$3x^2 - 4$", "$3x^2 - 4x$", "$x^2 - 4$", "$3x - 4$"],
            correct: 0,
            explanation: "Se aplica la regla de la potencia: la derivada de $x^3$ es $3x^2$, la de $-4x$ es $-4$ y la constante $7$ se anula."
        },
        {
            id: 3,
            difficulty: "avanzado",
            question: "Determine la integral indefinida: $$\\int 2x \\cos(x^2) dx$$",
            options: ["$$\\sin(x^2) + C$$", "$$-\\sin(x^2) + C$$", "$$2\\sin(x) + C$$", "$$\\cos(x^2) + C$$"],
            correct: 0,
            explanation: "Se resuelve por el método de sustitución haciendo $u = x^2$, por lo que $du = 2x dx$. La integral queda como $\\int \\cos(u) du = \\sin(u) + C$."
        }
    ],
    Fisica: [
        {
            id: 4,
            difficulty: "basico",
            question: "Según la segunda ley de Newton, la fuerza neta sobre un objeto es igual a su masa multiplicada por:",
            options: ["La velocidad", "La aceleración", "La posición", "El tiempo"],
            correct: 1,
            explanation: "La expresión matemática es $F = m \\cdot a$, relacionando directamente la fuerza y la aceleración."
        },
        {
            id: 5,
            difficulty: "intermedio",
            question: "¿Cuál es la unidad de medida de la energía y el trabajo en el Sistema Internacional (SI)?",
            options: ["Watt (W)", "Newton (N)", "Joule (J)", "Pascal (Pa)"],
            correct: 2,
            explanation: "El Joule (J) equivale a un Newton por metro ($N \\cdot m$), que es la unidad estándar de trabajo y energía."
        }
    ],
    Algebra: [
        {
            id: 6,
            difficulty: "intermedio",
            question: "¿Cuál es el determinante de una matriz de $2 \\times 2$ con elementos a, b en la fila 1 y c, d en la fila 2?",
            options: ["$$ad + bc$$", "$$ab - cd$$", "$$ad - bc$$", "$$a + d - b - c$$"],
            correct: 2,
            explanation: "El determinante se calcula restando el producto de la diagonal secundaria al de la principal: $ad - bc$."
        },
        {
            id: 7,
            difficulty: "avanzado",
            question: "Si una matriz cuadrada tiene un determinante igual a 0, se dice que la matriz es:",
            options: ["Inversible", "Singular (No inversible)", "Ortogonal", "Simétrica"],
            correct: 1,
            explanation: "Una matriz cuyo determinante es cero no posee matriz inversa, por lo que se le denomina matriz singular."
        }
    ]
};