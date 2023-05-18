import React from 'react';
import styled from 'styled-components/native';

interface AvatarProps {
	type?: 'small' | 'normal' | 'large';
	uri: string;
}

export default function Avatar({ type = 'normal', uri }: AvatarProps) {
	const getWappedImage = () => {
		switch (type) {
			case 'small':
				return <SmallImage source={{ uri }} />;
			case 'normal':
				return <NormalImage source={{ uri }} />;
			case 'large':
				return <LargeImage source={{ uri }} />;
			default:
				return <NormalImage source={{ uri }} />;
		}
	};

	return <>{getWappedImage()}</>;
}

const SmallImage = styled.Image`
	width: 30px;
	height: 30px;
	border-radius: 15px;
`;

const NormalImage = styled.Image`
	width: 64px;
	height: 64px;
	border-radius: 20px;
`;

const LargeImage = styled.Image`
	width: 200px;
	height: 200px;
	border-radius: 100px;
`;
