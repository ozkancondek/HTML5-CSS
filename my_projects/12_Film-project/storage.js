

function Storage(){

};

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm); // we are adding an object to array not a string like previous project


    localStorage.setItem("films",JSON.stringify(films));


}


Storage.prototype.getFilmsFromStorage = function() {

    let films ;

    //check if it exist in local storage

    if(localStorage.getItem("films") === null){

       films = [];
    }
    else{

       films = JSON.parse(localStorage.getItem("films")) // get them as an array
    }
    return films;
}