import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { fontSize, fontWeight } from '../styles/theme';
import { gray } from '../styles/palette';
import Button from './Button';
import { PressHandler } from '../types/reactCommon.type';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ModalProps {
	show: boolean;
	titleText?: string;
	contentText?: string;
	bodyContent?: React.ReactNode;
	buttonText?: string | string[];
	onPressButton?: PressHandler | PressHandler[];
	footerContent?: React.ReactNode;
	onPressDim?: PressHandler;
}

export default function Modal({
	show,
	titleText,
	contentText,
	bodyContent = null,
	buttonText,
	onPressButton,
	footerContent = null,
	onPressDim,
}: ModalProps) {
	const buttons = () =>
		!Array.isArray(buttonText) ? (
			<Button touchEffect="none" onPress={onPressButton as PressHandler}>
				{buttonText}
			</Button>
		) : (
			<ButtonWrapper>
				<Button
					type="ghost"
					width="49%"
					onPress={Array.isArray(onPressButton) ? onPressButton[0] : undefined}
				>
					{buttonText[0]}
				</Button>
				<Button
					type="ghost"
					width="49%"
					onPress={Array.isArray(onPressButton) ? onPressButton[1] : undefined}
				>
					{buttonText[1]}
				</Button>
			</ButtonWrapper>
		);

	return (
		<>
			{show && (
				<Touchable onPress={onPressDim}>
					<Dim>
						<Container>
							<Header>{titleText && <TitleText>{titleText}</TitleText>}</Header>
							{contentText && <ContentText>{contentText}</ContentText>}
							{bodyContent}
							<Footer>{footerContent ? footerContent : buttons()}</Footer>
						</Container>
					</Dim>
				</Touchable>
			)}
		</>
	);
}

const Touchable = styled.TouchableWithoutFeedback``;

const Dim = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${SCREEN_WIDTH}px;
	height: ${SCREEN_HEIGHT}px;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${0.9 * SCREEN_WIDTH}px;
	padding: 28px 20px 12px 20px;
	background-color: white;
	border-radius: 12px;
`;

const Header = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;
`;

const TitleText = styled.Text`
	font-family: 'AppleSDGothicNeo-SemiBold';
	color: ${gray[800]};
	font-size: 18px;
	font-weight: ${fontWeight.bold};
`;

const ContentText = styled.Text`
	font-family: 'AppleSDGothicNeo-SemiBold';
	color: ${gray[600]};
	font-size: 18px;
	font-weight: ${fontWeight.bold};
`;

const Footer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 20px;
`;

const ButtonWrapper = styled.View`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
