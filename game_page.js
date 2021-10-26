var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
var question_turn=player1_name;
var answer_turn=player2_name;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
function ask_question(){
    word=document.getElementById("word").value;
    lowercase_word=word.toLowerCase();
    char1=lowercase_word.charAt(1);
    mid=Math.floor(lowercase_word.length/2);
    char2=lowercase_word.charAt(mid);
    char3=lowercase_word.charAt(lowercase_word.length-1);
    remove1=lowercase_word.replace(char1, "_");
    remove2=remove1.replace(char2, "_");
    final_word=remove2.replace(char3, "_");
    question_word="<h4 id='word_display'>Q. "+final_word+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check(){
    answer=document.getElementById("input_check_box").value;
    lowercase_answer=answer.toLowerCase();
    if (lowercase_word==lowercase_answer){
        if (answer_turn==player1_name){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else if (answer_turn==player2_name){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (question_turn==player1_name){
        question_turn=player2_name;
        answer_turn=player1_name;
        document.getElementById("player_question").innerHTML="Question Turn - "+question_turn;
        document.getElementById("player_answer").innerHTML="Answer Turn - "+answer_turn;
    }
    else if (question_turn==player2_name){
        question_turn=player1_name;
        answer_turn=player2_name;
        document.getElementById("player_question").innerHTML="Question Turn - "+question_turn;
        document.getElementById("player_answer").innerHTML="Answer Turn - "+answer_turn;
    }
    document.getElementById("output").innerHTML="";
}

