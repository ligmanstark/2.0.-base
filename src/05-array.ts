const numbers = [1, 2, 3, 4, 5, 6];
//самостоятельное определяет все присутствующие типы в массиве
const numbers1 = [1, 2, 3, 4, 5, 6, true, '12321'];
//если хотим создать пустой массив и в дальнейшем наполнять -необходимо указать тип содержимого, иначе any.
const ar1 = []; //any
const ar2: number[] = []; // number
const ar21: Array<number> = []; //number
ar2.push(2);
ar2.push(3);
ar2.push(5);
ar2.push(7);

const cars: Car[] = [];
cars.push({ brand: 'Audio', type: 'car', wheels: 2 });

const arrOfAr: string[][] = [];
arrOfAr.push(['', ''], ['2']);

const printArr = (arr:unknown[]):void => {
    arr.forEach((el, index)=> {
    console.log(el,index);
    })
}