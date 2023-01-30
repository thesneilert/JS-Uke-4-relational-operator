//model
const app = document.getElementById("app"); //henter div med id "app"

let firstNumber;
let secondNumber;
let pointsNumber = 0;


//view
function updateView() {
    document.getElementById("app").innerHTML = `
    Points: <span style="color:#b58900;">${pointsNumber}</span>
    <br> <br>
    ${firstNumber}
    <input type="text" placeholder=" >  =  <"> 
    ${secondNumber}
    <br> <br>
    <button onclick="btnNewNumbers()">New</button>
    <button onclick="btnSubmit()">Submit</button>
    <button onclick="btnReset()">Reset</button>
    `; 
}


//controller
startGame(); //starter spill; i funksjonen er det updateView som starter html
function startGame(){
    firstNumber = 1;
    secondNumber = 10;
    updateView(); //denne gjør at innerhtml vises
}

function showPointsNumber(){
    app.innerHTML = pointsNumber;''
}

//random nummere funksjon
function btnNewNumbers(){
    firstNumber = Math.round(Math.random() * 10);
    secondNumber = Math.round(Math.random() * 10);
    updateView();
}

//submit knappen
function btnSubmit(){
    showPointsNumber();
}

//reset knappen
function btnReset(){
    firstNumber = 1;
    secondNumber = 10;
    pointsNumber = 0;
    updateView();
}

