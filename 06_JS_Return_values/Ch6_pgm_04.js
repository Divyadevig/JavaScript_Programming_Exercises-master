// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);

console.log("The sum of 50 and 23 is : " +sum);

var sum1 = add(15,15);
console.log("The sum of 15 and 15 is : " +sum1);

var nestedadd = add(add(20,10),30);
console.log("The sum of 20,10 and 30 is :" +nestedadd);

var sumofthreeNo;
sumofthreeNo = function(num1,num2,num3){
	var result = num1 + num2 + num3;
	return result;
}
var threeNo = sumofthreeNo(10,80,30);
console.log(" Addition of three numbers is " +threeNo);
/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */