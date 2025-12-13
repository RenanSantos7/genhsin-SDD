export default function isTruthy(value: any): boolean {
	if (!value) {
		return false;
	}

	if (Array.isArray(value)) {
		return value.length > 0;
	}

	if (typeof value === 'object') {
		const stack = [value];

		while (stack.length > 0) {
			const current = stack.pop();

			if (!current) continue;

			const keys = Object.keys(current);

			for (const key of keys) {
				const val = current[key];

				if (!val) continue;

				if (Array.isArray(val)) {
					if (val.length > 0) return true;
					continue;
				}

				if (typeof val === 'object') {
					if (Object.keys(val).length > 0) {
						stack.push(val);
					}
					continue;
				}

				return true;
			}
		}

		return false;
	}

	return true;
}
