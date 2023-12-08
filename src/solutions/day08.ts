export function organizeGifts(gifts: string) {
	let giftsOrganized = "";
	let giftsGrouped = gifts.match(/\d+[a-zA-Z]/g) || [];

	for (let gift of giftsGrouped) {
		let giftData = gift.match(/\d+|[a-zA-Z]+/g) || [];

		const giftQuantity: number = Number(giftData[0]);
		const giftName: string = giftData[1];

		const paleQuantity: number = Math.floor(giftQuantity / 50);
		const box: number = Math.floor((giftQuantity % 50) / 10);
		const bag: number = Math.floor((giftQuantity % 50) % 10);

		giftsOrganized += `[${giftName}]`.repeat(paleQuantity);
		giftsOrganized += `{${giftName}}`.repeat(box);
		giftsOrganized += bag > 0 ? `(${giftName.repeat(bag)})` : "";
	}
	return giftsOrganized;
}
