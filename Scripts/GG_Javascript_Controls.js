var Screen;
function Screen_OpenPopup(URL){
    Screen = window.open(URL, 'popUpWindow', 'width=1280, height=720, resizable=yes, scrollbars=no, toolbar=no, menubar=no, location=no, status=yes');
}

function Screen_ToggleAnimationState(){
    if(Screen){
        Screen.Animation_TogglePlayState();
    }
}

function Slides_SwitchToSlide(Input){
    if(Screen){
        Screen.Slides_SwitchToSlide(Input);
    }
}

function OpeningCeremony_SetTimer(){
    if(Screen){
        Screen.Timer_Initialize_Timer(document.getElementById("OpeningCeremony_Countdown_StartingMinutes").value, document.getElementById("OpeningCeremony_Countdown_StartingSeconds").value, "Countdown_Text");
    }
}
   
function Timer_Start_Timer(){
    if(Screen){
        Screen.Timer_Start_Timer();
    }
}

function Timer_Stop_Timer(){
    if(Screen){
        Screen.Timer_Stop_Timer();
    }
}