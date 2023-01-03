import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Gonalu Kaler',
		email: 'gonalukaler@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Ramdhani Akbar',
		email: 'ramdhaniakbar@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
