import { blue } from './palette';

export const brandColor = {
	primary: '#5257E1', // '#5257E1, #764CD2, #B63AB9' 그라데이션,
	secondary: '#333333',
	tertiary: '#FFFFFF',
};

export const systemColor = {
	success: '#28C840',
	warning: '#FFBB2E',
	error: '#CC0000',
	disabled: '#CCCCCC',
	overay: '#rgba(12, 12, 12, 0.48)',
};

export const fontSize = {
	small: '14px',
	medium: '16px',
	large: '20px',
	xlarge: '24px',
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
