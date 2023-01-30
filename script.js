//model
const app = document.getElementById("app"); //henter div med id "app"

let firstNumber;
let secondNumber;
let pointsNumber;


//view
function updateView() {
    document.getElementById("app").innerHTML = `
    Points: ${pointsNumber}
    <br> <br>
    ${firstNumber}
    <input type="text"> 
    ${secondNumber}
    <br> <br>
    <button onclick="btnNewNumbers()">New</button>
    <button onclick="btnSubmit()">Submit</button>
    <button onclick="btnReset()">Reset</button>
    `; 
}


//controller
startGame(); //starter spill, i funksjonen er det updateView som starter html
function startGame(){
    firstNumber = 1;
    secondNumber = 10;
    updateView(); //denne gjør at innerhtml vises
}

//random nummere funksjon
function btnNewNumbers(){
    firstNumber = Math.ceil(Math.random() * 10);
    secondNumber = Math.ceil(Math.random() * 10);
    updateView();
}

//submit knappen
function btnSubmit(){

}

//reset knappen
function btnReset(){

}

