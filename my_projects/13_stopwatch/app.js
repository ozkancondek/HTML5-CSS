



//get elements

const screen = document.getElementById("screen");
const tbody = document.getElementById("tbl").children[1]
const table = document.getElementById("table");
const mls = document.getElementById("tbody");
 

 



//interval and event functions
let interval;
let z = 0;

function startFunc(){
      interval = setInterval(timer, 1000);
}


function stopFunc(){
    clearInterval(interval);
    [a, a1, b, b1, c, c1] = [0, 0, 0, 0, 0, 0];
}

function flagFunc(){
    z++;
    tbody.innerHTML += `

    <tr>
        <td>${z}</td>
        <td>${screen.innerText}</td>
    </tr>
    `;
    if( mls.children.length> 6){
        table.style.overflow = "scroll";
    }

}


//timer function

let [a, a1, b, b1, c, c1] = [0, 0, 0, 0, 0, 0];

function timer() {

    c1++;
    if (c1 > 9) {
        c++;
        c1 = 0;
    }
    if (c > 5) {
        b1++;
        c = 0;
    }
    if (b1 > 9) {
        b++;
        b1 = 0;
    }
    if (b > 5) {
        a1++;
        b = 0;
    }
    if (a1 > 9) {
        a++;
        a1 = 0;
    }
   let arrScreen = [a, a1, ":", b, b1, ":", c, c1].join("");
    screen.innerHTML = arrScreen;
}


 







 