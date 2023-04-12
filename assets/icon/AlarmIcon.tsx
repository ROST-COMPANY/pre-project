import React from 'react';
import { SvgXml } from 'react-native-svg';

interface AlarmIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

export default function AlarmIcon({
	width = 30,
	height = 30,
	fill = 'black',
}: AlarmIconProps) {
	return <SvgXml xml={xml(width, height, fill)} />;
}

const xml = (width: number, height: number, fill: string) => `
<svg width="${width}" height="${height}" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <g fill="${fill}" fill-rule="nonzero">
        <path d="M36.944 32.47a8.966 8.966 0 0 1-3.103-6.81v-3.703c0-4.675-3.41-8.545-7.826-9.194v-1.435c0-.734-.585-1.328-1.305-1.328s-1.304.594-1.304 1.328v1.435c-4.418.649-7.826 4.519-7.826 9.194v3.703c0 2.63-1.131 5.111-3.115 6.82a2.339 2.339 0 0 0-.798 1.765c0 1.282 1.024 2.325 2.282 2.325h21.522c1.259 0 2.283-1.043 2.283-2.325 0-.68-.291-1.323-.81-1.776zM24.71 41.667c2.362 0 4.338-1.716 4.792-3.986h-9.584c.454 2.27 2.43 3.986 4.792 3.986z"/>
    </g>
</svg>

`;
