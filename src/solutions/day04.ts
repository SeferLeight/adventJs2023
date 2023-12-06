export function decode(message: string) {
	const stack: string[] = [];
	let decodedMessage: string = "";

	for (let char of message) {
		if (char === "(") {
			stack.push(decodedMessage);
			decodedMessage = "";
		} else if (char === ")") {
			const reversedMessage: string = decodedMessage
				.split("")
				.reverse()
				.join("");
			decodedMessage = stack.pop() + reversedMessage;
		} else {
			decodedMessage += char;
		}
	}
	return decodedMessage;
}
