import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export function createStyles(theme: Theme) {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background.main,
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingHorizontal: theme.sizes.spacing.lg,
			paddingVertical: theme.sizes.spacing.md,
		},
		backButton: {
			marginRight: theme.sizes.spacing.md,
			padding: theme.sizes.spacing.xsm,
		},
		backButtonText: {
			fontSize: theme.sizes.text.xl,
			color: theme.colors.text.main,
			fontWeight: 'bold',
		},
		title: {
			fontSize: theme.sizes.text.lg,
			fontWeight: 'bold',
			color: theme.colors.text.main,
		},
		contentContainer: {
			flex: 1,
			paddingHorizontal: theme.sizes.spacing.lg,
			paddingBottom: theme.sizes.spacing.xxl,
		},
	});
}
