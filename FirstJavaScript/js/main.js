﻿// Start of code
var myText = "I have completed chapter 2 and started chapter 3";
alert(myText);

function showDistance(speed, time) {
    alert(speed * time);
};

function showDistanceReturn(speed, time) {
    return speed * time;
};

function showDistanceReturnVariable(speed, time) {
    var distance = speed * time;
    return distance;
};

showDistance(10, 5);
alert(showDistanceReturn(85, 1.5));
alert(showDistanceReturnVariable(22, 9));
var distanceTraveled = showDistanceReturnVariable(42, 21);
alert(distanceTraveled);

alert("Works exactly as I expected\nChapter 3 completed!");
 