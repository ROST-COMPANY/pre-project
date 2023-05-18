import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../components/Avatar';
// import Rank from '../components/Rank';

const uri =
	'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg';

export default function AvatarList() {
	return (
		<ButtonListContainer>
			<Text>small</Text>
			<Avatar uri={uri} type="small" />
			<Text>normal</Text>
			<Avatar uri={uri} />
			<Text>large</Text>
			<Avatar uri={uri} type="large" />
			{/* <Text>rank</Text> */}
			{/* <Rank ranking={1} uri={uri} name="홀길동" point={90} rankChange={0} /> */}
		</ButtonListContainer>
	);
}

const ButtonListContainer = styled.View`
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
