


const main = document.querySelector("#main");

const area1 = document.getElementsByClassName("header")[0];
const area2 = document.getElementsByClassName("header")[1];

const del = document.querySelector(".content2");
del.value = ""

let c = 0;
let counter = () => c++;

main.addEventListener("click", func)

function func(e) {

    let result;

    if (e.target.innerText == "AC") {
        area2.innerHTML = "";

    }
    else if (e.target.className == "fas fa-divide") {

        area1.innerHTML = area2.innerText;
        area2.innerHTML = "";
        op = 1;


    }
    else if (e.target.className == "fas fa-times") {
        area1.innerHTML = area2.innerText;
        area2.innerHTML = "";
        op = 2

    }
    else if (e.target.className == "fas fa-minus") {
        area1.innerHTML = area2.innerText;
        area2.innerHTML = "";
        op = 3
    }
    else if (e.target.className == "fas fa-plus") {
        area1.innerHTML = area2.innerText;
        area2.innerHTML = "";
        op = 4

    }
    else if (e.target.className == "content3" || e.target.className == "plusminus") {
        counter();
        if (c % 2 == 1) {

            area2.innerHTML = -1 * parseInt(area2.innerHTML)
        } else {
            area2.innerHTML = -1 * parseInt(area2.innerHTML)
        }




    }
    else if (e.target.className == "content4" || e.target.className == "arrow") {
        let val = [...area2.innerHTML];
        val.pop()
        area2.innerHTML = val.join("");

    }

    else if (e.target.className == "fas fa-equals") {


        if (op == 1) {
            result = parseFloat(area1.innerHTML) / parseFloat(area2.innerHTML)
            area1.innerHTML = result.toFixed(2);

        }
        else if (op == 2) {
            result = parseFloat(area1.innerText) * parseFloat(area2.innerText)
            area1.innerHTML = result.toFixed(2);

        }
        else if (op == 3) {
            result = parseFloat(area1.innerText) - parseFloat(area2.innerText)
            area1.innerHTML = result.toFixed(2);

        }
        else if (op == 4) {
            result = parseFloat(area1.innerText) + parseFloat(area2.innerText)
            area1.innerHTML = result.toFixed(2);

        }


        area2.innerHTML = "";
    }
    else if ((area2.innerHTML).toString().length > 7) {
         
        area2.innerHTML += "";

    }
    else if ((area1.innerHTML).toString().length > 7) {
         
        area1.innerHTML = "To long"

    }
    else {
        area2.innerHTML += e.target.innerHTML

    }


    e.stopPropagation();
}


del.addEventListener("click", func1);

function func1() {
    area1.innerText = "";
    area2.innerText = "";
}