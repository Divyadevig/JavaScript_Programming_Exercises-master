// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (color,model,seats,year){
    return{
        color : color,
        model : model,
        seats : seats,
        year : year
    };
};

getCarInfo = function (car){
    return car.model.toUpperCase() + " car colour is :" + car.color;
}
car1 = buildCar(" yellow " , "Suzuki ", 4 , 2003);
car2 = buildCar(" Pink ", "PMW ", 6 , 2000);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */