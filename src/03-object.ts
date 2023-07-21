interface Car {
	wheels: number;
	brand: string;
	type: string;
	isNew?: boolean;
	name?: string;
	//неограниченное количество полей, при необходимости
	[key: string]: unknown;
}

const car: Car = {
	wheels: 4,
	brand: 'BMW',
	type: 'Sedan',
	isNew: false,
	name: 'Kalina',
	tes: true, //добавлен засчет [key:string]:unknown
	nb: 2, //добавлен засчет [key:string]:unknown
};

car.go = true;
