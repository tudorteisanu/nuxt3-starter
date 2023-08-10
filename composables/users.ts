import { ref } from 'vue';

export const useAuth = (): any => {
	const isLoggedIn = ref(false);
	const currentUser = ref(null);

	const setCurrentUser = (user: any) => {
		currentUser.value = user;
		isLoggedIn.value = true;
	};

	const logout = () => {
		currentUser.value = null;
		isLoggedIn.value = false;
	};

	return { isLoggedIn, setCurrentUser, logout };
};
