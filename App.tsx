import React from 'react';

import 'react-native-get-random-values';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CharactersProvider from './src/context/charactersContext';
import Routes from './src/routes';
import ThemeProvider from './src/context/themeContext';

export default function App() {
	return (
		<SafeAreaProvider>
			<KeyboardProvider>
				<ThemeProvider>
					<CharactersProvider>
						<Routes />
					</CharactersProvider>
				</ThemeProvider>
			</KeyboardProvider>
		</SafeAreaProvider>
	);
}
