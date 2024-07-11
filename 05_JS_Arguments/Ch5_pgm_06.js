// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

showProduct = function(num1,num2){
	var total = num1 * num2;
	console.log("The product is" +total);
};

showProduct(10,20);
showProduct(20,1);
showProduct(1.3,5);

showDifference = function(num1,num2){
	var result=num1-num2;
	console.log("The Difference is" +result);
}
showDifference(50,20);
showDifference(200,300);
showDifference(1.5,1);

showQuotient = function(num1,num2){
	var result = num1/num2;
	console.log("The division is" +result);
}
showQuotient(20,10);
showQuotient(10,2);
showQuotient(90,103);
/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */