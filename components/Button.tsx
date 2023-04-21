import React from 'react';
import styled from 'styled-components/native';
import { PressHandler, TouchEffect } from '../types/reactCommon.type';
import { brandColor, fontSize, systemColor } from '../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

export type ButtonType =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'ghost';

interface ButtonProps {
	children: React.ReactNode;
	type?: ButtonType;
	disabled?: boolean;
	touchEffect?: TouchEffect;
	width?: string;
	height?: string;
	onPress: PressHandler | undefined;
}

export default function Button({
	children,
	type = 'primary',
	disabled = false,
	touchEffect = 'opacity',
	width = '100%',
	height = '52px',
	onPress,
}: ButtonProps) {
	if (disabled)
		return (
			<Container width={width} height={height}>
				<BGDisabled>
					<TextDisabled>{children}</TextDisabled>
				</BGDisabled>
			</Container>
		);

	const Inner = () => {
		switch (type) {
			case 'primary':
				return (
					<BGPrimary
						colors={['#5257E1', '#764CD2', '#B63AB9']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<TextPrimary>{children}</TextPrimary>
					</BGPrimary>
				);
			case 'secondary':
				return (
					<BGSceondary>
						<TextSecondary>{children}</TextSecondary>
					</BGSceondary>
				);
			case 'tertiary':
				return (
					<BGTertiary>
						<TextTertiary>{children}</TextTertiary>
					</BGTertiary>
				);
			case 'danger':
				return (
					<BGDanger>
						<TextDanger>{children}</TextDanger>
					</BGDanger>
				);
			case 'ghost':
				return (
					<BGGhost>
						<TextGhost>{children}</TextGhost>
					</BGGhost>
				);
			default:
				return (
					<BGPrimary
						colors={['#5257E1', '#764CD2', '#B63AB9']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<TextPrimary>{children}</TextPrimary>
					</BGPrimary>
				);
		}
	};

	return (
		<Container width={width} height={height}>
			{touchEffect === 'opacity' && (
				<Opacity onPress={onPress}>{Inner()}</Opacity>
			)}
			{touchEffect === 'none' && <None onPress={onPress}>{Inner()}</None>}
		</Container>
	);
}

interface ContainerProps {
	width: string;
	height: string;
}

const Container = styled.View<ContainerProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

const Opacity = styled.TouchableOpacity``;

const None = styled.TouchableWithoutFeedback``;

const BGCommon = styled.View`
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 12px 20px;
	border-radius: 8px;
`;

const BGPrimary = styled(LinearGradient)`
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 12px 20px;
	border-radius: 8px;
`;

const BGSceondary = styled(BGCommon)`
	background-color: ${brandColor.secondary};
`;

const BGTertiary = styled(BGCommon)`
	background-color: ${brandColor.tertiary};
	border: 1px solid ${brandColor.primary};
`;

const BGDanger = styled(BGCommon)`
	background-color: ${systemColor.error};
`;

const BGGhost = styled(BGCommon)`
	background-color: transparent;
`;

const BGDisabled = styled(BGCommon)`
	background-color: ${systemColor.disabled};
`;

const TextCommon = styled.Text`
	font-family: 'AppleSDGothicNeo-Medium';
	font-size: ${fontSize.xlarge};
`;

const TextPrimary = styled(TextCommon)`
	color: white;
`;

const TextSecondary = styled(TextCommon)`
	color: white;
`;

const TextTertiary = styled(TextCommon)`
	color: ${brandColor.primary};
`;

const TextDanger = styled(TextCommon)`
	color: white;
`;

const TextGhost = styled(TextCommon)`
	color: ${brandColor.primary};
`;

const TextDisabled = styled(TextCommon)`
	color: white;
`;
