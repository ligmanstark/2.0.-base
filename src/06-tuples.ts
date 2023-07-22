//кортежи - это структура парного массива ограниченная по количеству и типу принимаемых данных, согласно аннотации

//обычный массив, возможно добавления любого количества string с учетом выполнения условий хранения [][]
const tuples = [
	['keq', 'generic'],
	['heool', ''],
];

//кортеж однотипный, возможно сколько угодно вложенных массивов, с двумя элементами в каждом
const tuples2: [string, string][] = [
	['keq', 'generic'],
	['heool', ''],
	['d', 'd'],
];

//кортеж разнотипный, должен соответствовать полностью структуре
const tuples3: [string, string, Date, boolean][] = [];
tuples3.push(['Levis', 'Rei', new Date(1997, 4, 22), true]);

const tuples4: [string, string, Date, boolean][] = [];
tuples3.push(
	['Levis', 'Rei', new Date(1997, 4, 22), true],
	['Miduway', 'Rei', new Date(2010, 4, 22), true]
);
