import { createContext, useContext, useState, useCallback } from 'react';

import { theme as appTheme } from '../styles';
import { Theme } from '../types';

type ThemeType = 'light' | 'dark';

interface ThemeContextData {
	theme: Theme;
	themeType: ThemeType;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [themeType, setThemeType] = useState<ThemeType>('light');

	// Aqui futuramente podemos ter lógica para alternar as cores do tema baseado no themeType
	const theme = appTheme;

	const toggleTheme = useCallback(() => {
		setThemeType(prev => (prev === 'light' ? 'dark' : 'light'));
	}, []);

	return (
		<ThemeContext.Provider value={{
			theme,
			themeType,
			toggleTheme
		}}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
