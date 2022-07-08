function showPerson(pPerson) {
    console.log(pPerson);
}
showPerson({ first_name: 'Rosa', last_name: 'García', age: 25 });
function showCar(pCar) {
    console.log(`Brand: ${pCar.brand}. Model: ${pCar.model}`);
    if (pCar.color) {
        console.log(`Color: ${pCar.color}`);
    }
    else {
        console.log('the car not have a color');
    }
}
showCar({ brand: 'Mercedes', model: 'C180' });
showCar({ brand: 'Mercedes', model: 'TY89', color: 'red' });
let p1 = { x: 121, y: 85 };
const myFind = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(myFind('Hello', 'ello'));
class Adult {
    constructor(pFirst_name, pAge, pCar) {
        this.first_name = pFirst_name;
        this.age = pAge;
        this.car = pCar;
    }
}
class child {
}
