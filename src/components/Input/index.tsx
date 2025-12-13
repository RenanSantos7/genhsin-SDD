import { View, Text, TextInput, TextInputProps } from 'react-native';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { useTheme } from '../../context/themeContext';
import { createStyles } from './styles';

interface InputProps<T extends FieldValues> extends Omit<
	TextInputProps,
	'value' | 'onChangeText'
> {
	label?: string;
	control: Control<T>;
	name: Path<T>;
}

export default function Input<T extends FieldValues>({
	label,
	control,
	name,
	style,
	...props
}: InputProps<T>) {
	const { theme } = useTheme();
	const styles = createStyles(theme);

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { onChange, value, onBlur },
				fieldState: { error },
			}) => (
				<View style={styles.container}>
					{label && <Text style={styles.label}>{label}</Text>}
					<TextInput
						style={[
							styles.input,
							!!error && styles.inputError,
							style,
						]}
						placeholderTextColor={theme.colors.text.light as string}
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						{...props}
					/>
					{error && (
						<Text style={styles.errorText}>{error.message}</Text>
					)}
				</View>
			)}
		/>
	);
}
