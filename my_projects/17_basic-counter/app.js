

const screen = document.getElementById("screen");

const decrease = document.getElementsByClassName("btn")[0]

const reset = document.getElementsByClassName("btn")[1]

const increase = document.getElementsByClassName("btn")[2]

const red = document.getElementById("red")

const green = document.getElementById("half2")
 

let c = 0;



 function func1(){
     c--;
     color();
     percentage();
     screen.innerText = c;
 }

 function func3(){
    c++;
    color();
    percentage();
    screen.innerText = c;
    
}

function func2(){
     c = 0;
     color();
     percentage();
    screen.innerText = 0;
     
}

function color(){
    c > 0 ?  screen.style.color = "green" 
    : c==0 ? screen.style.color = "black" 
    : screen.style.color = "red"
}

function percentage(){
    if (c > 0){
        green.style.width = `${c}%`
         
    }
    else if(c<0){

        red.style.width = `${-c}%`
    }else{
        green.style.width = `${0}%`
        red.style.width = `${0}%`
    }
}



 