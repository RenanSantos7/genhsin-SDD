import { StyleSheet } from 'react-native';

import { Theme } from '../../types';

export default function createStyles(theme: Theme) {
	return StyleSheet.create({
		content: {
			flex: 1,
			padding: theme.sizes.spacing.md,
		},
		section: {
			marginBottom: theme.sizes.spacing.lg,
		},
		sectionTitle: {
			fontSize: theme.sizes.text.lg,
			fontWeight: 'bold',
			color: theme.colors.text.dark,
			marginBottom: theme.sizes.spacing.sm,
		},
		characterList: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: theme.sizes.spacing.sm,
		},
		characterItem: {
			width: '48%',
			backgroundColor: theme.colors.background.dark,
			padding: theme.sizes.spacing.md,
			borderRadius: theme.sizes.borderRadius.sm,
			borderWidth: 1,
			borderColor: theme.colors.text.light,
			alignItems: 'center',
		},
		characterName: {
			fontSize: theme.sizes.text.md,
			fontWeight: 'bold',
			color: theme.colors.text.dark,
			marginBottom: 4,
			textAlign: 'center',
		},
		characterLevel: {
			fontSize: theme.sizes.text.sm,
			color: theme.colors.text.light,
		},
		emptyText: {
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.light,
			textAlign: 'center',
			marginTop: theme.sizes.spacing.xl,
		},
		button: {
			backgroundColor: theme.colors.primary.main,
			padding: theme.sizes.spacing.md,
			borderRadius: theme.sizes.borderRadius.sm,
			alignItems: 'center',
			marginTop: 'auto',
		},
		buttonText: {
			color: theme.colors.background.dark,
			fontSize: theme.sizes.text.md,
			fontWeight: 'bold',
		},
	});
}
