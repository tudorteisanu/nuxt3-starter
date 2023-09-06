import { storeToRefs } from 'pinia';
// import { UserInterface } from '~/types'

export default defineNuxtPlugin(async () => {
  const cookieToken = useCookie('token');
  const { currentUser, isLoggedIn, token } = storeToRefs(useAuthStore())
  const { check } = useAuth()

  // Skip if already initialized on server
  if (currentUser.value) {
    return;
  }

  if (cookieToken.value) {
    await check(cookieToken.value)
  }
  // const { data: newUser } = await check(cookieToken.value)

  // if (newUser) {
  //   currentUser.value = newUser.value
  //   isLoggedIn.value = true;
  //   token.value = cookieToken.value
  // }
});
