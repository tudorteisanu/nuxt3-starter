const required = (value: string): boolean | string => {
	return !!value || 'Requried field!';
};

const email = (value: string): boolean | string => {
	return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Must be a valid email!';
};

const minLength = (length: number) => (value: string): boolean | string => {
	return value.length > length || `Must have more then ${length} characters!`;
};

const maxLength = (length: number) => (value: string): boolean | string => {
	return value.length < length || `Must have less then ${length} characters!`;
};

export default { required, email, minLength, maxLength };
