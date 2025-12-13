import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	ViewStyle,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../../context/themeContext';
import { createStyles } from './styles';

interface ScreenWrapperProps {
	children: React.ReactNode;
	title: string;
	canGoBack?: boolean;
	contentStyle?: ViewStyle;
}

export default function ScreenWrapper({
	children,
	title,
	canGoBack = false,
	contentStyle,
}: ScreenWrapperProps) {
	const { theme } = useTheme();
	const styles = createStyles(theme);
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
			<StatusBar style='auto' />
			<View style={styles.header}>
				{canGoBack && (
					<TouchableOpacity
						onPress={handleGoBack}
						style={styles.backButton}
					>
						<Text style={styles.backButtonText}>{'<'}</Text>
					</TouchableOpacity>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>

			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				style={{ flex: 1 }}
			>
				<ScrollView
					contentContainerStyle={[
						styles.contentContainer,
						contentStyle,
					]}
					showsVerticalScrollIndicator={false}
				>
					{children}
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
