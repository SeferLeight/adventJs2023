export function drawGift(size: number, symbol: string) {
	let result = "";
	//half up
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size * 2 - 1; j++) {
			if (j < size - i - 1) {
				result += " ";
			} else if (i === 0) {
				result += "#";
			} else if (i === size - 1 && j < size - 1) {
				result += "#";
			} else if (size * 2 - i - 2 === j) {
				result += "#";
			} else if (j === size * 2 - 2) {
				result += "#";
			} else if (j > size - i - 1 && j < size + i) {
				result += symbol;
			} else if (j >= size + i && j < size * 2 - 2) {
				result += symbol;
			} else {
				result += "#";
			}
		}
		result += "\n";
	}
	//half down
	for (let i = 0; i < size - 1; i++) {
		for (let j = size * 2 - 2; j > 0; j--) {
			if (j <= i) {
			} else if (i === size - 2) {
				result += "#";
			} else if (j === size - 1) {
				result += "#";
			} else if (j === size * 2 - 2) {
				result += "#";
			} else if (j < size * 2 && j >= size) {
				result += symbol;
			} else if (j < size && j > i + 1) {
				result += symbol;
			} else {
				result += "#";
			}
		}
		result += "\n";
	}
	return result;
}
