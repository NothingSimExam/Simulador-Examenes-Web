// Centralizador del banco de preguntas modular
const questionBank = {
    CalculoDif: typeof calculoDifQuestions !== 'undefined' ? calculoDifQuestions : [],
    CalculoInt: typeof calculoIntQuestions !== 'undefined' ? calculoIntQuestions : [],
    Fisica: typeof fisicaQuestions !== 'undefined' ? fisicaQuestions : [],
    Algebra: typeof algebraQuestions !== 'undefined' ? algebraQuestions : []
};