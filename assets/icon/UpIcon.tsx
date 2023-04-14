import React from 'react';
import { SvgXml } from 'react-native-svg';

interface UpIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

export default function UpIcon({
	width = 30,
	height = 30,
	fill = 'black',
}: UpIconProps) {
	return <SvgXml xml={xml(width, height, fill)} />;
}

const xml = (width: number, height: number, fill: string) => `
<svg width="${width}" height="${height}" viewBox="0 0 40 41" xmlns="http://www.w3.org/2000/svg">
    <path d="m20 13.434 8 13.333H12z" fill="${fill}" fill-rule="evenodd"/>
</svg>
`;
