document.getElementById("after-submit").hidden = true;
document.getElementById("try-btn").hidden = true;


function check() {
  var count = 0;
  var q1 = document.quiz.ques1.value;
  var q2 = document.quiz.ques2.value;
  var q3 = document.quiz.ques3.value;
  var q4 = document.quiz.ques4.value;
  var q5 = document.quiz.ques5.value;


  console.log(document.quiz.ques1.value);
  if (q1 == "_") {
    count++;
  }
  if (q2 == "3") {
    count++;
  }
  if (q3 == "Only same data type") {
    count++;
  }
  if (q4 == "Compile time error") {
    count++;
  }
  if (q5 == "Right to Left") {
    count++;
  }

  var element1 = document.getElementById("a1");
  element1.classList.add("green");
  var element2 = document.getElementById("a2");
  element2.classList.add("green");
  var element3 = document.getElementById("a3");
  element3.classList.add("green");
  var element4 = document.getElementById("a4");
  element4.classList.add("green");
  var element5 = document.getElementById("a5");
  element5.classList.add("green");
if(count === 5){
  //alert("uytcuycutxs");
  document.getElementById("number-correct").innerHTML = "Your score = " + count+"   Conguratulations !";
  document.getElementById("after-submit").hidden = false;
  document.getElementById("try-btn").hidden = true;
}
else{
  document.getElementById("number-correct").innerHTML = "Your score = " + count+"   Keep It Up !";
  document.getElementById("after-submit").hidden = false;
  document.getElementById("try-btn").hidden = false;
}


}
