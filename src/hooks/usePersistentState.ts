import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function usePersistentState<T>(
	key: string,
	initialState: T,
): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState<T>(initialState);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		async function loadStorageData() {
			try {
				const storageValue = await AsyncStorage.getItem(key);
				if (storageValue) {
					setState(JSON.parse(storageValue));
				}
			} catch (error) {
				console.error('Error loading data from storage', error);
			} finally {
				setIsLoaded(true);
			}
		}
		loadStorageData();
	}, [key]);

	useEffect(() => {
		if (isLoaded) {
			async function saveData() {
				try {
					await AsyncStorage.setItem(key, JSON.stringify(state));
				} catch (error) {
					console.error('Error saving data to storage', error);
				}
			}
			saveData();
		}
	}, [key, state, isLoaded]);

	return [state, setState];
}
