import { ref } from 'vue';
import { users, headers as userHeaders } from '../config/data/users';
import { CreateUserInterface, UserInterface } from 'types/user.interface';
import { HeaderInterface } from 'types/header.interface';

interface UsersComposableInterface {
	data: Ref<UserInterface[]>;
	headers: Ref<HeaderInterface<UserInterface>[]>;
	removeUser: (user: any) => void;
	addUser: (user: UserInterface) => void;
	getUserById: (id: number) => Promise<UserInterface | undefined>;
	updateUserById: (userId: number, user: UserInterface) => Promise<void>;
	fetchUsers: () => Promise<void>;
}

// global scope
const data = ref<UserInterface[]>([]);

export const useUsers = (): UsersComposableInterface => {
	const headers = ref(userHeaders);

	const removeUser = (user: any): void => {
		const index = data.value.findIndex(({ id }) => id === user.id);

		if (~index) {
			data.value.splice(index, 1);
			console.log('removed');
		}
	};

	const getUserById = (userId: number): Promise< UserInterface | undefined> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(data.value.find(item => item.id === userId));
			}, 1000);
		});
	};

	const fetchUsers = (): Promise<void> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				data.value = users;
				resolve();
			}, 1000);
		});
	};

	const addUser = (user: CreateUserInterface): Promise<void> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				data.value.push({ ...user, id: data.value.length });
				resolve();
			}, 800);
		});
	};

	const updateUserById = (userId: number, user: UserInterface): Promise<void> => {
		return new Promise((resolve) => {
			const index = data.value.findIndex(item => item.id === userId);

			if (~index) {
				data.value[index] = {
					...user,
				};
			}
			setTimeout(() => {
				resolve();
			}, 1000);
		});
	};

	return {
		data,
		headers,
		removeUser,
		getUserById,
		updateUserById,
		fetchUsers,
		addUser,
	};
};
