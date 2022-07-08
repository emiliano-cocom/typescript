const sum: (a: number, b: number) => number =  function(a: number, b: number): number {
	return a + b;
}

const sum2 = function (a: number, b: number): number {
	return a + b;
};

const sum3: (a: number, b: number) => number = function(a, b) {
	return a + b;
}

// optional parameters and default values
function fullName2(first_name: string, last_name: string = 'Gómez'): string {
	if(last_name) return first_name + " " +last_name;
	else return first_name;
}

console.log(fullName2('Pedro'));
console.log(fullName2('Mario', 'Romero'));

// REST parameters
function fullName3(first_name: string, ...restData: string[]): string {
	return first_name + " " + restData.join(' ');
}

console.log(fullName3('Anna', 'Maria', 'Dolores', 'García', 'Santos'));