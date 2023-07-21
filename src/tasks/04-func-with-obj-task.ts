interface User {
	login: string;
	email: string;
	password: string;
	isOnline: boolean;
	lastVisited: Date;
}
interface Admin extends User {
	root: boolean;
}

const user1: User = {
	login: 'levis',
	email: 'some@levis.com',
	password: 'some passwd',
	isOnline: false,
	lastVisited: new Date(2023, 7, 21),
};

const admin: Admin = {
	login: 'levis',
	email: 'some@levis.com',
	password: 'some passwd',
	isOnline: false,
	lastVisited: new Date(2023, 7, 21),
	root: true,
};

const login = (user: {
	login: string;
	password: string;
	root?: boolean;
}): void => {
	if (user.login.length > 0 && user.password.length > 0) {
		if (!user.root === false) {
			console.log(`Hello ${user.login}! You are a rootUser!`);
		} else {
			console.log(`Hello ${user.login}!`);
		}
	}
};

login(user1);
login(admin);