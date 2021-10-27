 


const main = document.querySelector("#main");

const area1 = document.getElementsByClassName("header")[0];
const area2 = document.getElementsByClassName("header")[1];

const del = document.querySelector(".content2");
del.value=""


main.addEventListener("click",func)

function func(e){
    if(e.target.innerText == "AC"){
        area2.innerHTML = "";

    }
   else if(e.target.className =="fas fa-divide"){
        area2.innerHTML += "/";

    }
    else if(e.target.className =="fas fa-times"){
        area2.innerHTML += "*";

    }
    else if(e.target.className =="fas fa-minus"){
        area2.innerHTML += "-";

    }
    else if(e.target.className =="fas fa-plus"){
        area2.innerHTML += "+";

    }
    else if(e.target.className =="content3"){
        area2.innerHTML += "-";

    }
    else if(e.target.className =="content content4"){
        let a = area2.innerText;
        a.replace(a[a.length-1],"")
        area2.innerText = a

    }
    else if(e.target.className =="fas fa-equals"){
        let result = area2.innerHTML;
        area1.innerText = result;
        area2.innerText = ""

    }else{
        area2.innerHTML += parseInt(e.target.innerText);
    }

    
    
}
 

del.addEventListener("click",func1);

function  func1(){
    area1.innerText ="";
    area2.innerText = "";
}