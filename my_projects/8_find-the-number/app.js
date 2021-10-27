

const button = document.getElementById("button");
const first = document.getElementById("first");

const input = document.getElementById("input");

const third = document.getElementById("third");

const fourth = document.getElementById("fourth");
const img = document.getElementById("img");
const counter = document.getElementById("counter")
const description = document.getElementById("description")

//attempt counter function

let c = 0;

count = () => c++;


// enter a value 

button.onclick = function () {

     
    let value = input.value;
    let real = 17;
    count();

    if (real < value) {
        fourth.innerHTML = "Your guess is bigger!"
        third.innerHTML += value+"-"

    } else if (real > value) {
        fourth.innerHTML = "Your guess is smaller!"
        third.innerHTML += value + "-"


    } else {
        fourth.innerHTML = "⭐Congratulations⭐ <br>"
        fourth.innerHTML += `You made ${count()} attempts totaly.`
        third.innerHTML += value + "-"
         


    }
    input.value =""

}
     






//Start the game and show warning texts


 counter.addEventListener("click", func)
function func() {
     
    description.style.display = "none";
    let timer = setInterval(myTimer, 1000)
    let a = 11;
    function myTimer() {
        a--
        counter.innerHTML = a;
          if (a==0) {
            clearInterval(timer)

           counter.innerHTML = "Again";
            img.style.visibility =   "visible";
            setTimeout(() => {
                img.style.visibility =   "hidden";
            }, 2000);
            
            description.style.display ="block"
            fourth.innerHTML = "You failed"
            third.innerHTML =  ""
            

        }
        else if (third.innerText.includes("17") == true) {
            clearInterval(timer)
            counter.innerHTML = "Again";
            description.style.display ="block"
            fourth.innerHTML = "⭐Congratulations⭐ <br>"
            fourth.innerHTML += `You made ${count()-1} attempts totaly.`
            third.innerHTML =  ""
        }
        
    }

}