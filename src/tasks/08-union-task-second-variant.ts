type Level = 'junior' | 'middle' | 'senior';

interface Developer {
	login: string;
	skills: string[];
	level: Level;
}

const Dev1: Developer = {
	login: 'Levis',
	skills: ['Frontend', 'Backend'],
	level: 'junior',
};
//возможно создать маску, возможно принять готовый интерфейс
const gradeDeveloper = (Dev: Developer, nextLevel: Level): void => {
	if (Dev.login) {
		console.log(
			`Your BIO:\n Login - ${Dev.login}.\n Your skills - ${Dev.skills}.\n Your level - ${Dev.level}.\n Your next level - ${nextLevel}.`
		);
		Dev.level = nextLevel;
	} else {
		console.log('Введите пользователя, для вывода информации');
	}
};

gradeDeveloper(Dev1, 'middle');
