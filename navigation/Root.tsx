import { createDrawerNavigator } from '@react-navigation/drawer';
import { brandColor } from '../styles/theme';

import ButtonList from '../screens/ButtonList';
import CheckboxList from '../screens/CheckboxList';
import TextInputList from '../screens/TextInputList';
import LogoIconList from '../screens/LogoIconList';
import DropdownList from '../screens/DropdownList';
import SwitchList from '../screens/SwitchList';
import TopTabList from '../screens/TopTabList';

const Drawer = createDrawerNavigator();

export default function Root() {
	// const pallete = colors[useColorScheme() as 'light' | 'dark'];

	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: brandColor.primary },
				headerTintColor: 'white',
				drawerActiveTintColor: brandColor.primary,
				drawerType: 'front',
			}}
			initialRouteName="TobTab"
		>
			<Drawer.Screen name="Logo&Icon" component={LogoIconList} />
			<Drawer.Screen name="Button" component={ButtonList} />
			<Drawer.Screen name="Checkbox" component={CheckboxList} />
			<Drawer.Screen name="TextInput" component={TextInputList} />
			<Drawer.Screen name="Dropdown" component={DropdownList} />
			<Drawer.Screen name="Switch" component={SwitchList} />
			<Drawer.Screen name="TobTab 2개" component={TopTabList} />
			<Drawer.Screen name="TobTab 3개" component={TopTabList} />
		</Drawer.Navigator>
	);
}
