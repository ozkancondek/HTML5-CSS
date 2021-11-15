const side1 = document.querySelectorAll(".form-control")[0];
const side2 = document.querySelectorAll(".form-control")[1];
const side3 = document.querySelectorAll(".form-control")[2];
const div = document.getElementById("addhere");

const button = document.getElementById("btn");

button.addEventListener("click", func1);

function func1() {
  let [a, b, c] = [side1.value, side2.value, side3.value];
  let vars = [+a, +b, +c];

  if (side1.value == "" || side1.value == "" || side1.value == "") {
    div.innerHTML += `<div class="alert alert-danger" role="alert">
          Please enter all sides!
        </div>`;
  } else if (
    (vars[0] + vars[1] > vars[2]) &
    (vars[2] + vars[2] > vars[0]) &
    (vars[2] + vars[0] > vars[1])
  ) {
    if (vars.filter((x) => x == vars[0]).length == 3) {
      div.innerHTML += `<div class="alert alert-primary" role="alert">
                  This triangle is equilateral.
                    </div>`;
    } else if (
      vars.filter((x) => x == vars[0]).length == 2 ||
      vars.filter((x) => x == vars[1]).length == 2 ||
      vars.filter((x) => x == vars[2]).length == 2
    ) {
      div.innerHTML += `<div class="alert alert-primary" role="alert">
                    This triangle is isoscele.
                </div>`;
    } else if (
      (vars.filter((x) => x == vars[0]).length == 1) &
      (vars.filter((x) => x == vars[1]).length == 1) &
      (vars.filter((x) => x == vars[2]).length == 1)
    ) {
      div.innerHTML += `<div class="alert alert-primary" role="alert">
                     This triangle is scalene.
                      </div>`;
    }
  } else {
    div.innerHTML += `<div class="alert alert-danger" role="alert">
          This is not a triangle!
        </div>`;
  }
  console.log(5);
}
