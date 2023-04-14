import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Root from './navigation/Root';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
	return (
		<NavigationContainer>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.select({ ios: 'padding' })}
			>
				<Root />
			</KeyboardAvoidingView>
		</NavigationContainer>
	);
}
