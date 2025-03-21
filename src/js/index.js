const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

const questions = [
  {
    question: "PHP foi desenvolvido para qual fim?",
    answers: [
      {
        answer: "back-end",
        correct: true,
      },
      {
        answer: "front-end",
        correct: false,
      },
      {
        answer: "Sistema operacional",
        correct: false,
      },
      {
        answer: "Banco de dados",
        correct: false,
      },
    ],
  },
  {
    question: "Uma forma de declarar variável em JavaScript:",
    answers: [
      {
        answer: "$var",
        correct: false,
      },
      {
        answer: "var",
        correct: true,
      },
      {
        answer: "@var",
        correct: false,
      },
      {
        answer: "#let",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o seletor de id no CSS?",
    answers: [
      {
        answer: "#",
        correct: true,
      },
      {
        answer: ".",
        correct: false,
      },
      {
        answer: "@",
        correct: false,
      },
      {
        answer: "/",
        correct: false,
      },
    ],
  },
  {
    question: "Qual tag HTML é usada para criar um parágrafo?",
    answers: [
      {
        answer: "<h1>",
        correct: false,
      },
      {
        answer: "<div>",
        correct: false,
      },
      {
        answer: "<p>",
        correct: true,
      },
      {
        answer: "<span>",
        correct: false,
      },
    ],
  },
  {
    question: "Qual a linguagem usada para estilizar páginas web?",
    answers: [
      {
        answer: "HTML",
        correct: false,
      },
      {
        answer: "CSS",
        correct: true,
      },
      {
        answer: "Python",
        correct: false,
      },
      {
        answer: "Java",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o propósito do atributo 'alt' na tag <img>?",
    answers: [
      {
        answer: "Definir o tamanho da imagem",
        correct: false,
      },
      {
        answer: "Alterar a cor da imagem",
        correct: false,
      },
      {
        answer: "Carregar uma imagem alternativa",
        correct: false,
      },
      {
        answer: "Descrever o conteúdo da imagem",
        correct: true,
      },
    ],
  },
  {
    question: "O que significa a sigla DOM em JavaScript?",
    answers: [
      {
        answer: "Document Object Model",
        correct: true,
      },
      {
        answer: "Data Object Manager",
        correct: false,
      },
      {
        answer: "Document Output Method",
        correct: false,
      },
      {
        answer: "Data Oriented Mapping",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o operador usado para atribuição em JavaScript?",
    answers: [
      {
        answer: "=",
        correct: true,
      },
      {
        answer: "==",
        correct: false,
      },
      {
        answer: "===",
        correct: false,
      },
      {
        answer: "::",
        correct: false,
      },
    ],
  },
  {
    question: "Qual linguagem é conhecida como a base da web?",
    answers: [
      { answer: "Python", correct: false },
      { answer: "HTML", correct: true },
      { answer: "C++", correct: false },
      { answer: "Java", correct: false },
    ],
  },
  {
    question: "Qual protocolo é usado para navegação segura?",
    answers: [
      { answer: "HTTP", correct: false },
      { answer: "FTP", correct: false },
      { answer: "SMTP", correct: false },
      { answer: "HTTPS", correct: true },
    ],
  },
  {
    question: "O que significa a sigla SQL?",
    answers: [
      { answer: "Simple Query Language", correct: false },
      { answer: "Structured Query Language", correct: true },
      { answer: "Standard Query Language", correct: false },
      { answer: "System Query Language", correct: false },
    ],
  },
  {
    question: "O que é React?",
    answers: [
      { answer: "Uma biblioteca JavaScript", correct: true },
      { answer: "Um framework CSS", correct: false },
      { answer: "Um servidor web", correct: false },
      { answer: "Um banco de dados", correct: false },
    ],
  },
  {
    question: "Para que serve o comando 'git clone'?",
    answers: [
      { answer: "Enviar alterações para o repositório", correct: false },
      { answer: "Clonar um repositório", correct: true },
      { answer: "Criar um novo repositório", correct: false },
      { answer: "Atualizar o repositório local", correct: false },
    ],
  },
  {
    question: "Qual propriedade do CSS é usada para mudar a cor do texto?",
    answers: [
      { answer: "background-color", correct: false },
      { answer: "text-color", correct: false },
      { answer: "font-color", correct: false },
      { answer: "color", correct: true },
    ],
  },
  {
    question: "Qual é o resultado de 2 + '2' no JavaScript?",
    answers: [
      { answer: "4", correct: false },
      { answer: "'22'", correct: true },
      { answer: "NaN", correct: false },
      { answer: "undefined", correct: false },
    ],
  },
  {
    question: "O que significa HTML?",
    answers: [
      {
        answer: "HyperText Markup Language",
        correct: true,
      },
      {
        answer: "Hyper Transfer Markup Language",
        correct: false,
      },
      {
        answer: "Home Tool Markup Language",
        correct: false,
      },
      {
        answer: "HyperText Machine Language",
        correct: false,
      },
    ],
  },
  {
    question: "Qual comando do Git é usado para criar um novo branch?",
    answers: [
      {
        answer: "git checkout",
        correct: false,
      },
      {
        answer: "git branch",
        correct: true,
      },
      {
        answer: "git push",
        correct: false,
      },
      {
        answer: "git commit",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a função do método Array.map() em JavaScript?",
    answers: [
      {
        answer: "Transformar cada elemento de um array",
        correct: true,
      },
      {
        answer: "Filtrar elementos de um array",
        correct: false,
      },
      {
        answer: "Ordenar os elementos de um array",
        correct: false,
      },
      {
        answer: "Remover elementos duplicados de um array",
        correct: false,
      },
    ],
  },
  {
    question: "O que é o React?",
    answers: [
      {
        answer: "Uma biblioteca para construção de interfaces",
        correct: true,
      },
      {
        answer: "Um framework para estilização de sites",
        correct: false,
      },
      {
        answer: "Um banco de dados NoSQL",
        correct: false,
      },
      {
        answer: "Uma linguagem de programação",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o significado de API?",
    answers: [
      {
        answer: "Application Programming Interface",
        correct: true,
      },
      {
        answer: "Application Process Integration",
        correct: false,
      },
      {
        answer: "Application Program Instruction",
        correct: false,
      },
      {
        answer: "Application Programming Interaction",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o principal objetivo do TypeScript?",
    answers: [
      {
        answer: "Adicionar tipagem estática ao JavaScript",
        correct: true,
      },
      {
        answer: "Criar estilos dinâmicos",
        correct: false,
      },
      {
        answer: "Otimizar a performance do Node.js",
        correct: false,
      },
      {
        answer: "Compilar arquivos para Python",
        correct: false,
      },
    ],
  },
];

const init = () => {
  createQuestion(0);
};

const createQuestion = (i) => {
  // limpando a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  // alterando texto da pergunta
  const questionText = document.querySelector("#question-text");
  const questionNumber = document.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // insere as alternativas
  questions[i].answers.forEach(function (answer, i) {
    // cria o template do botão quizz
    const answerTemplate = document
      .querySelector(".answer-template")
      .cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // removendo hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // inserir a alternativa na tela

    answersBox.appendChild(answerTemplate);

    // inserir um evento de click no botão
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    });
  });

  // incrementando numero da questão
  actualQuestion++;
};

const checkAnswer = (btn) => {
  const buttons = answersBox.querySelectorAll("button");

  // verifica se a resposta esta correta e adiciona classes botoes
  buttons.forEach(function (button) {
    if (button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");

      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  nextQuestion();
};

const nextQuestion = () => {
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      //apresenta a msg de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 700);
};

const hideOrShowQuizz = () => {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
};

const showSuccessMessage = () => {
  hideOrShowQuizz();

  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // alterar o numero de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // altera o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
};

// botao de zerar
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", () => {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

//
init();
