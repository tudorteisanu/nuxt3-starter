import { UserInterface } from 'types/user.interface';

const users: UserInterface[] = [
	...new Array(50),
].map((_, id) => ({
	id,
	firstname: `firstname ${id + 1}`,
	lastname: `lastname ${id + 1}`,
	email: `email${id + 1}@example.com`,
}));

export default users;
