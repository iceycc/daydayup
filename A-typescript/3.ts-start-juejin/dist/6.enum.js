"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 10] = "Up";
    Directions[Directions["Down"] = 11] = "Down";
    Directions[Directions["Left"] = 12] = "Left";
    Directions[Directions["Right"] = 13] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Up);
console.log(Directions[10]);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);
var DirectionsString;
(function (DirectionsString) {
    DirectionsString["Up"] = "Up";
    DirectionsString["Down"] = "Down";
    DirectionsString["Left"] = "Left";
    DirectionsString["Right"] = "Right";
})(DirectionsString || (DirectionsString = {}));
var BooleanNum;
(function (BooleanNum) {
    BooleanNum[BooleanNum["No"] = 1] = "No";
    BooleanNum["Yes"] = "YES";
})(BooleanNum || (BooleanNum = {}));
console.log(Directions[10]);
console.log(BooleanNum[0]);
console.log(BooleanNum[1]);
var const_Direction;
(function (const_Direction) {
    const_Direction["Up"] = "up";
})(const_Direction || (const_Direction = {}));
const con_a = "up";
var DirectionF;
(function (DirectionF) {
    DirectionF["Up"] = "Up";
    DirectionF[DirectionF["Down"] = 2] = "Down";
    DirectionF[DirectionF["Left"] = -3] = "Left";
})(DirectionF || (DirectionF = {}));
console.log(DirectionF.Up === 'Up');
var DirectionD;
(function (DirectionD) {
    DirectionD[DirectionD["Up"] = 0] = "Up";
    DirectionD[DirectionD["Down"] = 1] = "Down";
    DirectionD[DirectionD["Left"] = 2] = "Left";
    DirectionD[DirectionD["Right"] = 3] = "Right";
})(DirectionD || (DirectionD = {}));
var AnimalD;
(function (AnimalD) {
    AnimalD[AnimalD["Dog"] = 0] = "Dog";
    AnimalD[AnimalD["Cat"] = 1] = "Cat";
})(AnimalD || (AnimalD = {}));
console.log(AnimalD.Dog);
var DirectionH;
(function (DirectionH) {
    DirectionH["Up"] = "Up";
    DirectionH["Down"] = "Down";
    DirectionH["Left"] = "Left";
    DirectionH["Right"] = "Right";
})(DirectionH || (DirectionH = {}));
(function (DirectionH) {
    DirectionH[DirectionH["Center"] = 1] = "Center";
})(DirectionH || (DirectionH = {}));
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
(function (Month) {
    function isSummer(month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false;
        }
    }
    Month.isSummer = isSummer;
})(Month || (Month = {}));
console.log(Month.isSummer(Month.January));
