"use strict";
const getUserName = (user) => user.isMale;
function CalulateAreas(config) {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return {
        area: square
    };
}
let mySquare;
mySquare = CalulateAreas({ width: 4 });
mySquare = CalulateAreas({ widdth: 5 });
let options = {
    width: 4,
    widdth: 5
};
mySquare = CalulateAreas(options);
