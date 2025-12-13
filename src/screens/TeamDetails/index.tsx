import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import ScreenWrapper from '../../components/ScreenWrapper';
import { useCharacters } from '../../context/charactersContext';
import { useTheme } from '../../context/themeContext';
import { RootStackParamList } from '../../routes/app.routes';
import getStyles from './styles';

type TeamDetailsRouteProp = RouteProp<RootStackParamList, 'TeamDetails'>;

export default function TeamDetails() {
	const navigation = useNavigation<any>();
	const route = useRoute<TeamDetailsRouteProp>();
	const { teamId } = route.params;

	const { theme } = useTheme();
	const styles = getStyles(theme);
	const { teams, characters } = useCharacters();

	const team = teams.find(t => t.id === teamId);

	if (!team) {
		return (
			<ScreenWrapper title='Detalhes' canGoBack>
				<View style={styles.content}>
					<Text style={styles.emptyText}>Time não encontrado.</Text>
				</View>
			</ScreenWrapper>
		);
	}

	const members = characters.filter(c => team.members.includes(c.id));

	function handleEdit() {
		navigation.navigate('TeamForm', { teamId: team?.id });
	}

	return (
		<ScreenWrapper title={team.teamName} canGoBack>
			<View style={styles.content}>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Membros ({members.length}/4)</Text>
					
					{members.length > 0 ? (
						<View style={styles.characterList}>
							{members.map(character => (
								<View key={character.id} style={styles.characterItem}>
									<Text style={styles.characterName}>
										{character.characterName}
									</Text>
									<Text style={styles.characterLevel}>
										Lv. {character.level}
									</Text>
								</View>
							))}
						</View>
					) : (
						<Text style={styles.emptyText}>
							Nenhum membro neste time.
						</Text>
					)}
				</View>

				<TouchableOpacity style={styles.button} onPress={handleEdit}>
					<Text style={styles.buttonText}>Editar Time</Text>
				</TouchableOpacity>
			</View>
		</ScreenWrapper>
	);
}
