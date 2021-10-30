



//get elements

const screen = document.getElementById("screen");
const buttonDiv = document.getElementById("icons");
const play = document.querySelectorAll(".fas")[1];
const flag = document.querySelectorAll(".fas")[2];
const redo = document.querySelectorAll(".fas")[3];

const tbody = document.getElementById("tbl").children[1]





 
    
    flag.addEventListener("click",func2);
      redo.addEventListener("click",func3);
 





    var xcv = setInterval(timer, 1000);
    
    var [a,a1,b,b1,c,c1] = [0,0,0,0,0,0];
    
     
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
        
       
        var arrScreen = [a, a1, ":", b, b1, ":", c, c1].join("");
        screen.innerHTML = arrScreen;
         
       
        
        
    }
     
 



 function func1(){
    xcv();
}

 

function func2(){

};

function func3(){
   clearInterval(xcv);
};





/*

let [a,a1,b,b1,c,c1] = [0,0,0,0,0,0];
function timer(){
        
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
       
    
       const arrScreen = [a, a1, ":", b, b1, ":", c, c1].join("");
       screen.innerHTML = arrScreen;
    }    
 



function func1(){
     
    setInterval( timer, 1000);
    
    
};

function func2(){

};


function func3(){
    clearInterval(timer);


};
 */