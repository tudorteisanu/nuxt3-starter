import { HeaderInterface } from '~/types/header.interface';
import { UserInterface } from '~/types/user.interface';

const headers: HeaderInterface<UserInterface>[] = [
	{
		title: 'ID',
		key: 'id',
	},
	{
		title: 'First name',
		key: 'firstname',
	},
	{
		title: 'Last name',
		key: 'lastname',
	},
	{
		title: 'Email',
		key: 'email',
	},
	{
		title: '',
		key: 'actions',
		align: 'end',
	},
];

export default headers;
