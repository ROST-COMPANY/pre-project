import React, { useState } from 'react';
import styled from 'styled-components/native';
import Dropdown, { DropdownMenuList } from '../components/Dropdown';

export default function DropdownList() {
	const [menu, setMenu] = useState<DropdownMenuList>([
		{ id: 1, name: 'Dropdown menu', selected: true },
		{ id: 2, name: 'Option 1', selected: false },
		{ id: 3, name: 'Option 2', selected: false },
		{ id: 4, name: 'Option 3', selected: false },
		{ id: 5, name: 'Option 4', selected: false },
		{ id: 6, name: 'Option 5', selected: false },
	]);

	return (
		<DropdownListContainer>
			<Text>normal</Text>
			<Dropdown data={menu} setMenu={setMenu} />
			<Text>이부분은</Text>
			<Text>가려서</Text>
			<Text>안보입니다.</Text>
		</DropdownListContainer>
	);
}

const DropdownListContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: white;
`;

const Text = styled.Text`
	margin: 10px 0;
`;
