import { ref } from 'vue';
import axios from 'axios';
import { UserInterface } from '@/types/user.interface';

interface AuthInterface {
	isLoggedIn: Ref<boolean>;
	currentUser: Ref<UserInterface | null>;
	login: (user: UserInterface) => void;
	logout: () => void;
}

// global scope
const isLoggedIn = ref(false);
const currentUser = ref(null);

export const useAuth = (): AuthInterface => {
	const login = (user: any): Promise<void> => {
		return new Promise((resolve, reject) => {
			try {
				axios.post('https://shoply-api.nanoit.dev/api/auth/login', user).then((data) => {
					currentUser.value = data.data;
					console.log(currentUser.value);

					resolve();
				});
			}
			catch (e) {
				reject(e);
			}
		});
		currentUser.value = user;
		isLoggedIn.value = true;
		console.log(currentUser.value);
	};

	const logout = () => {
		currentUser.value = null;
		isLoggedIn.value = false;
	};

	return { isLoggedIn, currentUser, login, logout };
};
