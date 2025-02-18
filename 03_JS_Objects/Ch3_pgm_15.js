// A player object

var player;
var secondPlayer;

player = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: "a rusty key, The Sword of Destiny, a piece of cheese"
};

console.log(player.name);
console.log(player.name + " is in " + player.place);
console.log(player.name + " has health " + player.health);
console.log("Items: " + player.items.join(", "));

secondPlayer = {
    name: "Virat",
    health: 50,
    place: "Delhi",
    items: "a rusty key"
};

console.log("\n" + secondPlayer.name);
console.log(secondPlayer.name + " is in " + secondPlayer.place);
console.log(secondPlayer.name + " has health " + secondPlayer.health);
console.log("Items: " + secondPlayer.items.join(", "));
/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Log their details to the console.
 *
 * Notice how storing the items as a string
 * isn't a great approach. If the player
 * drops an item you'll have to manipulate
 * the string to remove the item.
 *
 * JavaScript has a way of storing lists
 * of items called an array. See Chapter 8.
 *
 */