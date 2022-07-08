const sum = function (a, b) {
    return a + b;
};
const sum2 = function (a, b) {
    return a + b;
};
const sum3 = function (a, b) {
    return a + b;
};
// optional parameters and default values
function fullName2(first_name, last_name = 'Gómez') {
    if (last_name)
        return first_name + " " + last_name;
    else
        return first_name;
}
console.log(fullName2('Pedro'));
console.log(fullName2('Mario', 'Romero'));
// REST parameters
function fullName3(first_name, ...restData) {
    return first_name + " " + restData.join(' ');
}
console.log(fullName3('Anna', 'Maria', 'Dolores', 'García', 'Santos'));
