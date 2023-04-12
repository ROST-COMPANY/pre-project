import React from 'react';
import { SvgXml } from 'react-native-svg';

interface AccountIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

export default function AccountIcon({
	width = 30,
	height = 30,
	fill = 'black',
}: AccountIconProps) {
	return <SvgXml xml={xml(width, height, fill)} />;
}

const xml = (width: number, height: number, fill: string) => `
<svg width="${width}" height="${height}" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<defs>
    <path id="5u9h532hja" d="M0 10.122h17.771v8.696H0z"/>
</defs>
<g fill="none" fill-rule="evenodd">
    <g fill="${fill}">
        <path d="M19.15 9.523a4.014 4.014 0 1 1-8.028 0 4.014 4.014 0 0 1 8.028 0M7.285 22.801h15.701c-.261-3.717-3.37-6.662-7.152-6.662h-1.396c-3.783 0-6.891 2.945-7.153 6.662m16.228 1.017H6.759a.508.508 0 0 1-.509-.508c0-4.515 3.673-8.188 8.188-8.188h1.396c4.514 0 8.188 3.673 8.188 8.188 0 .28-.228.508-.509.508"/>
    </g>
    <path d="M15.136 6.017a3.51 3.51 0 0 0-3.506 3.506 3.51 3.51 0 0 0 3.506 3.505 3.51 3.51 0 0 0 3.505-3.505 3.51 3.51 0 0 0-3.505-3.506m0 8.028a4.528 4.528 0 0 1-4.523-4.522A4.528 4.528 0 0 1 15.136 5a4.528 4.528 0 0 1 4.523 4.523 4.528 4.528 0 0 1-4.523 4.522M15.834 15.63h-1.396a7.679 7.679 0 0 0-7.68 7.68h16.755a7.679 7.679 0 0 0-7.68-7.68" fill="${fill}"/>
</g>
</svg>
`;
