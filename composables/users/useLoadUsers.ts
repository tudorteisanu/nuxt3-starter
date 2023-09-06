import { Ref, ref } from 'vue';
import { UserInterface } from '~/types/user.interface';
import { users } from '~/settings/data/users';

interface FetchUsersComposableInterface {
	isLoading: Ref<boolean>;
	fetchUsers: () => Promise<void>;
}

export const useFetchUsers = (): FetchUsersComposableInterface => {
	const data = ref<UserInterface[]>([]);
	const isLoading: Ref<boolean> = ref(false);
	const { setUsers } = useUsersStore();

	const fetchUsers = (): Promise<void> => {
		isLoading.value = true;

		return new Promise((resolve) => {
			setTimeout(() => {
				data.value = users;
				isLoading.value = false;
				setUsers(users);
				resolve();
			}, 2000);
		});
	};

	return {
		isLoading,
		fetchUsers,
	};
};
