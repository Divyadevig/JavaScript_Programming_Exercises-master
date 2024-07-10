// Displaying an object's properties on the console

var movie1;
var secondmovie;
movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

secondmovie = {
  title: "The Demon",
  actors: "Vijay,Nazriya ",
  directors: "Atlee, Shankar"
};

console.log("Movie information for " + secondmovie.title);
console.log("------------------------------");
console.log("Actors: " + secondmovie.actors);
console.log("Directors: " + secondmovie.directors);
console.log("------------------------------");

var blogPost = {
  title: "Introduction to JavaScript Promises",
  author: "John Smith",
  content: "JavaScript promises provide a way to handle asynchronous operations. They are a powerful tool for managing async code.",
  datePublished: "2024-07-10"
}

console.log("Blog Post Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Content: " + blogPost.content);
console.log("Date Published: " + blogPost.datePublished);
console.log("------------------------------");
/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */