export function findNaughtyStep(original: string, modified: string): string {
	const maxLength: number = Math.max(original.length, modified.length);
	for (let i = 0; i < maxLength; i++) {
		if (original[i] !== modified[i]) {
			if (original.length >= modified.length) {
				return original[i];
			} else {
				return modified[i];
			}
		}
	}
	return '';
}
