const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilm = function (films) {
  return films.map((film) => film.title)
};

Cinema.prototype.findByTitle = function (title) {
  return result = this.films.filter((movie) => movie.title === title)
};

module.exports = Cinema;
