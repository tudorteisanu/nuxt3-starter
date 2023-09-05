import { resolve } from 'path';
import { UserInterface } from 'types/user.interface';
import { Ref, ref } from 'vue';

interface UpdateUserComposableInterface {
	isLoading: Ref<boolean>;
	fetchUserById: (id: number) => Promise<UserInterface>;
}

export const useFetchUserById = (): UpdateUserComposableInterface => {
	const isLoading: Ref<boolean> = ref(false);
	const { getUserById, setUsers } = useUsers();
	const data: any = ref(undefined);

	const fetchUserById = (id: number): Promise<UserInterface> => {
		isLoading.value = true;
		const user = getUserById(id);

		if (user) {
			data.value = user;
			isLoading.value = false;
			return new Promise(resolve => resolve(user));
		}

		return new Promise((resolve) => {
			setTimeout(() => {
				const newUser = { id, firstname: 'Test', lastname: 'test', email: 'test@email.ri' };
				setUsers([newUser]);
				isLoading.value = false;
				resolve(newUser);
			}, 1000);
		});
	};

	return {
		isLoading,
		fetchUserById,
	};
};
