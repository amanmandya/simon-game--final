var level=0;
var clickcount=-1;
var started=true;
var ans=[];
var userColor=[];
const arr=["green","red","yellow","blue"];
$(".btn").click(function() {

    
    var userChosenColour = $(this).attr("id");
    userColor.push(userChosenColour);
  
    console.log(userColor);
    animatePress(userChosenColour);
    setTimeout(function() {
        $("#"+userChosenColour).removeClass("pressed");
      }, 100);
    playSound(userChosenColour);
    clickcount++;
    checkAnswer(clickcount);
    
  
  });
  function checkAnswer(x){
    if(ans[x]===userColor[x] && x===level-1) {
      userColor=[];
      clickcount=-1;
      
     setTimeout(function(){
      nextSquence();
     },1000);
    }
    else if(ans[x]!==userColor[x]){
      
      var tom2 = new Audio("sounds/wrong.mp3");
    tom2.play();
      $("body").addClass("game-over");
      setTimeout(function(){
       
        $("body").removeClass("game-over");
      },200);
      $("h1").text( "Game Over, Press Any Key to Restart "+level);
      startover();
    }
    
  }
  function startover(){
    started=true;
    ans=[];
    userColor=[];
    clickcount=-1;
    level=0;
  }
  function playSound(col){
    var tom1 = new Audio("sounds/"+col+".mp3");
    tom1.play();
  }
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
}
function nextSquence(){
    level++;
    $("h1").text("Level "+level);
    var x=Math.random();
x=Math.floor(4*x);
    ans.push(arr[x]);
    
    $("#"+arr[x]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   animatePress(arr[x]);
   setTimeout(function() {
    $("#"+arr[x]).removeClass("pressed");
  }, 100);
   playSound(arr[x]);


}

if(started===true){
    
document.addEventListener("keypress", function(event) {
  
if(started===true)
    nextSquence();
    started=false;
  });
 
}