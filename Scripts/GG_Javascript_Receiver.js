var Slides = document.querySelectorAll(".GG_Slide");

function Slides_ResetToDefaultSlide(){
    // Slides = document.querySelectorAll(".GG_Slide");
    // for (a = 1; a < Slides.length; a++){
    //     var Animation_MainContainerChildElements = Slides[a].children;
    //     for (b = 0; b < Animation_MainContainerChildElements.length; b++){
    //         Animation_MainContainerChildElements[b].setAttribute("Animation_State", "Animation_State_Paused");
    //     }
    //     Slides[a].style.opacity = "0%";
    // }
    // Slides[0].style.opacity = "100%";
    // for (c = 0; c < Slides[0].length; c++){
    //     Slides[0][c].setAttribute("Animation_State", "Animation_State_Playing");
    // }
    Slides_SwitchToSlide("Default");
}

function Slides_SwitchToSlide_Depracated(Slide_Number){
    Slides = document.querySelectorAll(".GG_Slide");
    for (a = 0; a < Slides.length; a++){
        // var Animation_MainContainerChildElements = Slides[a].children;
        // for (b = 0; b < Animation_MainContainerChildElements.length; b++){
        //     Animation_MainContainerChildElements[b].setAttribute("Animation_State", "Animation_State_Paused");
        // }
        Slides[a].style.opacity = "0%";
    }
    Slides[Slide_Number].style.opacity = "100%";
    // for (c = 0; c < Slides[Slide_Number].length; c++){
    //     Slides[Slide_Number][c].setAttribute("Animation_State", "Animation_State_Playing");
    // }
}

function Slides_SwitchToSlide(Slide_Name){
    Slides = document.querySelectorAll(".GG_Screen_Slide");
    for (a = 0; a < Slides.length; a++){
        Slides[a].style.opacity = "0%";
    }
    AnimatedElements = document.querySelectorAll("[Animated='true']");
    for (a = 0; a < AnimatedElements.length; a++){
        AnimatedElements[a].style.animation = "none";
    }

    ActiveSlide = document.getElementById("GG_Screen").querySelectorAll("[Name='" + Slide_Name + "']")[0];
    ActiveSlide.style.opacity = "100%";
    // Slides[Slide_Number].style.opacity = "100%";
    AnimatedElements = ActiveSlide.querySelectorAll("[Animated='true']");
    for (a = 0; a < AnimatedElements.length; a++){
        AnimatedElements[a].style.animation = null;
    }
}

var Screen_ActiveSlide = 1;
var Animation_PlayState = "Playing";
function Animation_TogglePlayState(){
    var Animation_MainContainerChildElements = document.getElementById("GG_Slide_" + Screen_ActiveSlide).children;
    if (Animation_PlayState == "Playing"){
        for (a = 0; a < Animation_MainContainerChildElements.length; a++){
            Animation_MainContainerChildElements[a].setAttribute("Animation_State", "Animation_State_Paused");
        }
        Animation_PlayState = "Paused";
    } else if (Animation_PlayState == "Paused") {
        for (a = 0; a < Animation_MainContainerChildElements.length; a++){
            Animation_MainContainerChildElements[a].setAttribute("Animation_State", "Animation_State_Playing");
        }
        Animation_PlayState = "Playing";
    }
}

var Timer_Initializer_Minutes;
var Timer_Initializer_Seconds;
var Timer_Initializer_TargetTextID;

function Timer_Initialize_Timer(Starting_Minutes, Starting_Seconds, TargetTextID){
    Timer_Initializer_Minutes = Starting_Minutes;
    Timer_Initializer_Seconds = Starting_Seconds;
    Timer_Initializer_TargetTextID = TargetTextID;
    Timer_Current_Minutes = Timer_Initializer_Minutes;
    Timer_Current_Seconds = Timer_Initializer_Seconds;
    document.getElementById(Timer_Initializer_TargetTextID).innerHTML = Timer_Current_Minutes + " : " + Timer_Current_Seconds;
}

var Timer_Current_Minutes;
var Timer_Current_Seconds;
var Timer_Status;

function Timer_Start_Timer(){
    Timer_Status = 1;
    Timer_Update_Timer();
}

function Timer_Update_Timer(){
    Timer_Current_Seconds -= 1;
    if (Timer_Current_Seconds < 0){
        Timer_Current_Seconds = 59;
        Timer_Current_Minutes -= 1;
    }

    var Display_Timer_Current_Minutes;
    var Display_Timer_Current_Seconds;

    if (Timer_Current_Minutes < 10){
        Display_Timer_Current_Minutes = "0" + Timer_Current_Minutes;
    } else {
        Display_Timer_Current_Minutes = Timer_Current_Minutes;
    }
    if (Timer_Current_Seconds < 10){
        Display_Timer_Current_Seconds = "0" + Timer_Current_Seconds;
    } else {
        Display_Timer_Current_Seconds = Timer_Current_Seconds;
    }

    document.getElementById(Timer_Initializer_TargetTextID).innerHTML = Display_Timer_Current_Minutes + " : " + Display_Timer_Current_Seconds;
    
    if ((Timer_Current_Minutes > 0 || Timer_Current_Seconds > 0) && Timer_Status == 1){
        setTimeout(Timer_Update_Timer, 1000);
    }
}

function Timer_Stop_Timer(){
    Timer_Status = 0;
}