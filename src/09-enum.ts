//альтернатива юнионам, более гибкая, позволяет не меняя логику (изм.переменных), менять смысл вложенный в данные переменные
enum ShapeKind {
	Circle, //0
	Square, //1
	//итд
}

enum Grade {
	Junior = 'junior',
	Middle = 'middle',
	Senior = 'senior',
}

enum CodePW {
	ERROR_404 = 'not found',
	ERROR_AUTH = 'Auth doesnt',
	SOMEERROR = 'exiest',
}
enum TesO {
	Warrior,
	Clerick,
	Mage,
	Custer,
}

const gradeDeveloper12 = (Dev: {
	login: string;
	skills: string[];
	level: Grade;
}): void => {
	if (Dev.login) {
		//теперь при сравнении с 'junior' возможен отказ логики сравнения
		//if (Dev.level === 'junior') {
		if (Dev.level === Grade.Junior) {
			console.log(
				`Your BIO:Login - ${Dev.login}.\n Your skills - ${
					Dev.skills
				}.\n Your level - ${Dev.level}.\n Your next level - ${(Dev.level =
					Grade.Middle)}.`
			);
		} else if (Dev.level === Grade.Middle) {
			console.log(
				`Your BIO:Login - ${Dev.login}.\n Your skills - ${
					Dev.skills
				}.\n Your level - ${Dev.level}.\n Your next level - ${(Dev.level =
					Grade.Senior)}.`
			);
		} else if (Dev.level === Grade.Senior) {
			console.log(
				`Your BIO:Login - ${Dev.login}.\n Your skills - ${Dev.skills}.\n Your level - ${Dev.level}.\n Your name Bruce ?)}.`
			);
		}
	} else {
		console.log('Введите пользователя, для вывода информации');
	}
};
//чаще всего enum используются в описании логики кодов ошибок/ответов от сервера/приложения(бэкэнда)
