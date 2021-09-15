// alert("HY");
// $(document).on("keydown",function(){


// });

var buttonColours=["red", "blue", "green", "yellow" ];
var gamePattern =[];
var userClickedPattern=[];
var start=false;
var level=0;

// $(document).keydown(function(){

// if(!start)
// {
//     $("#level-title").text("Level "+ level );
//     nextSeq();
//     start=true;
// }

// });

$(document).keydown(function() {
    console.log("pressed");
    if (start=== false) {
      $("#level-title").text("Level " + level);
      nextSeq();
      start = true;
    }
  });


$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length -1);
});

function checkAnswer(index)
{
    if(gamePattern[index] === userClickedPattern[index])
    {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function(){
                nextSeq();
            },1000);
        }
    }
    else{
        console.log("wrong");
        // var audio = new Audio("sounds/wrong.mp3");
        // audio.play();
        playSound("wrong");

        $("body").addClass("game-over");
        
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        // startOver();
        level=0;
        gamePattern = [];
        start= false;
        
        
    }

}

function nextSeq()
{
    userClickedPattern=[];
    level++;

    $("#level-title").text("Level " + level);

    var randm= Math.floor( Math.random()*4 );

    var choosenclr=buttonColours[randm];
    gamePattern.push(choosenclr);

    $("#" + choosenclr).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(choosenclr);
    
}


function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");}, 100);

}

// function startOver() {

//     //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//     level = 0;
//     gamePattern = [];
//     start= false;
//   }

// $("#green").on("click",nextSeq);
// $("#red").on("click",nextSeq);
// $("#yellow").on("click",nextSeq);
// $("#blue").on("click",nextSeq);



