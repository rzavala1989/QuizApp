  const questionSet = [
    {
      question: "My name is Ricardo. What is my gender?",
      option1: "male",
      option2: "female",
      option3: "other",
      answer: "male"
    },
    {
      question:"This architecture style relies on bold designs, clear lines, and vibrant colours",
      option1:"brutalism",
      option2:"art deco",
      option3:"spanish colonial",
      answer:"art deco"
    },
    {
      question: "What is considered the first skyscraper that wasn't a cathedral?",
      option1: 'New York World Building',
      option2: 'Philadelphia City Hall',
      option3: 'Ditherington Flax Mill',
      answer: "Ditherington Flax Mill"
    },
    {
      question: "What was the first 'supertall' skyscraper? (+1000 feet)",
      option1: 'Empire State Building',
      option2: 'Chrysler Building',
      option3: 'Washington Monument',
      answer: 'Chrysler Building'
    },
    {
      question: "Frank Lloyd Wright designed a mile-high skyscraper (literally) intended to be build in which city?",
      option1: "Chicago",
      option2: "New York City",
      option3: "Philadelphia",
      answer: "Chicago"
    }
  ];
 

let quizQuestion, status, question, choice, choices, choiceA, choiceB, choiceC, pos, correctAnswer;
let quizForm = function(){
      quizQuestion.innerHTML += "<h3>"+ question + "</h3> <br>";
      quizQuestion.innerHTML += `<input role='radio' type='radio' name='choices' value='${chA}' tabindex='0' required><label for='choices'>`+chA+"</label><br>";
      quizQuestion.innerHTML += `<input role='radio' type='radio' name='choices' value='${chB}' tabindex='0' required><label for='choices'>`+chB+"</label><br>";
      quizQuestion.innerHTML += `<input role='radio' type='radio' name='choices' value='${chC}' tabindex='0' required><label for='choices'>`+chC+"</label><br><br>";
    }

$('.start-quiz').on("click",function(event){
      event.preventDefault();
      startQuiz();
  });


function startQuiz(){
    alert("GOOD LUCK");
      pos = 0;
      correctAnswer = 0;
      $('.start-quiz').addClass("hidden");
      $('.field-set').removeClass("hidden");
      $(".quiz-init").text("");
      loadQuestion()
      $('.test-status').html('<p><span class="correct">' + correctAnswer + '</span> correct answers out of <span class="total"> <br>' + pos +'</span> questions</p>');

}


function get(x){
  return document.querySelector(x);
}

function loadQuestion() {

  quizQuestion = get('.quiz-question')
  testStatus = get('.test-status');
  $('.test-status').html('<p><span class="correct">' + correctAnswer + '</span> correct answers out of <span class="total"> <br>' + pos +'</span> questions</p>');
  $('.next-question').addClass("hidden");
  $('.alert').text("");
  if (pos >= questionSet.length){
    quizQuestion.innerHTML = "<h2>You got " + correctAnswer + " of " + questionSet.length + " questions correct! Thank you for your participation! </h2>";
    $(".test-status").html("<button class='buttons' onclick='startQuiz()'>Start Over?</button>");
    $('.next-question').addClass("hidden");
    pos = 0;
    correct = 0;
    return false;
  } else{
    quizQuestion.innerHTML = "<legend>Question "+(pos + 1) + " of " + questionSet.length + "</legend>";
    question = questionSet[pos]["question"];
    chA = questionSet[pos]["option1"];
    chB = questionSet[pos]["option2"];
    chC = questionSet[pos]["option3"];
    quizForm();
    quizQuestion.innerHTML += "<input type='submit' tabindex='0' value='Submit Answer' class='submit-answer buttons' onclick='checkAnswer()'>";
    
  }
}
function checkAnswer() {
  choices = document.getElementsByName("choices");
  let isOptionSelected = false;
  
    for (var i = 0; i < choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
      rightOrWrong();
      isOptionSelected = true
    }
  } 
 }
function rightOrWrong(){
  if (choice.trim() == questionSet[pos]["answer"]){
    $('.test-status').html("Correct!");
    correctAnswer++;
  } else{
    $('.test-status').html("Incorrect. The correct answer is " + questionSet[pos]["answer"]);
  }
  
 pos++;
  if (pos == questionSet.length){
    $('.next-question').html("<button role='button' class='buttons' tabindex='0' onclick='loadQuestion()'><span class='words-in-button'>See Results </span></button></form>");
    $('.submit-answer').addClass("hidden");
    $('.next-question').removeClass("hidden");

  } else{
    $('.next-question').html("<button role='button' class='buttons' tabindex='0' onclick='loadQuestion()'><span class='words-in-button'>Please Continue </span></button></form>");
    $('.alert').text("(Please see results window)");
    $('.submit-answer').addClass("hidden");
    $('.next-question').removeClass("hidden");
      
  }
}