// I'll be seperating this code by chapter or chapters

// Chapters 1 thru 3
var myText = "I have completed chapter 2 and started chapter 3";
alert(myText);

function showDistance(speed, time) {
    alert(speed * time);
}

function showDistanceReturn(speed, time) {
    return speed * time;
}

function showDistanceReturnVariable(speed, time) {
    var distance = speed * time;
    return distance;
}

showDistance(10, 5);
alert(showDistanceReturn(85, 1.5));
alert(showDistanceReturnVariable(22, 9));
var distanceTraveled = showDistanceReturnVariable(42, 21);
alert(distanceTraveled);

alert("Works exactly as I expected\nChapter 3 completed!");

// Chapter 4
var safeToProceed = false;

if (safeToProceed) {
    alert("You shall pass!");
} else {
    alert("You shall not pass!");
};

var speedLimit = 55;

function amISpeeding(speed) {
    if (speed >= speedLimit) {
        alert("Yes, you are speeding.");
    } else {
        alert("No, you are not speeding. What's wrong with you?");
    }
};

amISpeeding(53);
amISpeeding(72);

var xPos = 300;
var yPos = 150;

function sendWarning(x, y) {
    if ((x < xPos) && (y < yPos)) {
        alert("Adjust the position");
    } else {
        alert("Things are fine");
    }
}

sendWarning(500, 160);
sendWarning(100, 100);
sendWarning(201, 149);

var color = "green";

switch (color) {
case "yellow":
    alert("Yellow Color");
    break;
case "red":
    alert("Red Color");
    break;
case "blue":
    alert("Blue Color");
    break;
case "green":
    alert("Green Color");
    break;
case "black":
    alert("Black Color");
    break;
default:
    alert("No known color specified");
}

