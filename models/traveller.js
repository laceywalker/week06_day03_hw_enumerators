const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const startingLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startingLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endingLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endingLocations;
};




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
