import {
	MaterialTopTabNavigationOptions,
	createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import { brandColor, fontSize, fontWeight } from '../styles/theme';
import { Dimensions } from 'react-native';
import { FontWeight } from '../types/reactCommon.type';

const MTopTab = createMaterialTopTabNavigator();

export interface ITabScreen {
	name: string;
	component: any;
}

export type TabScreenList = ITabScreen[];

interface TopTabProps {
	screens: TabScreenList;
	initialRouteName?: string;
	screenOptions?: MaterialTopTabNavigationOptions;
}

export default function TopTab({
	screens,
	initialRouteName,
	screenOptions,
}: TopTabProps) {
	const tabSize = Dimensions.get('window').width / screens.length;

	return (
		<MTopTab.Navigator
			initialRouteName={initialRouteName}
			screenOptions={{
				animationEnabled: false,
				swipeEnabled: false,
				lazy: true,
				tabBarLabelStyle: {
					marginBottom: -2,
					fontSize: +fontSize.medium.slice(0, -2),
					fontWeight: fontWeight.bold as FontWeight,
					textTransform: 'none',
				},
				tabBarActiveTintColor: brandColor.primary,
				tabBarIndicatorStyle: {
					position: 'absolute',
					left: tabSize * 0.05,
					bottom: -1,
					width: 0.9 * tabSize,
					height: '95%',
					backgroundColor: 'transparent',
					borderColor: brandColor.primary,
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					borderWidth: 1,
					borderBottomColor: 'white',
				},
				...screenOptions,
			}}
			sceneContainerStyle={{
				borderTopColor: brandColor.primary,
				borderTopWidth: 1,
			}}
		>
			{screens.map(menu => (
				<MTopTab.Screen
					key={menu.name}
					name={menu.name}
					component={menu.component}
				></MTopTab.Screen>
			))}
		</MTopTab.Navigator>
	);
}
