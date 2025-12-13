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
		input: {
			borderWidth: 1,
			borderColor: theme.colors.gray[300],
			borderRadius: theme.sizes.borderRadius.md,
			padding: theme.sizes.spacing.sm,
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.main,
			backgroundColor: theme.colors.background.dark,
		},
		inputError: {
			borderColor: theme.colors.error.main,
		},
		errorText: {
			color: theme.colors.error.main,
			fontSize: theme.sizes.text.xsm,
			marginTop: theme.sizes.spacing.xsm,
		},
	});
}
