import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn } = storeToRefs(useAuthStore());

  if (isLoggedIn.value && to.fullPath === '/login') {
    return navigateTo('/');
  }

  if (!isLoggedIn.value && to.fullPath !== '/login') {
    abortNavigation();
    return navigateTo('/login');
  }
});
