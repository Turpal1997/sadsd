'use strict';

let numberOfFilms = prompt('Сколько фильмов  вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



console.log(personalMovieDB);
for (let i = 0; i < 2; i++) {
    let answerOne = prompt('Один из последних просмотренных фильмов?', '');
    let answerTwo = prompt('На сколько оцените его?', '');

    if (answerOne == '' && answerTwo == '' && answerOne === null && answerTwo === null & answerOne.length > 50) {
        i--;

    } else {
        personalMovieDB.movies[answerOne] = `${answerTwo}`;
    }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классическтй зритель');
} else {
    console.log('Error');
}
