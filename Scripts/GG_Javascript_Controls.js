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

function FG_SetTimer(){
    if(Screen){
        Screen.Timer_Initialize_Timer(document.getElementById("FG_Countdown_StartingMinutes").value, document.getElementById("FG_Countdown_StartingSeconds").value, "Countdown_Text");
    }
}

function FG_Points_UpdateScore(Team){
    if(Screen){
        if (Team == "Team1"){
            Screen.FG_Points_UpdateScore('Team1', document.getElementById("FG_Points_Team_1").value);
            document.getElementById("FG_Points_Display_Team_1").innerHTML = document.getElementById("FG_Points_Team_1").value;
        } else {
            Screen.FG_Points_UpdateScore('Team2', document.getElementById("FG_Points_Team_2").value);
            document.getElementById("FG_Points_Display_Team_2").innerHTML = document.getElementById("FG_Points_Team_2").value;
        }
    }
}

function FG_Points_DeclareWinner(Team){
    if(Screen){
        if(Team == "Team1"){
            Screen.FG_Points_DeclareWinner('Team1');
        } else {
            Screen.FG_Points_DeclareWinner('Team2');
        }
    }
}

function HS_SetTimer(){
    if(Screen){
        Screen.Timer_Initialize_Timer(document.getElementById("HS_Countdown_StartingMinutes").value, document.getElementById("HS_Countdown_StartingSeconds").value, "Countdown_Text");
    }
}

var HS_Entries;
var HS_Entries_CharacterCount = 0;

function HS_Points_CountCharacters(Team){
    HS_Entries = [];
    HS_Entries_CharacterCount = 0;
    HS_Entries = document.getElementById("HS_WordList").value.split("\n");
    for (a = 0; a < HS_Entries.length; a++){
        HS_Entries_CharacterCount += HS_Entries[a].length;
    }
    if(Screen){
        if (Team == "Team1"){
            document.getElementById("HS_Points_Team_1").value = HS_Entries_CharacterCount;
            // Screen.HS_Points_UpdateScore("Team1", HS_Entries_CharacterCount);
        } else {
            document.getElementById("HS_Points_Team_2").value = HS_Entries_CharacterCount;
            // Screen.HS_Points_UpdateScore("Team2", HS_Entries_CharacterCount);
        }
    }
}

function HS_Points_UpdateScore(Team){
    if(Screen){
        if (Team == "Team1"){
            Screen.HS_Points_UpdateScore('Team1', document.getElementById("HS_Points_Team_1").value);
            document.getElementById("HS_Points_Display_Team_1").innerHTML = document.getElementById("HS_Points_Team_1").value;
        } else {
            Screen.HS_Points_UpdateScore('Team2', document.getElementById("HS_Points_Team_2").value);
            document.getElementById("HS_Points_Display_Team_2").innerHTML = document.getElementById("HS_Points_Team_2").value;
        }
    }
}

var QA_Question_Question = [];
var QA_Question_Choice_1 = [];
var QA_Question_Choice_2 = [];
var QA_Question_Choice_3 = [];
var QA_Question_Choice_4 = [];
var QA_Question_CorrectAnswer = [];

function QA_GetQuestions(){
    const request = new XMLHttpRequest();
    request.open("GET", "Assets/QnA.txt", false);
    request.send();
    var messages = request.responseText.split("\n");
    console.log(messages);
    BranchList_Data = messages;
    for (a = 6; a != messages.length; a++){
        console.log("Processing item " + a + "...");
        BranchList_Line_Data = messages[a].split("%&");
        QA_Question_Question[a] = BranchList_Line_Data[0];
        QA_Question_Choice_1[a] = BranchList_Line_Data[1];
        QA_Question_Choice_2[a] = BranchList_Line_Data[2];
        QA_Question_Choice_3[a] = BranchList_Line_Data[3];
        QA_Question_Choice_4[a] = BranchList_Line_Data[4];
        if (BranchList_Line_Data[5].includes("\r")){
            QA_Question_CorrectAnswer[a] = BranchList_Line_Data[5].replace("\r", "");
        } else {
            QA_Question_CorrectAnswer[a] = BranchList_Line_Data[5];
        }
        console.log("Done processing item " + a + ".");
    }
    QA_Question_FetchQuestion();
}

function QA_Question_Next(){
    QA_Question_CurrentQuestion += 1;
    if (QA_Question_CurrentQuestion > QA_Question_Question.length){
        QA_Question_CurrentQuestion = 0;
    } else if (QA_Question_CurrentQuestion < 6){
        QA_Question_CurrentQuestion = QA_Question_Question.length - 1;
    }
    QA_Question_FetchQuestion();
}

function QA_Question_Previous(){
    QA_Question_CurrentQuestion -= 1;
    if (QA_Question_CurrentQuestion > QA_Question_Question.length){
        QA_Question_CurrentQuestion = 0;
    } else if (QA_Question_CurrentQuestion < 6){
        QA_Question_CurrentQuestion = QA_Question_Question.length - 1;
    }
    QA_Question_FetchQuestion();
}

var QA_Question_CurrentQuestion = 6;
function QA_Question_FetchQuestion(){
    document.getElementById("QA_QuestionScreen_Question").innerHTML = QA_Question_Question[QA_Question_CurrentQuestion];
    document.getElementById("QA_QuestionScreen_Choices_Item_1").innerHTML = QA_Question_Choice_1[QA_Question_CurrentQuestion];
    document.getElementById("QA_QuestionScreen_Choices_Item_2").innerHTML = QA_Question_Choice_2[QA_Question_CurrentQuestion];
    document.getElementById("QA_QuestionScreen_Choices_Item_3").innerHTML = QA_Question_Choice_3[QA_Question_CurrentQuestion];
    document.getElementById("QA_QuestionScreen_Choices_Item_4").innerHTML = QA_Question_Choice_4[QA_Question_CurrentQuestion];
    document.getElementById("QA_QuestionScreen_Choices_CorrectAnswer").innerHTML = QA_Question_CorrectAnswer[QA_Question_CurrentQuestion];
}