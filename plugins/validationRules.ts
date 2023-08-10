import validationRules from '~/utils/validationRules';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			validationRules,
		},
	};
});
