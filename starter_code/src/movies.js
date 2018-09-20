/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    return array.map(function (elem) {
        var hours = 0;
        var minutes = 0;
        if (elem.duration.indexOf('h') !== -1) {
            hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf('min') !== -1) {
            minutes = parseInt(elem.duration.substring(elem.duration.length -5, elem.duration.length -3), 10);
        
        }
        return Object.assign({}, elem, { duration: hours + minutes });
    });
} 

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
    var ratesSum = movies.reduce(function(acc, movie){
      return acc + parseFloat(movie.rate);
    }, 0);
      return ratesSum / movies.length.toFixed(2);
  };
  ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(array) {
    var dramaMoviesRate = array.filter(function (movie) {
        return movie.genre.find(function (singleGenre) {
            return singleGenre === 'Drama';
        });
    });

    if (!dramaMovies.length) {
        return undefined;
    }
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

function orderByDuration(array) {
    sorted = array.sort(function (a, b) {
        if (a.duration === b.duration) {
            if (a.title > b.title) {
                return 1;
            }
        }
        return a.duration - b.duration;
    });
    return sorted;
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
    if (movieArray == 0) {
        return undefined;
    }
    var nameFilter = movieArray.filter(function (movie) {
        return movie.director.includes('Steven Spielberg') && movie.genre.indexOf('Drama') !== -1;

    });
    return "Steven Spielberg directed " + String(nameFIlter.length) + "drama movies";
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {  
    var topTwenty = array.sort(function(a, b){
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        if(nameA < nameB) {
            return -1;
        }
        if(nameA < nameB){
            return 1;
        }
        return 0;
    });
        return topTwenty;
}

// Best yearly rate average