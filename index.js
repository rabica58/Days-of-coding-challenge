//                  *Day 12  of coding challenge*   //
//  Question 1: Calculate arange percentage 
// find the average Grade: Given a list of grades, calculate the average grade.
var grades = [74, 55, 90, 45, 55];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
//               *Day 13 of coding challenge*   //
// Question 2: Average Score Calculator: Write a simple programe that can take lots of 
// scores and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Example: finding the average of four scores.
console.log(averageScore(50, 80, 100, 60));
//                     *Day 14 of coding challenge*   //
// Question 3: Making Flexible Object Keys: Learn how to set up a list where you can
// change the name of each section based on what you need at the moment.
function objectKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = objectKey("theme", "dark");
console.log(userPreference);
