export default function suffle(array: any[]): any[] {
	const suffleArray = [...array];
	for (let i = suffleArray.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = suffleArray[i];
		suffleArray[i] = suffleArray[j];
		suffleArray[j] = temp;
	}
	return suffleArray;
}
