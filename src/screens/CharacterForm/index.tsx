import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { useForm } from 'react-hook-form';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';

import { Character } from '../../types';
import { RootStackParamList } from '../../routes/app.routes';
import { useCharacters } from '../../context/charactersContext';
import { useTheme } from '../../context/themeContext';
import { schema, FormData } from './schema';
import Input from '../../components/Input';
import NumberInput from '../../components/NumberInput';
import ScreenWrapper from '../../components/ScreenWrapper';
import isTruthy from '../../utils/isTruthy';
import getStyles from './styles';

type CharacterFormRouteProp = RouteProp<RootStackParamList, 'CharacterForm'>;

export default function CharacterForm() {
	const navigation = useNavigation();
	const route = useRoute<CharacterFormRouteProp>();
	const { characterId } = route.params || {};

	const { theme } = useTheme();
	const styles = getStyles(theme);
	const { characters, addCharacter, updateCharacter } = useCharacters();

	const isEditing = isTruthy(characterId);
	const existingCharacter = characters.find(c => c.id === characterId);

	const { control, handleSubmit, setValue } = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			characterName: '',
			level: 1,
			constellation: 0,
			weaponName: '',
			weaponStars: 4,
			weaponLevel: 1,
			weaponRefinement: 1,
			talentNormal: 1,
			talentElemental: 1,
			talentBurst: 1,
		},
	});

	useEffect(() => {
		if (isEditing && existingCharacter) {
			setValue('characterName', existingCharacter.characterName);
			setValue('level', existingCharacter.level);
			setValue('constellation', existingCharacter.constellation);
			setValue('weaponName', existingCharacter.weapon.name);
			setValue('weaponStars', existingCharacter.weapon.stars);
			setValue('weaponLevel', existingCharacter.weapon.level);
			setValue('weaponRefinement', existingCharacter.weapon.refinement);
			setValue('talentNormal', existingCharacter.talents.normal);
			setValue('talentElemental', existingCharacter.talents.elemental);
			setValue('talentBurst', existingCharacter.talents.burst);
		}
	}, [isEditing, existingCharacter, setValue]);

	function onSubmit(data: FormData) {
		const characterData: Character = {
			id:
				isEditing && existingCharacter
					? existingCharacter.id
					: uuidv4(),
			characterName: data.characterName,
			level: data.level,
			constellation: data.constellation as 0 | 1 | 2 | 3 | 4 | 5 | 6,
			weapon: {
				name: data.weaponName,
				stars: data.weaponStars as 3 | 4 | 5,
				level: data.weaponLevel,
				refinement: data.weaponRefinement as 1 | 2 | 3 | 4 | 5,
			},
			talents: {
				normal: data.talentNormal,
				elemental: data.talentElemental,
				burst: data.talentBurst,
			},
			artifacts:
				isEditing && existingCharacter
					? existingCharacter.artifacts
					: [],
		};

		if (isEditing) {
			updateCharacter(characterData);
			Alert.alert('Sucesso', 'Personagem atualizado com sucesso!');
		} else {
			addCharacter(characterData);
			Alert.alert('Sucesso', 'Personagem criado com sucesso!');
		}
		navigation.goBack();
	}

	return (
		<ScreenWrapper
			title={isEditing ? 'Editar Personagem' : 'Novo Personagem'}
			canGoBack
		>
			<View style={styles.content}>
				<Text style={styles.sectionTitle}>Dados do Personagem</Text>

				<Input
					control={control}
					name='characterName'
					label='Nome'
					placeholder='Ex: Hu Tao'
				/>

				<View style={styles.row}>
					<View style={styles.halfInput}>
						<NumberInput
							control={control}
							name='level'
							label='Nível (1-90)'
							min={1}
							max={90}
						/>
					</View>

					<View style={styles.halfInput}>
						<NumberInput
							control={control}
							name='constellation'
							label='Constelação (0-6)'
							min={0}
							max={6}
						/>
					</View>
				</View>

				<Text style={styles.sectionTitle}>Arma</Text>

				<Input
					control={control}
					name='weaponName'
					label='Nome da Arma'
					placeholder='Ex: Homa Staff'
				/>

				<View style={styles.row}>
					<View style={styles.thirdInput}>
						<NumberInput
							control={control}
							name='weaponStars'
							label='Estrelas'
							min={3}
							max={5}
						/>
					</View>

					<View style={styles.thirdInput}>
						<NumberInput
							control={control}
							name='weaponLevel'
							label='Nível'
							min={1}
							max={90}
						/>
					</View>

					<View style={styles.thirdInput}>
						<NumberInput
							control={control}
							name='weaponRefinement'
							label='Refino'
							min={1}
							max={5}
						/>
					</View>
				</View>

				<Text style={styles.sectionTitle}>Talentos</Text>

				<View style={styles.row}>
					<View style={styles.thirdInput}>
						<NumberInput
							control={control}
							name='talentNormal'
							label='Normal'
							min={1}
							max={15}
						/>
					</View>

					<View style={styles.thirdInput}>
						<NumberInput
							control={control}
							name='talentElemental'
							label='Elemental'
							min={1}
							max={15}
						/>
					</View>

					<View style={styles.thirdInput}>
						<NumberInput
							control={control}
							name='talentBurst'
							label='Burst'
							min={1}
							max={15}
						/>
					</View>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={handleSubmit(onSubmit)}
				>
					<Text style={styles.buttonText}>
						{isEditing ? 'Salvar Alterações' : 'Criar Personagem'}
					</Text>
				</TouchableOpacity>
			</View>
		</ScreenWrapper>
	);
}
