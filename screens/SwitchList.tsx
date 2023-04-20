import React, { useState } from 'react';
import styled from 'styled-components/native';
import Switch from '../components/Switch';

export default function SwitchList() {
	const [value, setValue] = useState(false);
	const [value2, setValue2] = useState(true);
	const [value3, setValue3] = useState(false);

	return (
		<SwitchListContainer>
			<Text>Test</Text>
			<Switch value={value} onPress={() => setValue(prev => !prev)} />
			<Text>On</Text>
			<Switch value={value2} onPress={() => setValue2(prev => !prev)} />
			<Text>Off</Text>
			<Switch value={value3} onPress={() => setValue3(prev => !prev)} />
		</SwitchListContainer>
	);
}

const SwitchListContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: white;
`;

const Text = styled.Text`
	margin: 10px 0;
`;
