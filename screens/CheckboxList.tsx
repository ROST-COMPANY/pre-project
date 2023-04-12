import React, { useState } from 'react';
import styled from 'styled-components/native';
import Checkbox from '../components/Checkbox';

export default function CheckboxList() {
	const [one, setOne] = useState(false);
	const [two, setTwo] = useState(false);

	const handlePressOne = () => {
		setOne(prev => !prev);
	};

	const handlePressTow = () => {
		setTwo(prev => !prev);
	};

	return (
		<CheckboxListContainer>
			<Text>tester(none)</Text>
			<Checkbox
				checked={two}
				label="테스트"
				touchEffect="none"
				onPress={handlePressTow}
			/>
			<Text>tester(opcity)</Text>
			<Checkbox
				checked={one}
				label="테스트"
				touchEffect="opacity"
				onPress={handlePressOne}
			/>
			<Text>unchecked</Text>
			<Checkbox checked={false} label="unchecked" />
			<Text>checked</Text>
			<Checkbox checked label="checked" />
		</CheckboxListContainer>
	);
}

const CheckboxListContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const Text = styled.Text`
	margin: 10px 0;
`;
