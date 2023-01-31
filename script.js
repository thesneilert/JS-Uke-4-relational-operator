// ----- MODEL -----

const app = document.getElementById("app"); //henter div med id "app"

let firstNumber = 0;
let secondNumber = 0;
let pointsNumber = 0;
let popup = '';


// ----- VIEW -----

function updateView() {
    document.getElementById("app").innerHTML = `
        Points: ${pointsNumber}
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
    pointsColorChange();
}


// ----- CONTROLLER -----

//setter farger på points ettersom negativ/positiv
//skriver også hele sidens html
function pointsColorChange(){
    if (pointsNumber == 0) {
        document.getElementById("app").innerHTML = `
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
      }else if (pointsNumber >= 0) {
        document.getElementById("app").innerHTML = `
          Points: <span style="color:#529900;">${pointsNumber}</span>
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
      } else {
        document.getElementById("app").innerHTML = `
          Points: <span style="color:#dc322f;">${pointsNumber}</span>
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
}

//starter spill; i funksjonen er det updateView som starter html
startGame();
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