import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export default function getStyles(theme: Theme) {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background.main,
		},
		content: {
			paddingTop: theme.sizes.spacing.md,
		},
		section: {
			marginBottom: theme.sizes.spacing.lg,
			backgroundColor: theme.colors.background.dark,
			borderRadius: theme.sizes.borderRadius.md,
			padding: theme.sizes.spacing.md,
			elevation: 2,
			shadowColor: theme.colors.text.dark,
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
		},
		sectionTitle: {
			fontSize: theme.sizes.text.lg,
			fontWeight: 'bold',
			color: theme.colors.primary.main,
			marginBottom: theme.sizes.spacing.md,
			borderBottomWidth: 1,
			borderBottomColor: theme.colors.gray[200],
			paddingBottom: theme.sizes.spacing.xsm,
		},
		row: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: theme.sizes.spacing.sm,
		},
		label: {
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.light,
			fontWeight: '500',
		},
		value: {
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.main,
			fontWeight: 'bold',
		},
		editButton: {
			backgroundColor: theme.colors.primary.main,
			padding: theme.sizes.spacing.md,
			borderRadius: theme.sizes.borderRadius.md,
			alignItems: 'center',
			marginTop: theme.sizes.spacing.md,
		},
		editButtonText: {
			color: theme.colors.background.dark,
			fontSize: theme.sizes.text.md,
			fontWeight: 'bold',
		},
		emptyText: {
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.light,
			textAlign: 'center',
			marginTop: theme.sizes.spacing.xl,
		},
	});
}
