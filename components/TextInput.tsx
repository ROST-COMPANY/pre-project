import React from 'react';
import styled from 'styled-components/native';
import { brandColor, fontSize } from '../styles/theme';
import { gray } from '../styles/palette';
import {
	KeyboardTypeOptions,
	ReturnKeyTypeOptions,
	StyleSheet,
} from 'react-native';
import { fontWeight } from '../styles/theme';
import type { FontWeight } from '../types/reactCommon.type';

interface TextInputProps {
	value: string;
	icon?: any;
	placeholder?: string;
	description?: string;
	keyboardType?: KeyboardTypeOptions;
	returnKeyType?: ReturnKeyTypeOptions;
	width?: string;
	height?: string;
	secureTextEntry?: boolean;
	hideDescriptionAtNoValue?: boolean;
	onChangeText?: (text: string) => void;
}

export default function TextInput({
	value,
	icon,
	placeholder,
	description,
	keyboardType = 'default',
	returnKeyType = 'default',
	width = '100%',
	height = '52px',
	secureTextEntry = false,
	onChangeText,
}: TextInputProps) {
	return (
		<Container width={width} height={height}>
			{icon}
			<Input
				value={value}
				style={value ? style.text : style.placeholder}
				placeholder={placeholder}
				placeholderTextColor={gray[800]}
				keyboardType={keyboardType}
				returnKeyType={returnKeyType}
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
			/>
			{description && !value && <DescText>{description}</DescText>}
		</Container>
	);
}

interface ContainerProps {
	width: string;
	height: string;
}

const Container = styled.View<ContainerProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: 11px;
	border: 1px solid ${brandColor.primary};
	border-radius: 8px;
`;

const Input = styled.TextInput`
	flex: 1;
`;

const style = StyleSheet.create({
	text: {
		color: gray[800],
		fontFamily: 'AppleSDGothicNeo-SemiBold',
		fontSize: +fontSize.large.slice(0, 2),
		fontWeight: fontWeight.bold as FontWeight,
	},
	placeholder: {
		color: gray[100],
		fontFamily: 'AppleSDGothicNeo-SemiBold',
		fontSize: +fontSize.medium.slice(0, 2),
		fontWeight: fontWeight.medium as FontWeight,
	},
});

const DescText = styled.Text`
	padding: 0 5px;
	color: ${gray[500]};
	font-family: 'AppleSDGothicNeo-SemiBold';
	font-size: ${fontSize.medium};
	font-weight: ${fontWeight.medium};
`;
