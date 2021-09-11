player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name"); 


player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn -" + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn -" + player2_name;

function send()
{ n1 = document.getElementById("SentN1").value;
 n2 = document.getElementById("SentN2").value; 
RealAnswer = parseInt(n1) * parseInt(n2);
questionWord = "<h4 id = 'word_display'>Math Question - If answer is a decimal round it off to the nearest whole number: " + n1 + "*" + n2 + "</h4>"; 
inputBox = "<br><br><input id = 'input_check_box' type = 'text' placeholder = 'Answer'></input>"; 
check_Button = "<br><button class = 'btn btn-info' onclick = 'Check()'>Check</button>"; 
row = questionWord+inputBox+check_Button; 
document.getElementById("output").innerHTML = row; 
}

question_turn="player1";
 answer_turn="player2";
 function Check(){
  get_answer = document.getElementById("input_check_box").value;
  if(get_answer == RealAnswer)
  {
  if(answer_turn == "player1")
  {
  player1_score=player1_score+1;
  document.getElementById("player1_score").innerHTML = player1_score;
  }
  else
  {
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML = player2_score; 
  }   
  }
  if(question_turn == "player1")
  {
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;   
  }
  else
  {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;       
  }
  if(answer_turn == "player1")
  {
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;   
  }
  else
  {
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;       
  }    
 }
