const Cinema = function (films) {
  this.films = films;
};

// should be able to get a list of film titles
Cinema.prototype.filmTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  })
  return result;
};


// should be able to find a film by title
Cinema.prototype.findFilm = function (searchFilmTitle) {
  const result = this.films.find((film) => {
    return film.title === searchFilmTitle;
  })
  return result;
};

// should be able to filter films by genre
Cinema.prototype.findGenre = function (searchGenre) {
  const result = this.films.filter((film) => {
    return film.genre === searchGenre;
  })
  return result;
};

// should be able to check whether there are some films from a particular year (true/false)
Cinema.prototype.yearHasFilms = function (searchYear) {
  const result = this.films.some((film) => {
    return film.year === searchYear
  })
  return result;
};

// should be able to check whether all films are over a particular length (true/false)
Cinema.prototype.filmsLongerThan = function (searchDuration) {
  const result = this.films.every((film) => {
    return film.length > searchDuration;
  })
  return result;
};

// should be able to calculate total running time of all films
Cinema.prototype.filmsTotalDuration = function () {
  const result = this.films.reduce((sum, film) => {
    return sum += film.length;
  }, 0)
  return result;
};

module.exports = Cinema;
