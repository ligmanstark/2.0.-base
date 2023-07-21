//необходимо указывать типы приходящих значений, тип вывода
const sum = (a: number, b: number): number => {
	return a + b;
};
console.log(sum(2, 1));

//при отсутствии вывода или return, устанавливаемый тип вывода автоматически - void
//userID?:number -необъязательная переменная
const log = (name: string, userID?: number) => {
	console.log('hello', name, 'your ID -', userID || 'anonID');
};

//при указании в выводе - void, функция завершиться. При never - функция не завершиться
const crash = (): never => {
	throw new Error('error');
};

const avarage = (...nums: number[]) => {
	let sum = nums.reduce((curr, total) => curr + total, 0);
	return sum / nums.length;
};


const fo = function sts(sss:string):void {
    console.log(sss);
}