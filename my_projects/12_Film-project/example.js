//define a class
function UI() {}

//add method

//method 1
UI.prototype.addStudentToUI = (newStudentObject) => {
  const tbody = document.getElementById("Students"); // where am i gonna add
  tbody.innerHTML += `<td><img src= ${newStudentObject.imageUrl} class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></td>
                            <td>${newStudentObject.studentName}</td>
                            <td>${newStudentObject.studentPath}</td>
                            <td><a href="#" id="delete-student" class="btn btn-danger">Delete Student</a></td>
                         </tr>`;
};
//call it main js
ui.addStudentToUI(studentObj);

//method 2
UI.prototype.clearInputs = (inputArray) => {
  inputArray.forEach((element) => {
    element.value = "";
  });
};

//call it in main.js
ui.clearInputs([_url, _name, _path]);

//method 3

UI.prototype.displayMessage = function (message, type) {
  //create a div element and it below to Add Film button as a child

  const cardBody = document.querySelector(".card-body");

  //alert div

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  cardBody.appendChild(div);

  //its not gonna be parmenent thats wyh i need to remove it

  setTimeout(function () {
    div.remove();
  }, 2000);
};

//method 4
UI.prototype.deleteFilmFromUI = function (element) {
  element.parentElement.parentElement.remove();
};

//method 5
UI.prototype.clearAllFilmsFromUI = function () {
  const filmList = document.getElementById("films");
  //filmList.innerHTML = ""; one of option
  //Delete all childs until its equal to null
  while (filmList.firstElementChild !== null) {
    filmList.firstElementChild.remove();
  }
};

//Call it in main.js
const ui = new UI();

//create an object
function Student(imageUrl, studentName, studentPath) {
  this.imageUrl = imageUrl;
  this.studentName = studentName;
  this.studentPath = studentPath;
}

const std = new Student("url", "Ryan", "Fullstack");
const std2 = new Student("url", "Daniel", "AWS");

//get values from inputs and create an object
const imageUrl = _url.value.trim();
const studentName = _name.value.trim();
const studentPath = _path.value.trim();
const studentObj = new Student(imageUrl, studentName, studentPath);

//load all event when page reloaded
window.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("click", addNewStudent);
  clearStudentsBtn.addEventListener("click", clearAllStudents);
});

/**********************************************************************************/

// Object Types (Blueprints) (Classes)
// The examples from the previous chapters are limited. They only create single objects.

// Sometimes we need a "blueprint" for creating many objects of the same "type".

// The way to create an "object type", is to use an object constructor function.

// In the example above, function Person() is an object constructor function.

// Objects of the same type are created by calling the constructor function with the new keyword:

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

//Adding a Property to a Constructor
Person.nationality = "English"; //undefined
//You cannot add a new property to an object constructor the same way you add a new property to an existing object:
//To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// The this Keyword
// In JavaScript, the thing called this is the object that "owns" the code.

// The value of this, when used in an object, is the object itself.

// In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

//Note that this is not a variable. It is a keyword. You cannot change the value of this.

//Adding a Property to an Object
myFather.nationality = "English";

//Adding a Method to an Object
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};
//The method will be added to myFather. Not to myMother. (Not to any other person objects).

// Using the prototype Property

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
//The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality = "English";

//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
