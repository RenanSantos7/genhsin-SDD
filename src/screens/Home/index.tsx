import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ScreenWrapper from '../../components/ScreenWrapper';
import { useCharacters } from '../../context/charactersContext';
import { useTheme } from '../../context/themeContext';
import { RootStackParamList } from '../../routes/app.routes';
import { createStyles } from './styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
	const { characters } = useCharacters();
	const { theme } = useTheme();
	const styles = createStyles(theme);
	const navigation = useNavigation<NavigationProps>();

	function handleNavigateToDetails(characterId: string) {
		navigation.navigate('CharacterDetails', {
			characterId,
		});
	}

	function handleNavigateToForm() {
		navigation.navigate('CharacterForm', {});
	}

	function handleExportJson() {
		// TODO: Implementar exportação
		console.log('Exportar JSON');
	}

	return (
		<ScreenWrapper title='Genshin List'>
			{characters.length > 0 && (
				<TouchableOpacity
					style={styles.exportButton}
					onPress={handleExportJson}
				>
					<Text style={styles.exportButtonText}>Exportar JSON</Text>
				</TouchableOpacity>
			)}

			{characters.length === 0 ? (
				<View style={styles.emptyContainer}>
					<Text style={styles.emptyText}>
						Ainda não há personagem cadastrado.
					</Text>
				</View>
			) : (
				<View style={styles.listContainer}>
					{characters.map(item => (
						<TouchableOpacity
							key={item.id}
							style={styles.characterItem}
							onPress={() => handleNavigateToDetails(item.id)}
						>
							<Text style={styles.characterName}>
								{item.characterName}
							</Text>
							<Text
								style={{
									color: theme.colors.text.light,
								}}
							>
								{'>'}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			)}

			<TouchableOpacity style={styles.fab} onPress={handleNavigateToForm}>
				<Text style={styles.fabText}>+</Text>
			</TouchableOpacity>
		</ScreenWrapper>
	);
}
