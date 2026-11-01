// Banco de Preguntas Masivo - SimuExam
const questionBank = {
    CalculoDif: [
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
        }
    ],
    CalculoInt: [
        {
            id: 3,
            difficulty: "basico",
            question: "Determine la integral indefinida básica: $$\\int x^2 dx$$",
            options: ["$$\\frac{x^3}{3} + C$$", "$$2x + C$$", "$$x^3 + C$$", "$$\\frac{x^2}{2} + C$$"],
            correct: 0,
            explanation: "Se aplica la regla de integración por potencia: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$. Por lo tanto, para $n=2$ queda $\\frac{x^3}{3} + C$."
        },
        {
            id: 4,
            difficulty: "intermedio",
            question: "Resuelva la integral: $$\\int 2x \\cos(x^2) dx$$",
            options: ["$$\\sin(x^2) + C$$", "$$-\\sin(x^2) + C$$", "$$2\\sin(x) + C$$", "$$\\cos(x^2) + C$$"],
            correct: 0,
            explanation: "Se resuelve por sustitución: sea $u = x^2$, entonces $du = 2x dx$. La integral se reduce a $\\int \\cos(u) du = \\sin(u) + C$."
        }
    ],
    Fisica: [
        {
            id: 5,
            difficulty: "basico",
            question: "Según la segunda ley de Newton, la fuerza neta sobre un objeto es igual a su masa multiplicada por:",
            options: ["La velocidad", "La aceleración", "La posición", "El tiempo"],
            correct: 1,
            explanation: "La expresión matemática es $F = m \\cdot a$, relacionando directamente la fuerza y la aceleración."
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
        }
    ]
};