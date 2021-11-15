




const button = document.getElementById("btn");

const addHere = document.getElementById("addhere");


class Triangle {
    constructor() {
        this.side1 = document.querySelectorAll(".form-control")[0].value
        this.side2 = document.querySelectorAll(".form-control")[1].innerText;
        this.side3 = document.querySelectorAll(".form-control")[2].value;
        this.div = document.getElementById("addhere");


    }
    check() {
        return this.side1
        // if ((this.side1 + this.side2 > this.side3)
        //     & (this.side1 + this.side3 > this.side2)
        //     & (this.side2 + this.side3 > this.side1)) {

        //     if (this.side1 == this.side2 & this.side1 == this.side3 & this.side2 == this.side3) {
        //         addHere.innerHTML += `<div class="alert alert-primary" role="alert">
        //              This triangle is equilateral.
        //             </div>`
        //     }
        //     else if ((this.side1 == this.side2 & this.side1 != this.side3)
        //         || (this.side1 == this.side3 & this.side1 != this.side2)
        //         || (this.side2 == this.side1 & this.side2 != this.side3)
        //         || (this.side2 == this.side3 & this.side2 != this.side1)
        //         || (this.side3 == this.side1 & this.side3 != this.side2)
        //         || (this.side3 == this.side2 & this.side3 != this.side1)) {
        //         addHere.innerHTML += `<div class="alert alert-primary" role="alert">
        //              This triangle is isoscele.
        //             </div>`
        //     }
        //     else {
        //         addHere.innerHTML += `<div class="alert alert-primary" role="alert">
        //              This triangle is scalene.
        //             </div>`

        //     }

        // }
        //         else {
        //             addHere.innerHTML += `<div class="alert alert-danger" role="alert">
        //   This is not a triangle!
        // </div>`
        //         }


    }


}
const result = new Triangle();






button.addEventListener("click", function () {
    console.log(result.side1);
});

