export function manufacture(gifts: string[], materials: string): string[] {
	const materialsArray: string[] = materials.split('');
	const giftManufacturable: string[] = [];

	gifts.forEach((gift: string) => {
		for (let i = 0; i < gift.length; i++) {
			if (!materialsArray.includes(gift[i])) {
				return;
			}
		}
		giftManufacturable.push(gift);
	});

	return giftManufacturable;
}

export function manufactureOptimized(gifts: string[], materials: string) {
	const materialSet = new Set(materials.split(''));
	const giftManufacturable: string[] = gifts.filter((gift) => {
		const giftWords = gift.split('');
		for (const word of giftWords) {
			if (!materialSet.has(word)) return false;
		}
		return true;
	});
	return giftManufacturable;
}
