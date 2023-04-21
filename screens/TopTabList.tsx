import React from 'react';
import TopTab, { TabScreenList } from '../components/TopTab';
import { Text, View } from 'react-native';

function EmptyScreen({ route }: { route: any }) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<Text>{route.name}</Text>
		</View>
	);
}

const TAB_SCREENS2: TabScreenList = [
	{ name: 'Tab1', component: EmptyScreen },
	{ name: 'Tab2', component: EmptyScreen },
];

const TAB_SCREENS3: TabScreenList = [
	{ name: 'Tab1', component: EmptyScreen },
	{ name: 'Tab2', component: EmptyScreen },
	{ name: 'Tab3', component: EmptyScreen },
];

export default function TopTabList({ route }: { route: any }) {
	return (
		<>
			<TopTab
				screens={route.name === 'TobTab 2개' ? TAB_SCREENS2 : TAB_SCREENS3}
			/>
		</>
	);
}
