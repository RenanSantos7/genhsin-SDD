import { useEffect } from 'react';

import {
	View,
	Text,
	TouchableOpacity,
	Alert,
} from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useCharacters } from '../../context/charactersContext';
import { useTheme } from '../../context/themeContext';
import { RootStackParamList } from '../../routes/app.routes';
import { Team } from '../../types';
import isTruthy from '../../utils/isTruthy';
import { schema, FormData } from './schema';
import createStyles from './styles';

type TeamFormRouteProp = RouteProp<RootStackParamList, 'TeamForm'>;

export default function TeamForm() {
	const navigation = useNavigation();
	const route = useRoute<TeamFormRouteProp>();
	const { teamId } = route.params || {};

	const { theme } = useTheme();
	const styles = createStyles(theme);
	const { characters, teams, addTeam, updateTeam } = useCharacters();

	const isEditing = isTruthy(teamId);
	const existingTeam = teams.find(t => t.id === teamId);

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			teamName: '',
			members: [],
		},
	});

	useEffect(() => {
		if (isEditing && existingTeam) {
			setValue('teamName', existingTeam.teamName);
			setValue('members', existingTeam.members);
		}
	}, [isEditing, existingTeam, setValue]);

	function onSubmit(data: FormData) {
		const teamData: Team = {
			id: isEditing && existingTeam ? existingTeam.id : uuidv4(),
			teamName: data.teamName,
			members: data.members,
		};

		if (isEditing) {
			updateTeam(teamData);
			Alert.alert('Sucesso', 'Time atualizado com sucesso!');
		} else {
			addTeam(teamData);
			Alert.alert('Sucesso', 'Time criado com sucesso!');
		}
		navigation.goBack();
	}

	function toggleMember(memberId: string, currentMembers: string[], onChange: (value: string[]) => void) {
		if (currentMembers.includes(memberId)) {
			onChange(currentMembers.filter(id => id !== memberId));
		} else {
			if (currentMembers.length >= 4) {
				Alert.alert('Limite atingido', 'Um time pode ter no máximo 4 personagens.');
				return;
			}
			onChange([...currentMembers, memberId]);
		}
	}

	return (
		<ScreenWrapper
			title={isEditing ? 'Editar Time' : 'Novo Time'}
			canGoBack
		>
			<View style={styles.content}>
				<Input
					control={control}
					name='teamName'
					label='Nome do Time'
					placeholder='Ex: Time de Exploração'
				/>

				<Text style={styles.sectionTitle}>Membros do Time</Text>
				
				<Controller
					control={control}
					name='members'
					render={({ field: { value, onChange } }) => (
						<View>
							<View style={styles.characterList}>
								{characters.map(character => {
									const isSelected = value.includes(character.id);
									return (
										<TouchableOpacity
											key={character.id}
											style={[
												styles.characterItem,
												isSelected && styles.characterItemSelected,
											]}
											onPress={() => toggleMember(character.id, value, onChange)}
											activeOpacity={0.7}
										>
											<Text style={styles.characterName}>
												{character.characterName}
											</Text>
											<Text style={styles.characterLevel}>
												Lv. {character.level}
											</Text>
										</TouchableOpacity>
									);
								})}
							</View>
							{errors.members && (
								<Text style={styles.errorText}>{errors.members.message}</Text>
							)}
						</View>
					)}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={handleSubmit(onSubmit)}
				>
					<Text style={styles.buttonText}>
						{isEditing ? 'Salvar Alterações' : 'Criar Time'}
					</Text>
				</TouchableOpacity>
			</View>
		</ScreenWrapper>
	);
}
