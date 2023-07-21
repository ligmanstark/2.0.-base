//Для работы функций с объектами необходимо создавать минимульную маску передаваемых элемнтов объекта,. Меньше быть не может, больше может.
const printPoint = (point: { x: string; y: string }): void => {
	console.log(`Coordinate of the point is x:${point.x} and y: ${point.y}`);
};

const obj1 = {
	x: `1`,
	y: `2`,
};

printPoint(obj1);

const obj2 = {
	x: `1`,
	y: `2`,
	z: `4`,
};

printPoint(obj2);
//При передаче необъязаельного элемента маски, необходимо делать проверку на ликвидность, для недопщения undifiend и ошибок в runtime
const printName = (user: { firstName: string; lastName?: string }): void => {
	console.log('Hello', user.firstName.toUpperCase());
	if (user.lastName && typeof user.lastName === 'string') {
		console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
	}
};

printName({ firstName: 'Levis', lastName: 'Rei' });
printName({ firstName: 'Levis' });
