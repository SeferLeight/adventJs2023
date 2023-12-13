export function getIndexsForPalindrome(word: string) {
	if (word === [...word].reverse().join('')) {
		return [];
	}

	for (let i = 0; i < word.length / 2; i++) {
		for (let j = 0; j < word.length; j++) {
			const characters = [...word];
			[characters[i], characters[j]] = [characters[j], characters[i]];
			const newWord = characters.join('');
			if (newWord === characters.reverse().join('')) {
				return [i, j];
			}
		}
	}
	return null;
}

export function getIndexsForPalindromeTrying(word: string) {
	if (word === word.split('').reverse().join('')) {
		return [];
	}
	let countDiff = 0;
	for (let i = 0; i < word.length; i++) {
		countDiff = 0;
		for (let j = 0; j < word.length; j++) {
			if (word[j] !== word[word.length - j - 1]) {
				countDiff++;
			}
			if (countDiff > 2) {
				return null;
			}
			const characters = word.split('');
			[characters[i], characters[j]] = [characters[j], characters[i]];
			const newWord = characters.join('');
			if (newWord === characters.reverse().join('')) {
				return [i, j];
			}
		}
	}
	return null;
}
