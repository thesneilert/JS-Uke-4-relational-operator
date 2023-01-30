//model
const app = document.getElementById("app"); //henter div med id "app"

let firstNumber = 0;
let secondNumber = 0;
let pointsNumber = 0;


//view
function updateView() {
    document.getElementById("app").innerHTML = /*html*/ `
    Points: <span style="color:#b58900;">${pointsNumber}</span>
    <br> <br>
    ${firstNumber}
    <input type="text" placeholder=" >  =  <"> 
    ${secondNumber}
    <br> <br>
    <button onclick="btnNew()">New</button>
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

//random nummere funksjon
function btnNew(){
    firstNumber = Math.round(Math.random() * 10);
    secondNumber = Math.round(Math.random() * 10);
    updateView();
}

//submit knappen
function btnSubmit(){
    showPointsNumber();
}
function showPointsNumber(){
    pointsNumber = pointsNumber + 1; 
    updateView();
}

//reset knappen
function btnReset(){
    firstNumber = 1;
    secondNumber = 10;
    pointsNumber = 0;
    updateView();
}
