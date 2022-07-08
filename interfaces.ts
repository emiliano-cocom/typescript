interface Person {
	first_name: string;
	last_name: string;
	age: number;
}

function showPerson(pPerson: Person) {
	console.log(pPerson);
}

showPerson({first_name: 'Rosa', last_name: 'García', age: 25});

// optional properties
interface Car {
	brand: string;
	model: string;
	color?:string; // optional parameter
}

function showCar(pCar: Car) {
	console.log(`Brand: ${pCar.brand}. Model: ${pCar.model}`);
	if(pCar.color) {
		console.log(`Color: ${pCar.color}`);
	}else {
		console.log('the car not have a color');
	}
}

showCar({ brand: 'Mercedes', model: 'C180'});
showCar({ brand: 'Mercedes', model: 'TY89', color: 'red'});

// readonly properties
interface Dot {
	readonly x: number;
	readonly y: number;
}

let p1: Dot = { x: 121, y: 85 };
// p1.x = 45; not modifiable variable

// define a function
interface Find {
	(value: string, find: string): boolean;
}

const myFind: Find = (v: string, b: string): boolean => {
	const result = v.search(b);
	return result > -1;
}

console.log(myFind('Hello', 'ello'));

// interface in a class
interface Human {
	first_name: string;
	age: number;
}

class Adult implements Human {
	first_name: string;
	age: number;
	car: boolean;

	constructor(pFirst_name: string, pAge: number, pCar: boolean) {
		this.first_name = pFirst_name;
		this.age = pAge;
		this.car = pCar;
	}
}

class child implements Human {
	first_name: string;
	age: number;
	school: string;
}