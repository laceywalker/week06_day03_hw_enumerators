const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const startingLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startingLocations;
};


// Cinema.prototype.listOfFilmTitles = function (films) {
//   const filmTitles = films.map((film) => {
//     return film.title;
//   });
//   return filmTitles;
// };


// Traveller.prototype.getJourneyEndLocations = function () {
//
// };
//
// Traveller.prototype.getJourneysByTransport = function (transport) {
//
// };
//
// Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
//
// };
//
// Traveller.prototype.calculateTotalDistanceTravelled = function () {
//
// };
//
// Traveller.prototype.getUniqueModesOfTransport = function () {
//
// };


module.exports = Traveller;
