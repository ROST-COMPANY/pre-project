import { createDrawerNavigator } from '@react-navigation/drawer';
import { brandColor } from '../styles/theme';

import ButtonList from '../screens/ButtonList';
import CheckboxList from '../screens/CheckboxList';
import TextInputList from '../screens/TextInputList';
import LogoIconList from '../screens/LogoIconList';

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
			initialRouteName="TextInput"
		>
			<Drawer.Screen name="Logo&Icon" component={LogoIconList} />
			<Drawer.Screen name="Button" component={ButtonList} />
			<Drawer.Screen name="Checkbox" component={CheckboxList} />
			<Drawer.Screen name="TextInput" component={TextInputList} />
		</Drawer.Navigator>
	);
}
