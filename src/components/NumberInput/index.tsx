import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TextInputProps,
} from 'react-native';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { useTheme } from '../../context/themeContext';
import { createStyles } from './styles';

interface NumberInputProps<T extends FieldValues> extends Omit<
	TextInputProps,
	'value' | 'onChangeText' | 'onChange'
> {
	label?: string;
	control: Control<T>;
	name: Path<T>;
	min?: number;
	max?: number;
	step?: number;
}

export default function NumberInput<T extends FieldValues>({
	label,
	control,
	name,
	min = 0,
	max = 999999,
	step = 1,
	style,
	...rest
}: NumberInputProps<T>) {
	const { theme } = useTheme();
	const styles = createStyles(theme);

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				const numericValue = typeof value === 'number' ? value : Number(value) || 0;

				function handleIncrement() {
					const newValue = numericValue + step;
					if (newValue <= max) {
						onChange(newValue);
					}
				}

				function handleDecrement() {
					const newValue = numericValue - step;
					if (newValue >= min) {
						onChange(newValue);
					}
				}

				function handleChangeText(text: string) {
					if (text === '') {
						onChange(0);
						return;
					}

					const parsed = parseInt(text, 10);
					if (!isNaN(parsed)) {
						if (parsed <= max) {
							onChange(parsed);
						} else {
							onChange(max);
						}
					}
				}

				return (
					<View style={styles.container}>
						{label && <Text style={styles.label}>{label}</Text>}
						<View style={[styles.row, !!error && styles.rowError]}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleDecrement}
								activeOpacity={0.7}
							>
								<Text style={styles.buttonText}>-</Text>
							</TouchableOpacity>

							<TextInput
								style={[styles.input, style]}
								value={String(numericValue)}
								onChangeText={handleChangeText}
								keyboardType='numeric'
								placeholderTextColor={theme.colors.text.light as string}
								{...rest}
							/>

							<TouchableOpacity
								style={styles.button}
								onPress={handleIncrement}
								activeOpacity={0.7}
							>
								<Text style={styles.buttonText}>+</Text>
							</TouchableOpacity>
						</View>
						{error && <Text style={styles.errorText}>{error.message}</Text>}
					</View>
				);
			}}
		/>
	);
}
