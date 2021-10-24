const guess = function(num){

    let real = 17;
    if(real < num ){
       return  "Your guess is bigger!"
    }else if(real > num ){
       return  "Your guess is smaller!"

    }else{
        return "Congratulations!!!"
    } 

                                   
}

const button = document.getElementById("btn");

const input = document.getElementById("input");

const par = document.getElementById("par");

const par1 = document.getElementById("par");


button.onclick = function(){
     
    
    par.innerText = guess(input.value)
     


}