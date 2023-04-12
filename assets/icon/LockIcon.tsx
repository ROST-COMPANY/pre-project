import React from 'react';
import { SvgXml } from 'react-native-svg';

interface LockIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

export default function LockIcon({
	width = 30,
	height = 30,
	fill = 'black',
}: LockIconProps) {
	return <SvgXml xml={xml(width, height, fill)} />;
}

const xml = (width: number, height: number, fill: string) => `
<svg width="${width}" height="${height}" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.083 12.5h-1.25v-1.667A5.84 5.84 0 0 0 15 5a5.84 5.84 0 0 0-5.833 5.833V12.5h-1.25a.416.416 0 0 0-.417.417v10.416c0 .92.747 1.667 1.667 1.667h11.666c.92 0 1.667-.747 1.667-1.667V12.917a.416.416 0 0 0-.417-.417zm-5.835 8.704a.418.418 0 0 1-.415.463h-1.666a.417.417 0 0 1-.415-.463l.263-2.364a1.648 1.648 0 0 1-.682-1.34c0-.92.748-1.667 1.667-1.667.92 0 1.667.748 1.667 1.667 0 .539-.255 1.03-.682 1.34l.263 2.364zm2.085-8.704h-6.666v-1.667A3.337 3.337 0 0 1 15 7.5a3.337 3.337 0 0 1 3.333 3.333V12.5z" fill="${fill}" fill-rule="nonzero"/>
</svg>

`;
