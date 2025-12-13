import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharacterDetails from '../screens/CharacterDetails';
import CharacterForm from '../screens/CharacterForm';
import Home from '../screens/Home';
import TeamDetails from '../screens/TeamDetails';
import TeamForm from '../screens/TeamForm';

export type RootStackParamList = {
	Home: undefined;
	CharacterForm: { characterId?: string };
	CharacterDetails: { characterId: string };
	TeamForm: { teamId?: string };
	TeamDetails: { teamId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='CharacterForm' component={CharacterForm} />
			<Stack.Screen
				name='CharacterDetails'
				component={CharacterDetails}
			/>
			<Stack.Screen name='TeamForm' component={TeamForm} />
			<Stack.Screen name='TeamDetails' component={TeamDetails} />
		</Stack.Navigator>
	);
}
