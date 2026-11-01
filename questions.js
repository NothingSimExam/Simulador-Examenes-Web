// Banco de Preguntas Masivo - SimuExam (Con fórmulas y explicaciones verticales)
const questionBank = {
    CalculoDif: [
        {
            id: 1,
            difficulty: "basico",
            question: "Calcule el límite: $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$",
            options: ["0", "1", "Infinito", "No existe"],
            correct: 1,
            formulas: [
                "Límite trigonométrico fundamental: $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$$"
            ],
            explanation: "1. Identificamos que al evaluar directamente $x = 0$, obtenemos una indeterminación del tipo $\\frac{0}{0}$.<br>2. Aplicamos propiedades de límites trigonométricos notables.<br>3. Por definición trigonométrica fundamental, el cociente tiende a 1."
        },
        {
            id: 2,
            difficulty: "intermedio",
            question: "¿Cuál es la derivada de $f(x) = x^3 - 4x + 7$?",
            options: ["$3x^2 - 4$", "$3x^2 - 4x$", "$x^2 - 4$", "$3x - 4$"],
            correct: 0,
            formulas: [
                "Regla de la potencia: $$\\frac{d}{dx}(x^n) = n \\cdot x^{n-1}$$",
                "Derivada de una constante: $$\\frac{d}{dx}(c) = 0$$"
            ],
            explanation: "1. Derivamos término a término utilizando la regla de la potencia.<br>2. Para $x^3$, el exponente baja multiplicando y se resta 1: $3x^2$.<br>3. Para $-4x$, la derivada de la variable lineal es 1, resultando en $-4$.<br>4. La constante $7$ se anula por derivada cero."
        }
    ],
    CalculoInt: [
        {
            id: 3,
            difficulty: "basico",
            question: "Determine la integral indefinida básica: $$\\int x^2 dx$$",
            options: ["$$\\frac{x^3}{3} + C$$", "$$2x + C$$", "$$x^3 + C$$", "$$\\frac{x^2}{2} + C$$"],
            correct: 0,
            formulas: [
                "Fórmula de integración por potencia: $$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$"
            ],
            explanation: "1. Identificamos que se trata de una integral directa por regla de potencia.<br>2. Tomamos el exponente $n = 2$ y le sumamos 1 en el numerador y denominador.<br>3. Obtenemos $\\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$."
        },
        {
            id: 4,
            difficulty: "intermedio",
            question: "Resuelva la integral: $$\\int 2x \\cos(x^2) dx$$",
            options: ["$$\\sin(x^2) + C$$", "$$-\\sin(x^2) + C$$", "$$2\\sin(x) + C$$", "$$\\cos(x^2) + C$$"],
            correct: 0,
            formulas: [
                "Método de sustitución (Cambio de variable): $$\\int f(g(x))g'(x)dx = \\int f(u)du$$",
                "Integral trigonométrica básica: $$\\int \\cos(u) du = \\sin(u) + C$$"
            ],
            explanation: "1. Elegimos el cambio de variable $u = x^2$.<br>2. Calculamos su diferencial: $du = 2x \\, dx$.<br>3. Sustituimos en la integral original, quedando $\\int \\cos(u) du$.<br>4. Integramos para obtener $\\sin(u) + C$ y regresamos a la variable original: $\\sin(x^2) + C$."
        }
    ],
    Fisica: [
        {
            id: 5,
            difficulty: "basico",
            question: "Según la segunda ley de Newton, la fuerza neta sobre un objeto es igual a su masa multiplicada por:",
            options: ["La velocidad", "La aceleración", "La posición", "El tiempo"],
            correct: 1,
            formulas: [
                "Segunda Ley de Newton: $$F = m \\cdot a$$"
            ],
            explanation: "1. La segunda ley de Newton establece la relación directa entre la dinámica y la cinemática.<br>2. La fuerza neta ($F$) aplicada sobre un cuerpo es directamente proporcional a la aceleración ($a$) que adquiere, mediada por su masa ($m$)."
        }
    ],
    Algebra: [
        {
            id: 6,
            difficulty: "intermedio",
            question: "¿Cuál es el determinante de una matriz de $2 \\times 2$ con elementos a, b en la fila 1 y c, d en la fila 2?",
            options: ["$$ad + bc$$", "$$ab - cd$$", "$$ad - bc$$", "$$a + d - b - c$$"],
            correct: 2,
            formulas: [
                "Determinante matriz $2 \\times 2$: $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$"
            ],
            explanation: "1. Se multiplican los elementos de la diagonal principal ($a \\cdot d$).<br>2. Se multiplican los elementos de la diagonal secundaria ($b \\cdot c$).<br>3. Se restan ambos productos: $ad - bc$."
        }
    ]
};