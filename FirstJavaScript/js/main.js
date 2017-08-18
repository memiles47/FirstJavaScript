// I'll be seperating this code by chapter or chapters

// Chapters 1 thru 3
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
        alert("No, you are not speeding");
    }
};

amISpeeding(53);
amISpeeding(72);