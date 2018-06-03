
let questionNum = 0;
let quizScore = 0;

function renderQuizScore(){
  //display the current score
  
  console.log(`renderQuizScore ran`);
  
  $('.js-Score').html(`<ul><li class="js-Score score"> Score: <span  "quizScore">${quizScore}</span></li></ul>`);
}

function renderQuestionNumber(){
  //display the current question number
  
  console.log(`renderQuestionNumber ran`);

  $('.js-questionNumber').html(`<ul><li class="js-questionNumber questionNumber"> Question: <span>${questionNum+1}</span> of 10</li></ul>`); 
}
    
function restartQuiz(){
  //start quiz from home page
  
  location.reload(); 
}  

function handleStartOver(){
  //listen for restart button
  
   $('.js-startOverButton').on('click', event => {
      event.preventDefault(),
      restartQuiz();
  } );       
}

function generateResultsImage(){
  //generate HTML around results Image
  
  if (quizScore >=8){
    $(".quizBody").html(`<img class="finalResultsImage" src="images/ALeeWizard.jpg" alt="Wizard">`);
  }
  else if (quizScore < 8 && quizScore >=5) {
     $(".quizBody").html(`<img class="finalResultsImage" src="images/BarlimanButterbur.jpg" alt="Barliman Butterbur">`);
  }
  else {
    $(".quizBody").html(`<img class="finalResultsImage" src="images/ALeePony.jpg" alt="Hobbits">`);
  }  
}

function generateResultsPage (){
  //generate HTML around results feedback
  
  console.log(`generateResultsPage ran`);
  
  if (quizScore >= 8){
    
    $(".quizBody").append(`
      <p class="highScore">  Congratulations!<br>You scored ${quizScore} out of 10.<br>You are a true Wizard: full of wisdom and knowledge!</p>
      <button class="js-startOverButton startOverButton">Start Over</button> `);
    
  }
  else if (quizScore < 8 && quizScore >=5) {
   
    $(".quizBody").append(`<p class="midScore">Good job!<br>You scored ${quizScore} out of 10.<br>You are a Breelander:  a bit slow, but you can see through a brick wall in time!</p>
      <button class="js-startOverButton startOverButton">Start Over</button> `);
    
  }
  else {
   
    $(".quizBody").append(`<p class="lowScore">Better luck next time!<br>You scored ${quizScore} out of 10.<br>You are a hobbit: more interested in smoke and ale than books! </p>
      <button class="js-startOverButton startOverButton">Start Over</button> `);
    
  }
}


function renderResultsPage() {
  //display results page
  
  $(".quizBody").html();
    generateResultsImage(),
    generateResultsPage(),
    handleStartOver();
  
  console.log(`renderResultsPage ran`);
  
}

function updateQuizScore(){
  //update the quiz score
  
  console.log(`updateQuizScore ran`);
  quizScore++; 
}

function updateQuestionNumber() {
  //this function will generate the question number
  
  console.log(`updateQuestionNumber ran`);
  questionNum ++;
}
  
function renderNextQuestion(){
  //display the next questionNumber
  
  console.log(`renderNextQuestion ran`);
    renderQuestion();
    handleAnswerSubmission();
} 
  
function handleNextQuestion(){  
  //listen for user to click next question button
  
  console.log(`handleNextQuestion ran`);
    
    $('.js-nextQuestionButton').on('click', event => {
      event.preventDefault();
      console.log(`hello`);
      updateQuestionNumber();
      
      if(questionNum <= 9){
        
        renderNextQuestion();
        renderQuestionNumber();
      }
        
      else {
        
        renderResultsPage();
        $('.questionScoreTracking').css('visibility', 'hidden'); 
      }
    });   
}

function generateAnswerCorrectFeedback(){
  //generate HTML around feedback for correct answer
  
    console.log(`generateAnswerCorrectFeedback ran`);

    $(".quizBody").append(`<p class="correctAnswer">You are Correct!</p>
    <button class="js-nextQuestionButton nextQuestionButton">Next Question</button>`);
}   
  

function generateAnswerIncorrectFeedback(){
  //generate HTML around feedback for incorrect answer

  console.log(`generateAnswerIncorrectFeedback ran`);
  
   $(".quizBody").append(`<p class="incorrectAnswer"> You are incorrect!  The correct answer is ${QUESTIONS[questionNum].correctAnswer}.</p>
   <button class="js-nextQuestionButton nextQuestionButton">Next Question</button>`);
  
  
}  

function generateQuote(){
  //generate HTML around quote
  
  console.log(`generateQuote ran`);

 $(".quizBody").html(`<div class="feedbackQuote"> <blockquote><p = "quote">${QUESTIONS[questionNum].feedbackQuote} </blockquote></p><br><p>${QUESTIONS[questionNum].quoteCitation}</p></div>`);
 }
  
  
  
function renderAnswerCorrectFeedback() {
  //display feedback and quote for correct answer
  
  console.log(`renderAnswerCorrectFeedback ran`);

    $(".quizBody").html();
    generateQuote(),
    generateAnswerCorrectFeedback(),
    handleNextQuestion();
}
  
function renderAnswerIncorrectFeedback(){
  //display feedback and quote for incorrect answer
  
  console.log(`renderAnswerIncorrectFeedback Ran`);
 
   $(".quizBody").html();
     generateQuote(),
     generateAnswerIncorrectFeedback(),
     handleNextQuestion(); 
}

function checkAnswer (){
  //check submitted answer against correct answer
  
  console.log(`checkAnswer Ran`);
  
  
  let answer=  $('input:checked').val();
  console.log(answer);
  
  let correctAnswer =  `${QUESTIONS[questionNum].correctAnswer}`;
  console.log(correctAnswer);
  
  if(answer === correctAnswer){
    renderAnswerCorrectFeedback();
    updateQuizScore();
    renderQuizScore();
    
  }
    else {
      renderQuizScore();
      renderAnswerIncorrectFeedback();
    }
}

function handleAnswerSubmission() {
  //listen for user to click submit button
  
    console.log(`handleAnswerSubmission ran`);
    $('.quizBody form').on('submit', event => {
      event.preventDefault();
      checkAnswer();
    }); 
}

function generateChoices(){
  //generate HTML looping through array store
  
  console.log(`generateChoices Ran`);
  $(".quizBody").append(
      `<form>
         <fieldset class="quizAnswerOptions">
            
            <label>
              <input  type="radio" name="option"  value = "${QUESTIONS[questionNum].options[0]}" required> <span>    ${QUESTIONS[questionNum].options[0]}</span>
            </label>
            
            <label>
              <input  type="radio" name="option"  value = "${QUESTIONS[questionNum].options[1]}" required> <span> ${QUESTIONS[questionNum].options[1]}</span>
            </label>
            
            <label>
              <input  type="radio" name="option"  value = "${QUESTIONS[questionNum].options[2]}" required> <span>    ${QUESTIONS[questionNum].options[2]}</span>
            </label>
            
            <label>
              <input type="radio" name="option"  value = "${QUESTIONS[questionNum].options[3]}" required> <span>    ${QUESTIONS[questionNum].options[3]}</span>
            </label>
            
          </fieldset>
              
               <button type="submit" class="js-submitAnswerButton submitAnswerButton">Submit</button>
         </form>`
          
  );
   
}

function generateQuestion(){
  //generate HTML around object store values in a template string 
  
  console.log(`generateQuestion Ran`);

  $(".quizBody").append(`<div class= "js-quizQuestion quizQuestion"><p>${QUESTIONS[questionNum].text}</p></div>`); 
}

function generateQuestionImage(){
  //generate html around the image

  console.log(`generateQuestionImage Ran`);

   $(".quizBody").html(`<img class="js-questionImage questionImage" src="${QUESTIONS[questionNum].questionImage}" alt="${QUESTIONS[questionNum].imageAlt}">`);
}

function renderQuestion(){
//Display first question

 console.log(`renderQuestion Ran`);

 $(".quizBody").html();
  generateQuestionImage();
  generateQuestion(),
  generateChoices()
}

function handleStartQuiz () {
  //listen for user click start button
  
  console.log(`handleStartQuiz Ran`);

  $('.js-startButton').on('click', event => {   $('.startPage').remove();
    renderQuestionNumber();
    renderQuizScore();
    renderQuestion();
    handleAnswerSubmission();
  });    
}
 
$(handleStartQuiz);
