export function maxDistance(movements: string) {
	const leftMovements = movements.split("<").length - 1;
	const rightMovements = movements.split(">").length - 1;
	const comodinMovement = movements.split("*").length - 1;
	let maxDistance = 0;

	maxDistance = leftMovements - rightMovements;
	maxDistance = Math.abs(maxDistance) + comodinMovement;

	return maxDistance;
}
