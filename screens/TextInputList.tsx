import React, { useState } from 'react';
import styled from 'styled-components/native';
import TextInput from '../components/TextInput';
import LockIcon from '../assets/icon/LockIcon';
import { gray } from '../styles/palette';

export default function TextInputList() {
	const [input, setInput] = useState('');
	const [input2, setInput2] = useState('');

	const handleChangeTextInput = (text: string) => {
		setInput(text);
	};

	const handleChangeTextInput2 = (text: string) => {
		setInput2(text);
	};

	return (
		<TextInputListContainer>
			<Text>normal</Text>
			<TextInput
				value={input}
				placeholder="아이디"
				description="email"
				keyboardType="email-address"
				returnKeyType="done"
				width="300px"
				onChangeText={handleChangeTextInput}
			/>
			<Text>with icon</Text>
			<TextInput
				value={input2}
				icon={<LockIcon fill={gray[700]} />}
				placeholder="비밀번호"
				description="영문, 숫자 조합 8~12자리"
				returnKeyType="done"
				secureTextEntry
				width="300px"
				onChangeText={handleChangeTextInput2}
			/>
		</TextInputListContainer>
	);
}

const TextInputListContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: white;
`;

const Text = styled.Text`
	margin: 10px 0;
`;
