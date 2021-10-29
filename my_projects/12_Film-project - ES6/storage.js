

/* function Storage(){

}; */



class Storage {

    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();

        films.push(newFilm); // we are adding an object to array not a string like previous project


        localStorage.setItem("films", JSON.stringify(films));


    }


    static getFilmsFromStorage() {

        let films;

        //check if it exist in local storage

        if (localStorage.getItem("films") === null) {

            films = [];
        }
        else {

            films = JSON.parse(localStorage.getItem("films")) // get them as an array
        }
        return films;
    }

    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        films.forEach((film, index) => {

            if (film.title === filmTitle) {
                films.splice(index, 1);
            }

        });

        localStorage.setItem("films", JSON.stringify(films));
    }


    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");  // just delete key
    }


}

