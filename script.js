//model
const app = document.getElementById("app");

let firstNum = 0;
let secondNum = 0;


//view
document.getElementById("app").innerHTML = `
<div>Poeng: 0</div>
<br>
<div id="firstNum">første tall</div>
<input type="text"></input>
<div id="secondNum">andre tall</div>
<br>
<button onclick="submit()">Submit</button>
<button onclick="reset()">Reset</button>
`;


//controller
function reset(){
    updateNumbers();
}

function updateNumbers(){
    firstNum = getRandomNumber();
    secondNum = getRandomNumber();
    document.getElementById("firstNum").innerHTML = firstNum;
    document.getElementById("secondNum").innerHTML = secondNum;
}

function getRandomNumber(){
    return Math.round(Math.random() * 10);
}