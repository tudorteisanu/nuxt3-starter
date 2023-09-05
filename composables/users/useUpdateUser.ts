import { useUsersStore } from '~/store/users';
import { UserInterface } from '~/types/user.interface';
import { Ref, ref } from 'vue';

interface UpdateUserComposableInterface {
	isSubmitting: Ref<boolean>;
	updateUserById: (id: number, payload: UserInterface) => Promise<void>;
}

export const useUpdateUser = (): UpdateUserComposableInterface => {
	const isSubmitting: Ref<boolean> = ref(false);
	const { updateUser } = useUsersStore();

	const updateUserById = (id: number, payload: UserInterface): Promise<void> => {
		isSubmitting.value = true;

		return new Promise((resolve) => {
			setTimeout(() => {
				updateUser(id, payload);
				resolve();
			}, 1000);
		});
	};

	return {
		isSubmitting,
		updateUserById,
	};
};
