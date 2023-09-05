import { CreateUserInterface, UserInterface } from 'types/user.interface';
import { Ref, ref } from 'vue';

interface UpdateUserComposableInterface {
	isSubmitting: Ref<boolean>;
	createUser: (payload: CreateUserInterface) => Promise<void>;
}

export const useCreateUser = (): UpdateUserComposableInterface => {
	const isSubmitting: Ref<boolean> = ref(false);
	const { addUser } = useUsers();

	const createUser = (payload: CreateUserInterface): Promise<void> => {
		isSubmitting.value = true;

		return new Promise((resolve) => {
			setTimeout(() => {
				addUser(payload);
				resolve();
			}, 1000);
		});
	};

	return {
		isSubmitting,
		createUser,
	};
};
