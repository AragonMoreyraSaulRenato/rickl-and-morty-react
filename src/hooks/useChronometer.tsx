import { useEffect, useRef, useState } from "react";

export default function useChronometer() {
	const [seconds, setSeconds] = useState<string>("00");
	const [minutes, setMinutes] = useState<string>("00");
	const timer = useRef<NodeJS.Timeout>();

	useEffect(() => {
		timer.current && clearInterval();
		timer.current = setInterval(() => {
			setSeconds((seconds) => {
				const newSeconds =
					parseInt(seconds) + 1 < 60 ? parseInt(seconds) + 1 : 0;
				if (newSeconds < 10) return `0${newSeconds}`;
				else return `${newSeconds}`;
			});
		}, 1000);
	}, []);

	useEffect(() => {
		if (parseInt(seconds) === 59) {
			setTimeout(
				() =>
					setMinutes((minutes) => {
						const newMinutes =
							parseInt(minutes) + 1 < 60 ? parseInt(minutes) + 1 : 0;
						if (newMinutes < 10) return `0${newMinutes}`;
						else return `${newMinutes}`;
					}),
				1000
			);
		}
	}, [seconds]);

	return { minutes, seconds };
}
