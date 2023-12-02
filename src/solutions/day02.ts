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
