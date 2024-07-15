// Passing an array to a function\

var getVisitorReport = function (monthArray, weekIndex, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];

  var visitorArray = monthArray[weekIndex - 1];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index] + " in week " + weekIndex;

  return visitorReport;
};


var week1 = [354, 132, 210, 221, 481, 312, 189];
var week2 = [300, 150, 180, 200, 400, 250, 200];
var week3 = [400, 180, 220, 240, 500, 300, 220];
var week4 = [450, 200, 230, 260, 550, 350, 240];

var monthArray = [week1, week2, week3, week4];

var report = getVisitorReport(monthArray, 2, 4); 
console.log(report);


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */