// Finding a character with indexOf

var message = "We choose to go to the Moon!";


var goIndex = message.indexOf("go");
console.log("Index of 'go':", goIndex);
var chooseIndex = message.indexOf("c");
console.log("Word:",message.substr(chooseIndex, 6));
var moonIndex = message.lastIndexOf("go");
console.log("Index of 'moon':", moonIndex);

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */