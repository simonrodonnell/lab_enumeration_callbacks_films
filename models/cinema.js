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
// should be able to filter films by genre
// should be able to check whether there are some films from a particular year (true/false)
// should be able to check whether all films are over a particular length (true/false)
// should be able to calculate total running time of all films

module.exports = Cinema;
