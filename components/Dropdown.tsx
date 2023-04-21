import React, { useState } from 'react';
import styled from 'styled-components/native';
import { brandColor } from '../styles/theme';
import UpIcon from '../assets/icon/UpIcon';
import DownIcon from '../assets/icon/DownIcon';

export interface IDropdownMenu {
	id: number | string;
	name: string;
	selected: boolean;
}

export type DropdownMenuList = IDropdownMenu[];

interface DropdownProps {
	data: DropdownMenuList;
	width?: string;
	height?: string;
	setMenu: React.Dispatch<React.SetStateAction<DropdownMenuList>>;
}

export default function Dropdown({
	data,
	width = '100%',
	setMenu,
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handlePressOpen = () => {
		setIsOpen(prev => !prev);
	};

	const handlePressMenu = (id: number | string) => {
		const newList = data.map(menu =>
			menu.id === id
				? { ...menu, selected: true }
				: { ...menu, selected: false },
		);

		setMenu(() => newList);
		setIsOpen(() => false);
	};

	return (
		<Container width={width}>
			<Content style={{ elevation: 3 }} width={width} isOpen={isOpen}>
				<Touchable onPress={handlePressOpen}>
					<Item>
						<SelectedItemText isOpen={isOpen}>
							{data.find(menu => menu.selected)?.name}
						</SelectedItemText>
						{isOpen ? (
							<DownIcon fill={brandColor.primary} />
						) : (
							<UpIcon fill={brandColor.primary} />
						)}
					</Item>
				</Touchable>
				{isOpen && (
					<>
						<Dividor />
						<MenuListScrollView length={data.length}>
							{data
								.filter(menu => !menu.selected)
								.map(menu => (
									<Touchable
										key={menu.id}
										onPress={() => handlePressMenu(menu.id)}
									>
										<Item>
											<ItemText>{menu.name}</ItemText>
										</Item>
									</Touchable>
								))}
						</MenuListScrollView>
					</>
				)}
			</Content>
		</Container>
	);
}

interface ContainerProps {
	width: string;
}

const Container = styled.View<ContainerProps>`
	position: relative;
	width: ${({ width }) => width};
	height: 52px;
	background-color: white;
	z-index: 3000;
`;

interface ContentProps {
	width: string;
	isOpen: boolean;
}

const Content = styled.View<ContentProps>`
	width: ${({ width }) => width};
	padding: 0 12px;
	background-color: white;
	border: 1px solid ${brandColor.primary};
	border-radius: 8px;
	${({ isOpen }) =>
		isOpen ? 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;' : undefined};
`;

const Touchable = styled.TouchableWithoutFeedback``;

const Item = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 52px;
	padding: 5px 0;
`;

interface SelectedItemTextProps {
	isOpen: boolean;
}

const SelectedItemText = styled.Text<SelectedItemTextProps>`
	flex: 1;
	color: ${brandColor.primary};
	font-family: 'AppleSDGothicNeo-SemiBold';
	font-size: 18px;
	opacity: ${({ isOpen }) => (isOpen ? 0.5 : 1)};
`;

const ItemText = styled.Text`
	flex: 1;
	color: ${brandColor.primary};
	font-family: 'AppleSDGothicNeo-SemiBold';
	font-size: 18px;
`;

const MenuListScrollView = styled.ScrollView<{ length: number }>`
	width: 100%;
	height: ${({ length }) => {
		switch (length) {
			case 1:
				return '52px';

			case 2:
				return '52px';

			case 3:
				return '104px';

			case 4:
				return '156px';

			default:
				return '185px';
		}
	}};
`;

const Dividor = styled.View`
	width: 100%;
	height: 1px;
	background-color: ${brandColor.primary};
	opacity: 0.5;
`;
