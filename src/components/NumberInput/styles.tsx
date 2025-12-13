import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export function createStyles(theme: Theme) {
	return StyleSheet.create({
		container: {
			marginBottom: theme.sizes.spacing.md,
		},
		label: {
			fontSize: theme.sizes.text.sm,
			fontWeight: '500',
			color: theme.colors.text.main,
			marginBottom: theme.sizes.spacing.xsm,
		},
		row: {
			flexDirection: 'row',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: theme.colors.gray[300],
			borderRadius: theme.sizes.borderRadius.md,
			backgroundColor: theme.colors.background.dark,
			overflow: 'hidden',
		},
		rowError: {
			borderColor: theme.colors.error.main,
		},
		button: {
			padding: theme.sizes.spacing.sm,
			backgroundColor: theme.colors.gray[100],
			alignItems: 'center',
			justifyContent: 'center',
			width: 40,
			height: '100%',
		},
		buttonText: {
			fontSize: theme.sizes.text.lg,
			fontWeight: 'bold',
			color: theme.colors.primary.main,
		},
		input: {
			flex: 1,
			textAlign: 'center',
			padding: theme.sizes.spacing.sm,
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.main,
		},
		errorText: {
			color: theme.colors.error.main,
			fontSize: theme.sizes.text.xsm,
			marginTop: theme.sizes.spacing.xsm,
		},
	});
}
