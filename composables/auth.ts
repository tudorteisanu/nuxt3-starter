import { UserInterface } from '~/types/user.interface';
import type { CredentialsInterface } from '~/types';
import { storeToRefs } from 'pinia';

interface AuthInterface {
	login: (user: UserInterface) => void;
	logout: () => void;
	check: (token: string) => Promise<UserInterface>;
}


export const useAuth = (): AuthInterface => {
	const authStore = useAuthStore();
	const router = useRouter()

	const login = async (user: any): Promise<void> => {
		try {
			const { data } = await useFetch<CredentialsInterface>('https://shoply-api.nanoit.dev/api/auth/login', {
				body: user,
				method: "POST",
			})

			authStore.login(data.value as CredentialsInterface)
			router.push('/')
		}
		catch (e) {
			throw e
		}
	};

	const logout = () => {
		authStore.logout();
		router.push('/login')
	};

	const check = async (token: string): Promise<UserInterface> => {
		const { data } = await useFetch<UserInterface>('https://shoply-api.nanoit.dev/api/auth/user-info', {
			headers: {
				authorization: `Bearer ${token}`
			},
		});

		const { currentUser } = storeToRefs(useAuthStore());

		authStore.isLoggedIn = true;
		authStore.token = token;
		currentUser.value = data.value


		return data.value as UserInterface
	}

	return { login, logout, check };
};
