import React from 'react';
import styled from 'styled-components/native';
import Avatar from './Avatar';
import { brandColor } from '../styles/theme';
import { gray } from '../styles/palette';

interface RankProps {
	uri: string;
	ranking: number;
	rankChange: number;
	name: string;
	point: number;
}

export default function Rank({
	uri,
	ranking,
	rankChange,
	name,
	point,
}: RankProps) {
	return (
		<RankContainer>
			<RankingWrapper>
				<RankingText>{ranking}</RankingText>
				<TitleText>RANKING</TitleText>
			</RankingWrapper>
			<ProfileWrapper>
				<TextWrapper>
					<NameText>{name}</NameText>
					<PointText>{point}</PointText>
				</TextWrapper>
				<Avatar uri={uri} />
			</ProfileWrapper>
		</RankContainer>
	);
}

const RankContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 80px;

	border-left: 3px solid ${brandColor.primary};
`;

const RankingWrapper = styled.View`
	flex: 1;
	height: 100%;
	background-color: ${gray[900]};
`;

const RankingText = styled.Text`
	color: ${brandColor.primary};
	font-size: 30px;
	font-weight: 600;
`;

const TitleText = styled.Text`
	color: ${brandColor.primary};
`;

const ProfileWrapper = styled.View`
	flex: 2;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	padding: 0 10px;
	background-color: ${gray[800]};
`;

const TextWrapper = styled.View``;

const NameText = styled.Text``;
const PointText = styled.Text``;
