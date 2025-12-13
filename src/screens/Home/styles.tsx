import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export function createStyles(theme: Theme) {
	return StyleSheet.create({
		listContainer: {
			paddingVertical: theme.sizes.spacing.md,
		},
		characterItem: {
			backgroundColor: theme.colors.background.dark,
			padding: theme.sizes.spacing.lg,
			marginBottom: theme.sizes.spacing.sm,
			borderRadius: theme.sizes.borderRadius.md,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			shadowColor: theme.colors.text.dark,
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.1,
			shadowRadius: 3.84,
			elevation: 5,
		},
		characterName: {
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.main,
			fontWeight: '500',
		},
		emptyContainer: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: theme.sizes.spacing.xxl,
		},
		emptyText: {
			fontSize: theme.sizes.text.md,
			color: theme.colors.text.light,
			textAlign: 'center',
		},
		fab: {
			position: 'absolute',
			bottom: theme.sizes.spacing.xxl,
			right: theme.sizes.spacing.xl,
			backgroundColor: theme.colors.primary.main,
			width: 56,
			height: 56,
			borderRadius: 28,
			alignItems: 'center',
			justifyContent: 'center',
			elevation: 6,
			shadowColor: theme.colors.text.dark,
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 0.27,
			shadowRadius: 4.65,
		},
		fabText: {
			fontSize: 24,
			color: theme.colors.background.dark,
			fontWeight: 'bold',
		},
		exportButton: {
			backgroundColor: theme.colors.secondary.main,
			padding: theme.sizes.spacing.md,
			borderRadius: theme.sizes.borderRadius.md,
			alignItems: 'center',
			marginBottom: theme.sizes.spacing.md,
		},
		exportButtonText: {
			color: theme.colors.background.dark,
			fontWeight: 'bold',
			fontSize: theme.sizes.text.md,
		},
	});
}
