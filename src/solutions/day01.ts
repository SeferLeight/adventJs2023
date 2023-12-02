export function findFirstRepeated(gifts: number[]): number {
	let firstRepeated: number = -1;
	const giftsAux: any = {};

	for (let i = 0; i < gifts.length; i++) {
		if (giftsAux[gifts[i]] !== undefined) {
			return gifts[i];
		}
		giftsAux[gifts[i]] = gifts[i];
	}
	return firstRepeated;
}

export function findFirstRepeatedOptimized(gifts: number[]): number {
	const giftsUniques: Set<number> = new Set<number>();

	for (const gift of gifts) {
		if (giftsUniques.has(gift)) {
			return gift;
		}
		giftsUniques.add(gift);
	}
	return -1;
}
