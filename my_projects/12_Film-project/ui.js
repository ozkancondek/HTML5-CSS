



function UI(){

}


UI.prototype.addFilmToUI = function(newFilm){
    /* <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> */

  const filmList = document.getElementById("films");
  filmList.innerHTML += `
        
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
        </tr>
        
  `;
}


// delete previous input value from input areas
 
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}


UI.prototype.displayMessage = function(message, type){
    //create a div element and it below to Add Film button as a child

    const cardBody = document.querySelector(".card-body");

    //alert div

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    //its not gonna be parmenent thats wyh i need to remove it

    setTimeout(function(){
        div.remove();

    },2000)






}


UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(film => {
        filmList.innerHTML += ` <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
    </tr>`;
    });
};


UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    //filmList.innerHTML = ""; one of option
    //Delete all childs until its equal to null
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();

    }

}