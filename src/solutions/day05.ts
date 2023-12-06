export function cyberReindeer(road: string, time: number) {
	const roadInTime: string[] = [];
	let roadArray = road.split("");
	road = road.replace(/\|/g, "*");
	for (let i = 0; i < time; i++) {
		roadInTime.push(roadArray.join(""));
		if (i === 4) {
			roadArray = roadArray.join("").replace(/\|/g, "*").split("");
		}
		const position: number = roadArray.indexOf("S");
		if (roadArray[position + 1] !== "|") {
			const newRoadValue = road[position] !== "S" ? road[position] : ".";
			roadArray[position] = newRoadValue;
			roadArray[position + 1] = "S";
		}
	}
	return roadInTime;
}
