const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilm = function (films) {
  return films.map((film) => film.title)
};

Cinema.prototype.findByTitle = function (title) {
  return result = this.films.filter((movie) => movie.title === title)
};

Cinema.prototype.findByGenre = function (genre) {
  return result = this.films.filter((movie) => movie.genre === genre)
};

Cinema.prototype.findByYear = function (year) {
  return result = this.films.filter((movie) => movie.year === year)
};

Cinema.prototype.checkByYear = function (year) {
  this.films.filter((movie) => )
}


Cinema.prototype.totalRunnings = function () {
  return result = this.films.reduce((a, b) => a + b, 0);
};

module.exports = Cinema;
