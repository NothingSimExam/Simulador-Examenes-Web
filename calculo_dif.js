const calculoDifQuestions = [
    {
        id: 1,
        difficulty: "basico",
        question: "Calcule el límite: $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$",
        options: ["0", "1", "Infinito", "No existe"],
        correct: 1,
        formulas: [
            "Límite trigonométrico fundamental: $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$$"
        ],
        explanation: "1. Evaluando directamente $x = 0$, obtenemos una indeterminación del tipo $\\frac{0}{0}$.<br>2. Aplicamos identidades y límites notables.<br>3. Por definición trigonométrica fundamental, el resultado es 1."
    },
    {
        id: 2,
        difficulty: "intermedio",
        question: "¿Cuál es la derivada de $f(x) = x^3 - 4x + 7$?",
        options: ["$3x^2 - 4$", "$3x^2 - 4x$", "$x^2 - 4$", "$3x - 4$"],
        correct: 0,
        formulas: [
            "Regla de la potencia: $$\\frac{d}{dx}(x^n) = n \\cdot x^{n-1}$$",
            "Derivada de constante: $$\\frac{d}{dx}(c) = 0$$"
        ],
        explanation: "1. Derivamos término a término.<br>2. La derivada de $x^3$ es $3x^2$.<br>3. La derivada de $-4x$ es $-4$.<br>4. La constante $7$ se anula."
    }
];