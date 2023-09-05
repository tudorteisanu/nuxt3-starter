import { useUsersStore } from '~/store/users';
import { Ref, ref } from 'vue';

interface RemoveUserComposableInterface {
	isLoading: Ref<boolean>;
	removeUser: (id: number) => Promise<void>;
}

export const useRemoveUser = (): RemoveUserComposableInterface => {
	const isLoading: Ref<boolean> = ref(false);
	const { removeUser: deleteUser } = useUsersStore();

	const removeUser = (number: number): Promise<void> => {
		isLoading.value = true;

		return new Promise((resolve) => {
			setTimeout(() => {
				isLoading.value = false;
				deleteUser(number);
				resolve();
			}, 2000);
		});
	};

	return {
		isLoading,
		removeUser,
	};
};
