import axios from 'axios';
import { useAuthStore } from 'store';
import { UserInterface } from '~/types/user.interface';

interface AuthInterface {
	login: (user: UserInterface) => void;
	logout: () => void;
}


export const useAuth = (): AuthInterface => {
	const authStore = useAuthStore();

	const login = (user: any): Promise<void> => {
		return new Promise((resolve, reject) => {
			try {
				axios.post('https://shoply-api.nanoit.dev/api/auth/login', user).then((data) => {
					authStore.login(data.data)
					resolve();
				});
			}
			catch (e) {
				reject(e);
			}
		});
	};

	const logout = () => {
		authStore.logout();
	};

	return { login, logout };
};
