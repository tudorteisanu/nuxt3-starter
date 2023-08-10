import axios from 'axios';

export default defineNuxtPlugin(() => {
	const baseUrl = 'https://localhost:3000/api';

	const api = axios.create({
		baseURL: baseUrl,
	});
	return {
		provide: {
			api,
		},
	};
});
