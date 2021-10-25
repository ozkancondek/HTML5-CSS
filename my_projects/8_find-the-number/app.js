 

const button = document.getElementById("button");

const input = document.getElementById("input");

const third = document.getElementById("third");

const fourth = document.getElementById("fourth");



 
button.onclick = function(){
     let value = input.value;
     let real = 17;
     while(c<5){
        if(real < num ){
            fourth.innerHTML = "Your guess is bigger!"
            third.innerHTML += value
         }else if(real > num ){
            fourth.innerHTML = "Your guess is smaller!"
            third.innerHTML += value
     
         }else{
            fourth.innerHTML = "⭐Congratulations⭐"
            fourth.innerHTML = `You made ${c} attempts totaly.`

            break
         } 




         c++;
     }
    
    fourth.innerText = guess(input.value)
     


}