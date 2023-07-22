//алиасы - type , аналог интерфейсов, однако позволяет доп.возможности, например описание картежа
type Pair = [string, string];
type Pairs = Pair[];

type MyBoolean = false | true;

//выполнение работы интерфейсов:
type DCar = {
	brand: string;
	type: string;
	year: number;
	isNew: boolean;
	name: string;
};
