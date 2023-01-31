//model
const app = document.getElementById("app"); //henter div med id "app"

let firstNumber = 0;
let secondNumber = 0;
let pointsNumber = 0;
let popup = '';


//view
function updateView() {
    document.getElementById("app").innerHTML = /*html*/ `
    Points: <span style="color:#b58900;">${pointsNumber}</span>
    <br> <br>
    ${firstNumber}
    <input id="inputField" type="text" placeholder=" >  =  <"> 
    ${secondNumber}
    <br> <br>
    <button onclick="newNumber()">New</button>
    <button onclick="submit()">Submit</button>
    <button onclick="reset()">Reset</button>
    <br><br>
    <span style="color:#4c4c4c;">${popup}</span>
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
function newNumber(){
    firstNumber = Math.round(Math.random() * 10);
    secondNumber = Math.round(Math.random() * 10);
    updateView();
}

//submit knappen
function submit(){
    const playerInput = document.getElementById("inputField").value;
        if (playerInput !== ">" && playerInput !== "<" && playerInput !== "=") {
        popup = "<span style='color: #dc322f;'>Invalid input, only >, <, or = are allowed.</span>";
        updateView();
        return;
    }
        if (playerInput === "=" && firstNumber === secondNumber){
            pointsNumber.innerHTML = ++pointsNumber;
            popup = "Correct, you are awarded <span style='color: #529900;'>+1</span> points."
        } else if (playerInput === "<" && firstNumber < secondNumber){
            pointsNumber.innerHTML = ++pointsNumber;
            popup = "Correct, you are awarded <span style='color: #529900;'>+1</span> points."
        } else if (playerInput === ">" && firstNumber > secondNumber){
            pointsNumber.innerHTML = ++pointsNumber;
            popup = "Correct, you are awarded <span style='color: #529900;'>+1</span> points."
        } else {
            pointsNumber.innerHTML = --pointsNumber;
            popup = "Wrong, you are withdrawn <span style='color: #dc322f;'>-1</span> points."
        }
    newNumber();
    updateView();
}

//reset knappen
function reset(){
    firstNumber = 1;
    secondNumber = 10;
    pointsNumber = 0;
    popup = '';
    updateView();
}
