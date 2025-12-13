import { StyleSheet } from 'react-native';
import { Theme } from '../../types';

export default function createStyles(theme: Theme) {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background.main,
		},
		content: {
			padding: theme.sizes.spacing.md,
			paddingBottom: theme.sizes.spacing.xxl,
		},
		sectionTitle: {
			fontSize: theme.sizes.text.lg,
			fontWeight: 'bold',
			color: theme.colors.primary.main,
			marginTop: theme.sizes.spacing.lg,
			marginBottom: theme.sizes.spacing.sm,
			borderBottomWidth: 1,
			borderBottomColor: theme.colors.gray[200],
			paddingBottom: theme.sizes.spacing.xsm,
		},
		characterList: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
		},
		characterItem: {
			width: '48%',
			padding: theme.sizes.spacing.sm,
			marginBottom: theme.sizes.spacing.md,
			borderRadius: theme.sizes.borderRadius.md,
			borderWidth: 2,
			borderColor: 'transparent',
			backgroundColor: theme.colors.background.dark,
			alignItems: 'center',
		},
		characterItemSelected: {
			borderColor: theme.colors.primary.main,
			backgroundColor: theme.colors.primary.light,
		},
		characterName: {
			fontSize: theme.sizes.text.md,
			fontWeight: '500',
			color: theme.colors.text.main,
			marginTop: theme.sizes.spacing.xsm,
		},
		characterLevel: {
			fontSize: theme.sizes.text.sm,
			color: theme.colors.text.light,
		},
		button: {
			backgroundColor: theme.colors.primary.main,
			padding: theme.sizes.spacing.md,
			borderRadius: theme.sizes.borderRadius.md,
			alignItems: 'center',
			marginTop: theme.sizes.spacing.xl,
		},
		buttonText: {
			color: theme.colors.background.dark,
			fontSize: theme.sizes.text.md,
			fontWeight: 'bold',
		},
		errorText: {
			color: theme.colors.error.main,
			fontSize: theme.sizes.text.xsm,
			marginTop: theme.sizes.spacing.xsm,
		},
	});
}
