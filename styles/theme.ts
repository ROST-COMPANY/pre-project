import { blue } from './palette';

export const brandColor = {
	primary: blue[600],
	secondary: blue[300],
	tertiary: 'transparent',
};

export const systemColor = {
	success: '#24A148',
	warning: '#FDD13A',
	error: '#DA1E28',
	disabled: '#D1CFC9',
	overay: 'rgba(12, 12, 12, 0.48)',
};

export const fontSize = {
	small: '12px',
	medium: '16px',
	large: '20px',
};

export const fontWeight = {
	thin: 300,
	regular: 400,
	medium: 500,
	bold: 700,
};

const theme = {
	fontSize,
	fontWeight,
	brandColor,
	systemColor,
};

export default theme;
