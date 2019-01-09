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

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const typesOfJourneys = this.journeys.filter((journey, index, array) => {
//     const foundJourney = array.find(route => route.transport === journey.transport)
//     console.log(foundJourney)
//     if (!foundJourney) {
//       return journey;
//   };
// });
//   return typesOfJourneys;
// };



module.exports = Traveller;
