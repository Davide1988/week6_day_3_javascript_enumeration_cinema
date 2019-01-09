const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilm = function (films) {
  return films.map((film) => film.title)
};

module.exports = Cinema;
