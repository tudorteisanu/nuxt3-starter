import { CreateUserInterface } from '~/types/user.interface';
import type { CredentialsInterface } from '~/types';

interface RegisterComposableInterface {
    register: (user: CreateUserInterface) => Promise<void>;
    validationErrors: Ref<CreateUserInterface>;
}


export const useRegister = (): RegisterComposableInterface => {
    const validationErrors: any = ref({});
    const router = useRouter()

    const register = async (body: CreateUserInterface) => {
        const { error: serverError } = await useFetch<CredentialsInterface>('https://shoply-api.nanoit.dev/api/auth/register', {
            body,
            method: "POST",
        })

        if (serverError?.value?.statusCode === 422) {
            validationErrors.value = serverError?.value?.data.errors
            return;
        }

        router.push('/login')
    }

    return { register, validationErrors };
};

