import React from 'react';
import { brandColor, fontSize, systemColor } from '../styles/theme';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { PressHandler, TouchEffect } from '../types/reactCommon.type';
import { gray } from '../styles/palette';

interface CheckboxProps {
	name?: string;
	checked: boolean;
	label: string;
	touchEffect?: TouchEffect;
	onPress?: PressHandler;
}

export default function Checkbox({
	name,
	checked,
	label,
	touchEffect = 'none',
	onPress,
}: CheckboxProps) {
	const inner = (
		<Container>
			<SvgXml xml={xml(checked)} />
			<LabelText>{label}</LabelText>
		</Container>
	);

	return (
		<>
			{touchEffect === 'opacity' && (
				<Opacity onPress={onPress}>{inner}</Opacity>
			)}
			{touchEffect === 'none' && <None onPress={onPress}>{inner}</None>}
		</>
	);
}

const Opacity = styled.TouchableOpacity``;

const None = styled.TouchableWithoutFeedback``;

const Container = styled.View`
	flex-direction: row;
	align-items: center;
`;

const LabelText = styled.Text`
	color: ${gray[800]};
	font-family: 'AppleSDGothicNeo-Medium';
	font-size: ${fontSize.small};
	margin-left: 8px;
`;

const xml = (checked: boolean) => `
<svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
<g fill="none" fill-rule="evenodd">
<rect fill="${
	checked ? brandColor.primary : systemColor.disabled
}" x=".45" y=".45" width="23.1" height="23.1" rx="4"/>
<path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="m6.316 12 4.844 4.421 7.535-8.842"/>
</g>
</svg>
`;
