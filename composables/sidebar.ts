import { ref } from 'vue';

interface SidebarInterface {
	open: Ref<boolean>;
	toggle: () => void;
	hide: () => void;
	show: () => void;
	set: (value: boolean) => void;
}

export const useSidebar = (): SidebarInterface => {
	const open = ref(true);

	const toggle = () => {
		open.value = !open.value;
	};

	const hide = () => {
		open.value = false;
	};

	const show = () => {
		open.value = true;
	};

	const set = (value: boolean) => {
		open.value = value;
	};

	return { open, toggle, show, hide, set };
};
