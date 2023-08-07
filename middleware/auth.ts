export default defineNuxtRouteMiddleware((to, from) => {
	if (to.params.id === '1') {
		//   return abortNavigation()
	}
	console.log(to.fullPath, from.fullPath);
	if (to.path !== '/') {
		//   return navigateTo('/')
	}
	// return navigateTo('/')
});
