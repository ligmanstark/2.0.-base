//с помощью юниона можно создавать кастомные типы
type Status = 'ok' | 'loading' | 'error';
//присваиваем кастомный тип
let StaticY: Status = 'error';
//error
StaticY;
const printID = (id: number | string): void => {
	if (typeof id === 'string') {
		console.log(id.toUpperCase());
	} else {
		console.log(id);
	}
};

const welcome = (person: [string, string] | string): void | string => {
	if (Array.isArray(person)) {
		console.log('Hello Mr.', person.join(' '), 'Nice to meet you!');
	} else {
		return person;
	}
};
