'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов  вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов  вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const answerOne = prompt('Один из последних просмотренных фильмов?', '');
        const answerTwo = prompt('На сколько оцените его?', '');

        if (answerOne != '' && answerTwo != '' && answerOne != null && answerTwo != null && answerOne.length < 50) {
            personalMovieDB.movies[answerOne] = answerTwo;
        } else {
            i--;
            console.log('as');

        }
    }
}
rememberMyFilms();


function detect() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классическтй зритель');
    } else {
        console.log('Error');
    }

}
detect();
function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
function writeYourGenres() {
    let yourGenres;
    for (let i = 1; i <= 3; i++) {
        yourGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (yourGenres !== '' && yourGenres !== null) {
            personalMovieDB.genres[i - 1] = yourGenres;
        } else {
            i--;
        }

    }
    console.log(personalMovieDB.genres);
}
writeYourGenres();