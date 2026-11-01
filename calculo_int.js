const calculoIntQuestions = [
    {
        id: 3,
        difficulty: "basico",
        question: "Determine la integral indefinida básica: $$\\int x^2 dx$$",
        options: ["$$\\frac{x^3}{3} + C$$", "$$2x + C$$", "$$x^3 + C$$", "$$\\frac{x^2}{2} + C$$"],
        correct: 0,
        formulas: [
            "Integración por potencia: $$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$$"
        ],
        explanation: "1. Aplicamos la regla de potencias sumando 1 al exponente.<br>2. Obtenemos $\\frac{x^{2+1}}{2+1} + C$.<br>3. El resultado final es $\\frac{x^3}{3} + C$."
    }
];