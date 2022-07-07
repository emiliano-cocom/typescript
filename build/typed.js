// on typescript the typed variable is required
// types of data
// boolean
let isValid = true;
isValid = false;
// number
let age = 12;
// string
let firstName = 'Jose';
let lastName = 'Cocom';
let fullName = `${firstName} ${lastName}`;
// array
let numbers = [12, 3, 45, 67, 787, 77];
let numbers2 = [13, 5, 6, 7, 7];
// tupla
let place = ['Casa', 97804];
// Enum auto asigned values
var Estado;
(function (Estado) {
    Estado[Estado["offline"] = 0] = "offline";
    Estado[Estado["indefinido"] = 1] = "indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
// Enum manual asigned values
var Estado2;
(function (Estado2) {
    Estado2[Estado2["offline"] = -1] = "offline";
    Estado2[Estado2["indefinido"] = 0] = "indefinido";
    Estado2[Estado2["Online"] = 1] = "Online";
})(Estado2 || (Estado2 = {}));
let stat = Estado2.Online;
console.log(stat);
// Unknown
let withOutTiped = 'Hello';
withOutTiped = 400;
withOutTiped = true;
// any
let newString = 'this is a new string';
let typeUndefined = 'this is a message';
newString = typeUndefined;
// void
function logger() {
    console.log('logger');
}
