export function calculateTime(deliveries: string[]) {
	const limit: number = 7 * 3600;
	const HOUR = 3600;
	const MINUTE = 60;
	let [hour, minutes, seconds] = [0, 0, 0];
	for (let i = 0; i < deliveries.length; i++) {
		const deliverySplit = deliveries[i].split(':');
		hour += Number(deliverySplit[0]);
		minutes += Number(deliverySplit[1]);
		seconds += Number(deliverySplit[2]);
	}

	const totalSeconds = hour * HOUR + minutes * MINUTE + seconds;
	const isNegative: boolean = totalSeconds < limit;
	const dif: number = Math.abs(totalSeconds - limit);
	const difHours = Math.floor(dif / HOUR);
	const difMin = Math.floor((dif - difHours * HOUR) / MINUTE);
	const difSec = Math.floor(dif - difHours * HOUR - difMin * MINUTE);
	const sign = isNegative ? '-' : '';
	const hourString: string = difHours.toString().padStart(2, '0');
	const minuteString: string = difMin.toString().padStart(2, '0');
	const secondString: string = difSec.toString().padStart(2, '0');
	return `${sign}${hourString}:${minuteString}:${secondString}`;
}
