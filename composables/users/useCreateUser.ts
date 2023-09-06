import { CreateUserInterface, UserInterface } from '~/types/user.interface';
import { Ref, ref } from 'vue';

interface UpdateUserComposableInterface {
	isSubmitting: Ref<boolean>;
	createUser: (payload: CreateUserInterface) => Promise<void>;
}

export const useCreateUser = (): UpdateUserComposableInterface => {
	const isSubmitting: Ref<boolean> = ref(false);
	const usersStore = useUsersStore();

	const createUser = async (payload: CreateUserInterface): Promise<void> => {
		isSubmitting.value = true;
		try {
			const user: UserInterface = {
				...payload,
				id: usersStore.items.length
			}

			usersStore.addUser(user);
		} catch (e: any) {
			throw e.response
		} finally {
			isSubmitting.value = false
		}
	};

	return {
		isSubmitting,
		createUser,
	};
};
