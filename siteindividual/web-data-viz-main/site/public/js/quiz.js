const quizData = [
    {
      question: 'Qual desses exercicios treina costas',
      options: ['supino com halter', 'stiff', 'pull down', 'agachamento'],
      answer: 2
    },
    {
      question: 'Para que serve a creatina?',
      options: ['fonte de produção de energia para as células musculares', 'Melhorar a circulação sanguinea', ' Previne o aparecimento precoce de celulite', 'Traz jovialidade à pele e define o contorno do rosto'],
      answer: 0
    },
    {
      question: 'Qual desses exercicios treina peito?',
      options: ['Remada', 'pull down', 'Rosca martelo', ' Crucifixo no voador'],
      answer: 3
    },
    {
      question: 'Para que serve a whey Protein?',
      options: [' melhora a elasticidade dos musculos', 'aumento da força e da massa muscular', ' Ajuda a previnir doenças', 'Traz jovialidade à pele e define o contorno do rosto'],
      answer: 1
    },
    {
      question: 'qual desses exercicios treina Perna?',
      options: ['Desenvolvimento militar', 'Puxador', ' Elevação Frontal', 'Afundo'],
      answer: 3
    }, 
    {
      question: 'qual desses exercicios treina Ombro?',
      options: ['stiff', 'Elevação frontal', ' Extensora', 'PuxadoCrossOver'],
      answer: 1
    },
    {
      question: 'qual desses exercicios treina biceps?',
      options: ['supino inclinado', 'Rosca martelo', ' Elevação lateral', 'remada curvada'],
      answer: 1
    }
    
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  
  var currentQuestion = 0;
  var score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
  
    for (var contador = 0; contador < currentQuizData.options.length; contador++) {
      const option = document.createElement('li');
      option.innerText = currentQuizData.options[contador];
      option.dataset.index = contador;
      option.addEventListener('click', selectOption);
      optionsElement.appendChild(option);
    }
  }
  
  function selectOption(event) {
    const selectedOption = event.target;
    const selectedAnswer = selectedOption.dataset.index;
    
    if (selectedAnswer == quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionElement.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
    optionsElement.innerHTML = '';
    submitButton.disabled = true;
  }
  
  loadQuestion();