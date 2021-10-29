

// choose the form element

const form = document.getElementById("film-form");

//get input areas

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


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