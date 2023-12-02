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
