//model
const app = document.getElementById("app");

let firstNumber = 0;
let secondNumber = 0;
let pointsNumber = 0;


//view
updateView();
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
function btnNewNumbers(){
    firstNumber = Math.ceil(Math.random() * 10);
    secondNumber = Math.ceil(Math.random() * 10);
    updateView();
}

