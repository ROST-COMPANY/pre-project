import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Dropdown, { DropdownMenuList } from '../components/Dropdown';

export default function ModalList() {
	const [showSingle, setShowSingle] = useState(false);
	const [showDouble, setShowDouble] = useState(false);

	const [menu, setMenu] = useState<DropdownMenuList>([
		{ id: 1, name: 'Dropdown menu', selected: true },
		{ id: 2, name: 'Option 1', selected: false },
		{ id: 3, name: 'Option 2', selected: false },
		{ id: 4, name: 'Option 3', selected: false },
		{ id: 5, name: 'Option 4', selected: false },
		{ id: 6, name: 'Option 5', selected: false },
	]);

	return (
		<ModalListContainer>
			<Text>Single</Text>
			<Button touchEffect="none" onPress={() => setShowSingle(true)}>
				show single
			</Button>
			<Text>Double</Text>
			<Button touchEffect="none" onPress={() => setShowDouble(true)}>
				show double
			</Button>

			<Modal
				show={showSingle}
				titleText="Modal 제목"
				contentText="여기에 본문 텍스트를 입력합니다."
				buttonText="확인"
				onPressButton={() => setShowSingle(false)}
				onPressDim={() => setShowSingle(false)}
			/>
			<Modal
				show={showDouble}
				titleText="Double Modal 제목"
				bodyContent={<Dropdown data={menu} setMenu={setMenu} />}
				contentText={`텍스트 뿐만 아니라 컴포넌트도 이 위치에 
배치할 수 있습니다. 

이외에도 버튼 text를 변경하거나, 버튼 외의 
컴포넌트를 아래 위치에 배치할 수 있습니다.
`}
				buttonText={['변경가능', '닫기']}
				onPressButton={[() => setShowDouble(false), () => setShowDouble(false)]}
				onPressDim={() => setShowDouble(false)}
			/>
		</ModalListContainer>
	);
}

const ModalListContainer = styled.View`
	flex: 1;
	align-items: center;
	padding: 20px;
	background-color: white;
`;

const Text = styled.Text`
	margin: 10px 0;
`;
