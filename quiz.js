const questions = [
    {
        question: "The world famous Ajanta caves are situated in?",
        answers: [
            { text: "Orissa", correct: false },
            { text: "Maharashtra", correct: true },
            { text: "Andhra Pradesh", correct: false },
            { text: "Kerala", correct: false }
        ]
    },
    {
        question: "Who was the first Indian to win an individual medal in Olympics?",
        answers: [
            { text: "Milkha Singh", correct: false },
            { text: "P.T.Usha", correct: false },
            { text: "Karnam Malleshwari", correct: false },
            { text: "K.D.Jadhav", correct: true }
        ]
    },
    {
        question: "Which is the smallest country  in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false }
        ]
    },
    {
        question: "Which city is known as 'Electronic City of India'?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Bangalore", correct: true },
            { text: "Guragon", correct: false },
            { text: "Hyderabad", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start_btn");
const start_div = document.getElementById("start");
const display_quiz = document.getElementById("quiz");


// const div_all = document.createElement("div");
// div_all.classList.add("hide");

//after clicking on start
const begin = startButton.addEventListener("click",()=>{
 start_div.classList.add('hide');
 display_quiz.style.display='block'

});

//timer after start

const timestop = startButton.addEventListener("click",()=>{
    
        var timeLeft = 30;
        var elem = document.getElementById('time');
        
        var timerId = setInterval(countdown, 1000);
        
        function countdown() {
          if (timeLeft <0 || currentQuestionsIndex == questions.length ) 
            {
             clearTimeout(timerId);
            // timeover();
          }

          if (timeLeft <0 ) 
            {  
            // clearTimeout(timerId);
           timeover();
        
           };
           
           
         

         if(currentQuestionsIndex == questions.length)
        {
            function timestop(){
                 timestop.createElement('div');
                 timestop.classList.add('hide');
                  }
         }

           else {
            elem.innerHTML = 'Time Left '+ timeLeft +'s';
            timeLeft--;
          }
        }
    
        function timeover(){
            const time = alert("TIME OVER!Please try again later.");
            time.addEventListener("click",tryagain);
            
            }
        
        
        });

//     function timestop(){
//   timestop.createElement('div');
//   timestop.classList.remove('hide');
//     }
let currentQuestionsIndex = 0;
let score = 0;

function startQuiz()  {
    // let quiz_start = document.createElement("div")
    // quiz_start.classList.remove('hide')
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
   
}


 startQuiz(); 

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); 
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

    
function resetState() {
    
    nextButton.style.display = 'none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();  
    function timestop(){
        timestop.createElement('div');
        timestop.classList.add('hide');
          }
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = "block";
   


nextButton.addEventListener("click",()=>{

       
        var timeLeft = 30;
        var elem = document.getElementById('time');
        
        var timerId = setInterval(countdown, 1000);
        
        function countdown() {
          if (timeLeft == -1) {
            clearTimeout(timerId);
            timeover();
          } else {
            elem.innerHTML = 'Time Left '+ timeLeft +'s';
            timeLeft--;
          }
        }
    
        function timeover(){
            const time = alert("TIME OVER!Please try again later.")
            time.addEventListener("click",tryagain)
            }
        
    });
}


function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
        
    }
});


// //timer after start
// startButton.addEventListener("click",()=>{


    
// var timeLeft = 15;
//     var elem = document.getElementById('time');
    
//     var timerId = setInterval(countdown, 1000);
    
//     function countdown() {
//       if (timeLeft == -1) {
//         clearTimeout(timerId);
//         timeover();
//       } else {
//         elem.innerHTML = 'Time Left '+ timeLeft +'s';
//         timeLeft--;
//       }
//     }

//     function timeover(){
//         const time = alert("TIME OVER!Please try again later.")
//         time.addEventListener("click",tryagain)
//         }
    
// });
