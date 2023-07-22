type Level1 = 'junior' | 'middle' | 'senior';

interface Developer {
	login: string;
	skills: string[];
	level: Level;
}

const Dev11: Developer = {
	login: 'Levis',
	skills: ['Frontend', 'Backend'],
	level: 'junior',
};

const gradeDeveloper1 = (Dev: {
	login: string;
	skills: string[];
	level: Level;
}): void => {
	if (Dev.login) {
		if (Dev.level === 'junior') {
			console.log(
				`Your BIO:Login - ${Dev.login}.\n Your skills - ${
					Dev.skills
				}.\n Your level - ${Dev.level}.\n Your next level - ${(Dev.level =
					'middle')}.`
			);
		} else if (Dev.level === 'middle') {
			console.log(
				`Your BIO:Login - ${Dev.login}.\n Your skills - ${
					Dev.skills
				}.\n Your level - ${Dev.level}.\n Your next level - ${(Dev.level =
					'senior')}.`
			);
		} else if (Dev.level === 'senior') {
			console.log(
				`Your BIO:Login - ${Dev.login}.\n Your skills - ${Dev.skills}.\n Your level - ${Dev.level}.\n Your name Bruce ?)}.`
			);
		}
	} else {
		console.log('Введите пользователя, для вывода информации');
	}
};

gradeDeveloper1(Dev11);
