const algebraQuestions = [
    {
        id: 5,
        difficulty: "intermedio",
        question: "¿Cuál es el determinante de una matriz de $2 \\times 2$ con elementos a, b en la fila 1 y c, d en la fila 2?",
        options: ["$$ad + bc$$", "$$ab - cd$$", "$$ad - bc$$", "$$a + d - b - c$$"],
        correct: 2,
        formulas: [
            "Determinante $2 \\times 2$: $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$"
        ],
        explanation: "1. Multiplicamos la diagonal principal: $a \\cdot d$.<br>2. Multiplicamos la diagonal secundaria: $b \\cdot c$.<br>3. Restamos ambas: $ad - bc$."
    }
];