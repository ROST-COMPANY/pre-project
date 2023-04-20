import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import Animated, {
	Easing,
	interpolateColor,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import type { GestureResponderEvent } from 'react-native';
import { brandColor, systemColor } from '../styles/theme';

interface SwitchProps {
	value: boolean;
	onPress?: (event: GestureResponderEvent) => void;
}

export default function Switch({ value, onPress }: SwitchProps) {
	const position = useSharedValue(value ? 1 : 0);
	const backgroundColor = useDerivedValue(() =>
		interpolateColor(
			position.value,
			[0, 1],
			[systemColor.disabled, brandColor.primary],
		),
	);

	useEffect(() => {
		position.value = value ? 1 : 0;
	}, [value]);

	const containerStyle = useAnimatedStyle(() => ({
		backgroundColor: withTiming(backgroundColor.value, {
			easing: Easing.linear,
			duration: 200,
		}),
	}));

	const switchButtonStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: withTiming(position.value * 20, {
					easing: Easing.linear,
					duration: 200,
				}),
			},
		],
	}));

	return (
		<Touchable onPress={onPress}>
			<AnimatedContainer style={containerStyle} value={value}>
				<AnimatedSwitchButton style={switchButtonStyle} />
			</AnimatedContainer>
		</Touchable>
	);
}

interface ContainerProps {
	value: boolean;
}

const Container = styled.View<ContainerProps>`
	width: 48px;
	height: 28px;
	border-radius: 14px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Touchable = styled.TouchableWithoutFeedback``;

const SwitchButton = styled.View`
	width: 28px;
	height: 28px;
	background-color: white;
	border: 1px solid ${brandColor.primary};
	border-radius: 14px;
`;

const AnimatedSwitchButton = Animated.createAnimatedComponent(SwitchButton);
