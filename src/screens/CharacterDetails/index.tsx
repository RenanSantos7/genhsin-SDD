import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import ScreenWrapper from '../../components/ScreenWrapper';
import { useCharacters } from '../../context/charactersContext';
import { useTheme } from '../../context/themeContext';
import { RootStackParamList } from '../../routes/app.routes';
import getStyles from './styles';

type CharacterDetailsRouteProp = RouteProp<RootStackParamList, 'CharacterDetails'>;

export default function CharacterDetails() {
	const navigation = useNavigation<any>();
	const route = useRoute<CharacterDetailsRouteProp>();
	const { characterId } = route.params;

	const { theme } = useTheme();
	const styles = getStyles(theme);
	const { characters } = useCharacters();

	const character = characters.find(c => c.id === characterId);

	if (!character) {
		return (
			<ScreenWrapper title='Detalhes' canGoBack>
				<View style={styles.container}>
					<Text style={styles.emptyText}>Personagem não encontrado.</Text>
				</View>
			</ScreenWrapper>
		);
	}

	function handleEdit() {
		navigation.navigate('CharacterForm', { characterId: character?.id });
	}

	return (
		<ScreenWrapper title={character.characterName} canGoBack>
			<View style={styles.content}>
				
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Atributos Principais</Text>
					<View style={styles.row}>
						<Text style={styles.label}>Nível</Text>
						<Text style={styles.value}>{character.level}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Constelação</Text>
						<Text style={styles.value}>C{character.constellation}</Text>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Arma</Text>
					<View style={styles.row}>
						<Text style={styles.label}>Nome</Text>
						<Text style={styles.value}>{character.weapon.name}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Estrelas</Text>
						<Text style={styles.value}>{'⭐'.repeat(character.weapon.stars)}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Nível</Text>
						<Text style={styles.value}>{character.weapon.level}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Refino</Text>
						<Text style={styles.value}>R{character.weapon.refinement}</Text>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Talentos</Text>
					<View style={styles.row}>
						<Text style={styles.label}>Ataque Normal</Text>
						<Text style={styles.value}>{character.talents.normal}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Habilidade Elemental</Text>
						<Text style={styles.value}>{character.talents.elemental}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Supremo (Burst)</Text>
						<Text style={styles.value}>{character.talents.burst}</Text>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Artefatos</Text>
					{character.artifacts && character.artifacts.length > 0 ? (
						character.artifacts.map((artifact, index) => (
							<View key={index} style={styles.row}>
								<Text style={styles.label}>{artifact.name}</Text>
								<Text style={styles.value}>+{artifact.level}</Text>
							</View>
						))
					) : (
						<Text style={styles.label}>Nenhum artefato equipado.</Text>
					)}
				</View>

				<TouchableOpacity style={styles.editButton} onPress={handleEdit}>
					<Text style={styles.editButtonText}>Editar Personagem</Text>
				</TouchableOpacity>

			</View>
		</ScreenWrapper>
	);
}
