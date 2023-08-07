import { ref } from 'vue';

interface CounterInterface {
	count: Ref<number>;
	increment: () => void;
	decrement: () => void;
}

export const useCounter = (): CounterInterface => {
	const count = ref(0);

	const increment = () => {
		count.value++;
	};

	const decrement = () => {
		count.value--;
	};

	return { count, increment, decrement };
};
