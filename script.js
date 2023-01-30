//model
const app = document.getElementById("app");

let numFirst = 0;
let numSecond = 0;
let numPoint = 0;


//view
function updateView() {
}

document.getElementById("app").innerHTML = `
Poeng: ${numPoint}
<br> <br>
${numFirst}
<input type="text" oninput="guess = parseInt(this.value)"/> 
${numSecond}
<br> <br>
<button onlick="btnNew">Nytt tall</button>
<button onclick="btnSubmit()">Bekreft</button>
<button onclick="btnReset()">Restart</button>
`;

//controller
