// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1,num2){
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
}
var showSmallest = function (num1,num2,num3){
    var smaller = Math.min(num1,num2,num3);

    console.log(" The smaller number is "+smaller )
}
showSmaller(80, 8);
showSmaller(-77, 0);
showLarger(90,10);
showLarger(-12,-80);
showSmallest(20,30,40);
showSmallest(60,-20,-10);

/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */