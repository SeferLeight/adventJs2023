export function adjustLights(lights: string[]) {
	const lightsOptions: string[] = ["🔴", "🟢"];
	let redToAdjust: number = 0;
	let greenToAdjust: number = 0;
	for (let i = 0; i < lights.length; i++) {
		redToAdjust += lights[i] === lightsOptions[i % 2] ? 1 : 0;
		greenToAdjust += lights[i] === lightsOptions[(i + 1) % 2] ? 1 : 0;
	}

	return Math.min(redToAdjust, greenToAdjust);
}
export function adjustLightsWithError(lights: string[]) {
	let lightToAdjust: number = 0;
	let prevLight: string = "";
	for (let light of lights) {
		if (light === prevLight && prevLight !== "") {
			lightToAdjust++;
			prevLight = light === "🔴" ? "🟢" : "🔴";
		} else {
			prevLight = light;
		}
	}
	return lightToAdjust;
}
