"use strict";
var getUserName = function (user) { return user.isMale; };
function CalulateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return {
        area: square
    };
}
var mySquare;
mySquare = CalulateAreas({ width: 4 });
mySquare = CalulateAreas({ widdth: 5 });
var options = {
    width: 4,
    widdth: 5
};
mySquare = CalulateAreas(options);
