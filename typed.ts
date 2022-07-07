// on typescript the typed variable is required

// types of data

// boolean
let isValid: boolean = true;
isValid = false;

// number
let age: number = 12;

// string
let firstName: string = 'Jose';
let lastName: string = 'Cocom';

let fullName: string = `${firstName} ${lastName}`;

// array
let numbers: number[] = [12, 3, 45, 67,787,77];
let numbers2: Array<number>  = [13,5,6,7,7];

// tupla
let place: [string, number] = ['Casa', 97804];

// Enum auto asigned values
enum Estado {
	offline,
	indefinido,
	Online
}

// Enum manual asigned values
enum Estado2 {
	offline = -1,
	indefinido = 0,
	Online = 1
}

let stat: Estado2 = Estado2.Online;
console.log(stat);


// Unknown
let withOutTiped: unknown = 'Hello';
withOutTiped = 400;
withOutTiped = true;

// any
let newString: string = 'this is a new string';
let typeUndefined: any = 'this is a message';
newString = typeUndefined;

// void
function logger(): void {
	console.log('logger');
}