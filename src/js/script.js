"use strict";

// 1.

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 2.

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// 3.

let lastSeenFilm = prompt("Один из последних просмотренных фильмов?", "");
let lastSeenFilmOwnRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastSeenFilm] = lastSeenFilmOwnRating;

console.log(personalMovieDB);