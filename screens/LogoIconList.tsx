import React from 'react';
import styled from 'styled-components/native';
import LogoIcon from '../assets/icon/LogoIcon';
import { brandColor, fontSize, fontWeight } from '../styles/theme';
import AccountIcon from '../assets/icon/AccountIcon';
import LockIcon from '../assets/icon/LockIcon';
import AlarmIcon from '../assets/icon/AlarmIcon';

export default function LogoIconList() {
	return (
		<LogoIconListContainer>
			<TitleText>Logo</TitleText>
			<Row>
				<Column>
					<Text>light theme</Text>
					<LightBack>
						<LogoIcon width={100} />
					</LightBack>
				</Column>
				<Column>
					<Text>dark theme</Text>
					<DarkBack>
						<LogoIcon width={100} />
					</DarkBack>
				</Column>
			</Row>
			<TitleText>Icon</TitleText>
			<Row>
				<Column>
					<AccountIcon />
					<Text>Account</Text>
				</Column>
				<Column>
					<LockIcon />
					<Text>Lock</Text>
				</Column>
				<Column>
					<AlarmIcon />
					<Text>Alarm</Text>
				</Column>
			</Row>
		</LogoIconListContainer>
	);
}

const LogoIconListContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const TitleText = styled.Text`
	margin: 10px;
	font-size: ${fontSize.large};
	font-weight: ${fontWeight.bold};
`;

const Row = styled.View`
	flex-direction: row;
	gap: 10px;
`;

const Column = styled.View`
	align-items: center;
`;

const LightBack = styled.View`
	padding: 10px 20px;
`;

const DarkBack = styled.View`
	padding: 10px 20px;
	background-color: black;
`;

const Text = styled.Text`
	margin: 5px 0;
`;
