'use strict';

let numberOfFilms = prompt('Сколько фильмов  вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let answerOne = prompt('Один из последних просмотренных фильмов?', '');
let answerTwo = prompt('На сколько оцените его?', '');
personalMovieDB.movies[answerOne] = `${answerTwo}`;
console.log(personalMovieDB);
