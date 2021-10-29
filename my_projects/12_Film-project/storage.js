

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

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    films.forEach((film,index ) => {

        if(film.title === filmTitle){
            films.splice(index,1);
        }
        
    });

    localStorage.setItem("films",JSON.stringify(films));
}


Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");  // just delete key
}