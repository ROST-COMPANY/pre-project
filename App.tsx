import React from 'react';
import styled from 'styled-components/native';

import Button from './components/Button';

export default function App() {
	return (
		<Container>
			<TitelText>Button</TitelText>
			<Text>Primary</Text>
			<Button onPress={() => console.log('press Primary!')}>
				Primary Button
			</Button>
			<Text>Secondary</Text>
			<Button
				type="secondary"
				touchEffect="none"
				onPress={() => console.log('press Secondary!')}
			>
				Secondary Button
			</Button>
			<Text>Tertiary</Text>
			<Button type="tertiary" onPress={() => console.log('press Tertiary!')}>
				Tertiary Button
			</Button>
			<Text>Danger</Text>
			<Button type="danger" onPress={() => console.log('press Danger!')}>
				Danger Button
			</Button>
			<Text>Ghost</Text>
			<Button type="ghost" onPress={() => console.log('press Ghost!')}>
				Primary Button
			</Button>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: white;
	padding: 0 10px;
`;

const TitelText = styled.Text`
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: bold;
`;

const Text = styled.Text`
	margin: 10px 0 5px 0;
`;
