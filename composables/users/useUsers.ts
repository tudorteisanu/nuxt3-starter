import { Ref, ref } from 'vue';
import { CreateUserInterface, UserInterface } from 'types/user.interface';
import { headers as userHeaders } from '~/settings/data/users';
import { HeaderInterface } from '~/types/header.interface';

interface UsersComposableInterface {
	data: Ref<UserInterface[]>;
	headers: Ref<HeaderInterface<UserInterface>[]>;
	isLoading: Ref<boolean>;
	removeUser: (user: any) => void;
	addUser: (user: CreateUserInterface) => void;
	getUserById: (id: number) => UserInterface | undefined;
	pathUserById: (userId: number, user: UserInterface) => void;
	setUsers: (users: UserInterface[]) => void;
}

// global scope
const data = ref<UserInterface[]>([]);
const isLoading: Ref<boolean> = ref(false);

export const useUsers = (): UsersComposableInterface => {
	const headers = ref(userHeaders);

	const removeUser = (user: any): void => {
		const index = data.value.findIndex(({ id }) => id === user.id);

		if (~index) {
			data.value.splice(index, 1);
			console.log('removed');
		}
	};

	const getUserById = (userId: number): UserInterface | undefined => {
		return data.value.find(item => item.id === userId);
	};

	const addUser = (user: CreateUserInterface): void => {
		data.value.push({ ...user, id: data.value.length });
	};

	const pathUserById = (userId: number, user: UserInterface): void => {
		const index = data.value.findIndex(item => item.id === userId);

		if (~index) {
			data.value[index] = {
				...user,
			};
		}
	};

	const setUsers = (users: UserInterface[]): void => {
		data.value = users;
	};

	return {
		data,
		headers,
		isLoading,
		removeUser,
		getUserById,
		pathUserById,
		addUser,
		setUsers,
	};
};
