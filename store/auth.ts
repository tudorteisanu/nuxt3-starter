import { defineStore } from 'pinia'
import { UserInterface } from 'types/user.interface'

interface AuthStoreStateInterface {
    isLoggedIn: Ref<boolean>;
    currentUser: Ref<UserInterface | null>;
    login: (user: UserInterface) => void;
    logout: () => void;
}

export const useAuthStore = defineStore('auth', (): AuthStoreStateInterface => {
    const isLoggedIn: Ref<boolean> = ref(false);
    const currentUser: Ref<UserInterface | null> = ref(null);

    const login = (user: UserInterface) => {
        currentUser.value = user;
        isLoggedIn.value = true;
    }

    const logout = () => {
        currentUser.value = null;
        isLoggedIn.value = true;
    }

    return { isLoggedIn, currentUser, login, logout }
})

