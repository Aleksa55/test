
let numberOfFilmes;

function start () {
    numberOfFilmes  = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilmes == '' || numberOfFilmes == null || isNaN(numberOfFilmes)) {
        numberOfFilmes  = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
   
function rememberMyFilmes() {
    for (let i=0; i<2; i++) {
        const a = prompt('Последний?', ''),
            b = prompt('Оценка?', '');
                if (a != null && b != null && a !='' && b !='' && a.length < 50){
                    personalMovieDB.movies[a] = b;
                    console.log('ok');
                } else {
                    console.log('error');
                    i--; // возврат на 1 итерацию назад (к вопросам)
                }
    }
}
//rememberMyFilmes();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов((');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}
//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();