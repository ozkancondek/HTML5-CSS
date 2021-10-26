 
//Getting Elements


const addInput =document.getElementById("add-input");

const addButton =document.getElementById("add-button");

const alertDiv =document.getElementById("alert");

const searchTodo =document.getElementById("search-todo");

const searchButton =document.getElementById("search-button");

const listTodo = document.getElementById("list-todo")

const listGroup =document.getElementById("list-group");

const clearButton =document.getElementById("clear-button");


 



eventListeners();

function eventListeners(){ // defines all event listener functions
    addButton.addEventListener("click",addTodo);
    document.addEventListener("DOMContentLoaded", loadTodos);
    listTodo.addEventListener("click", deleteTodo);
    listTodo.addEventListener("click", completed);
    searchTodo.addEventListener("keyup",filterTodos);




};


function filterTodos(e){

    const filterValue = e.target.value.toLowerCase();
    const lis = document.querySelectorAll(".list-element");
    lis.forEach(items => {
        const text = items.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            items.setAttribute("style", "display:none")
        }
        else{
            items.setAttribute("style", "display: flex")
        }
    });
     
     
}


function completed(e){

    if (e.target.className === "far fa-check-circle"){
        e.target.parentElement.parentElement.style.textDecoration = "line-through"
            /////add code to click again
    }
}

function deleteTodo(e){

    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodosFromStorage(e.target.parentElement.parentElement.textContent);
    }
}

function deleteTodosFromStorage(a){
    let todos = getTodosFromStorage();
    todos.forEach(function(b,index){
        if(b === a){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadTodos(){
    let todos = getTodosFromStorage();
    todos.forEach(x => {
        addTodoToList(x);
        
    });
}

function addTodo(e){ 
    const newTodo = addInput.value.trim();

    if (newTodo ===""){
        showalert(1);
    }else{
        addTodoToList(newTodo); // add new todo to list function
        addTodoToStorage(newTodo);
        showalert(2);
    }
    
    


    e.preventDefault( );
}


function getTodosFromStorage(){ // get todos from storage
    let todos;
    if(localStorage.getItem("todos") === null){ // check if i have a list in local storage like  todos.
        todos = [];
    }
    else{
       todos = JSON.parse(localStorage.getItem("todos")); // return it to array
    }
    return todos;


}


function addTodoToStorage(newTodo){ // add todos to storage

    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));


}


function showalert(a){ // is todo added successfully?
    
    if (a == 1){
        alertDiv.style.backgroundColor ="#ff8f8f"
        alertDiv.innerText ="Please enter a todo..."
        setTimeout(function(){
            alertDiv.style.backgroundColor ="white"
            alertDiv.innerText =""
        },2000)

    }else{
        alertDiv.style.backgroundColor ="#64bcf7"
        alertDiv.innerText ="Todo added successfully..."
        setTimeout(function(){
            alertDiv.style.backgroundColor ="white"
            alertDiv.innerText =""
        },2000)

    }

}

function addTodoToList(newTodo){ // take string value and add as a list item to list
    //create li element
    const listItem = document.createElement("li");
    listItem.className ="list-element";
    listItem.style.listStyleType ="none";

    const linkMark = document.createElement("a"); //create a cancel icon in link
    linkMark.href = "#";
    linkMark.className = "delete-item"
    linkMark.innerHTML = "<i class = 'far fa-check-circle'></i>";

    const linkDelete = document.createElement("a"); //create a cancel icon in link
    linkDelete.href = "#";
    linkDelete.className = "delete-item"
    linkDelete.innerHTML = "<i class = 'fa fa-remove'></i>";

    //add items to list element
    listItem.appendChild(linkMark);
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(linkDelete);

    //add this li to ul

    listGroup.appendChild(listItem)

    addInput.value = ""
    



}