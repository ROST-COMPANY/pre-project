import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function TextInputList() {
	return (
		<TextInputListContainer>
			<Text>normal</Text>
			<Text>with icon</Text>
		</TextInputListContainer>
	);
}

const TextInputListContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const Text = styled.Text`
	margin: 10px 0;
`;
