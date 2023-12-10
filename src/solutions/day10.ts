export function createChristmasTree(ornaments: string, height: number) {
	let tree: string = "";
	let ornament: number = 0;
	for (let i = 0; i < height; i++) {
		const ornamentsInRow = i + 1;
		let row = " ".repeat(height - ornamentsInRow);
		for (let j = 0; j < ornamentsInRow; j++) {
			row += `${ornaments[ornament]} `;
			ornament++;
			if (ornament === ornaments.length) ornament = 0;
		}
		tree += `${row.trimEnd()}\n`;
	}
	tree += `${" ".repeat(height - 1)}|\n`;
	return tree;
}
