'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов  вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов  вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const answerOne = prompt('Один из последних просмотренных фильмов?', '').trim();
            const answerTwo = prompt('На сколько оцените его?', '');

            if (answerOne != '' && answerTwo != '' && answerOne != null && answerTwo != null && answerOne.length < 50) {
                personalMovieDB.movies[answerOne] = answerTwo;
            } else {
                i--;
                console.log('as');

            }
        }
    },
    detect: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классическтй зритель');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let yourGenres = prompt(`Ваш любимый жанр под номером ${i}`, ``);
            if (yourGenres !== '' && yourGenres !== null) {
                personalMovieDB.genres[i - 1] = yourGenres;
            } else {
                i--;
            }

        }
        personalMovieDB.genres.forEach(function (item, index) {
            console.log(`Ваш любимый ${item} под номером ${index + 1}`);
        })
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
            console.log('True');
        } else {
            personalMovieDB.privat = true;
            console.log('False');
        }
        console.log(personalMovieDB);
    }
}
personalMovieDB.toogleVisibleMyDB();
personalMovieDB.writeYourGenres();