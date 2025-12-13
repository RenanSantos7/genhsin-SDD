import { Theme } from '../types';

export const colors: Theme['colors'] = {
	primary: {
		main: 'hsl(180, 74%, 51%)',
		light: 'hsl(180, 74%, 70%)',
		dark: 'hsl(180, 74%, 30%)',
	},
	secondary: {
		main: 'hsl(209, 82%, 47%)',
		light: 'hsl(209, 82%, 60%)',
		dark: 'hsl(209, 82%, 30%)',
	},
	background: {
		main: '#f0f2f5',
		dark: '#ffffff',
	},
	text: {
		main: '#333333',
		light: '#666666',
		dark: '#000000',
	},
	error: {
		main: '#ff4d4f',
	},
	gray: {
		100: '#f5f5f5',
		200: '#eeeeee',
		300: '#e0e0e0',
		400: '#bdbdbd',
		500: '#9e9e9e',
		600: '#757575',
		700: '#616161',
	},
};
