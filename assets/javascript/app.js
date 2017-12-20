//Check for correct answers
function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  if (question1 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

  if (question2 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

    if (question3 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

    if (question4 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

    if (question5 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

    if (question6 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

    if (question7 == "correct") {
    correct++;

  } else {
      incorrect++;

  }

if (question8 == "correct") {
   correct++;

}

  else {
      incorrect++;

  }



  document.getElementById("after-submit").style.visibility = "visible";
  document.getElementById("answers-correct").innerHTML = "Correct Answers: " + correct;
  document.getElementById("answers-incorrect").innerHTML = "Incorrect Answers: " + incorrect;
  stop();
//  document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;


}


//timer function 

var number = 90;


  var intervalId;

// Timer count down
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#running-time").html("<h2>" + number + "</h2>");



      if (number === 0) {


        stop();
        check();
        document.getElementById("after-submit").style.visibility = "visible";
        

      }
    }


    //  The stop function
    function stop() {


      clearInterval(intervalId);
    }


    run();