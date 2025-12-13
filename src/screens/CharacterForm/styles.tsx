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
		title: {
			fontSize: theme.sizes.text.xl,
			fontWeight: 'bold',
			color: theme.colors.text.main,
			marginBottom: theme.sizes.spacing.lg,
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

		row: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
		},
		halfInput: {
			width: '48%',
		},
		thirdInput: {
			width: '31%',
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
	});
}
