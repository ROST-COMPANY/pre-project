import React from 'react';
import { SvgXml } from 'react-native-svg';

interface DownIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

export default function DownIcon({
	width = 30,
	height = 30,
	fill = 'black',
}: DownIconProps) {
	return <SvgXml xml={xml(width, height, fill)} />;
}

const xml = (width: number, height: number, fill: string) => `
<svg width="${width}" height="${height}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="m20 26.667 8-13.334H12z" fill="${fill}" fill-rule="evenodd"/>
</svg>
`;
