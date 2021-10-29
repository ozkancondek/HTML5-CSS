

// choose the form element

const form = document.getElementById("film-form");

//get input areas

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const cardbody = document.querySelectorAll(".card-body")[1];

const clear = document.getElementById("clear-films");
// start UI object

const ui = new UI();

//create storage object;

const storage = new Storage();


// load all events
 
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    //get films from local storage wenn the page uploaded
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    })

    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);


}

function addFilm(e){
    //get input values
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;


    //check if all inputs have value

    if(title === "" || director === "" || url === ""){
        //error message
        ui.displayMessage("Missing Information!Please check them all...","danger");
    }
    else{
        const newFilm = new Film( title, director, url); // its an object

        ui.addFilmToUI(newFilm); // add film to ui

        storage.addFilmToStorage(newFilm); //add films to storage

        ui.displayMessage("Film added to UI","success")
    }


    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}


//delete film function

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        /*<td><img src="" class="img-fluid img-thumbnail"></td>
          <td></td>
          <td></td>                                  
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td> */      
          storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)                       
          ui.displayMessage("Film deleted","success")             
    }


}

//clear all films

function clearAllFilms(){

    if(confirm("Are you sure the delete all films from list?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();


    }

}
     