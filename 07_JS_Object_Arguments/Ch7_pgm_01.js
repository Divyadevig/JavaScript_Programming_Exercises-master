// Passing a function an object as an argument

var planet1;
var secondplanet;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};
secondplanet = {
    name: "Earth",
    position:3,
    type: "Terrestrial",
    radius:98745,
    sizeRank:2
}

getPlanetInfo = function (planet) {

    return planet.name + ": planet number " + planet.position + " radius :" + planet.radius + " type: " + planet.type; 
    

};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(secondplanet));


/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */