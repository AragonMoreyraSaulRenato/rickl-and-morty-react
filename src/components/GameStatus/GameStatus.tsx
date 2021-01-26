import { useChronometer } from "../../hooks";
import { useStyleGameStatus } from "./StyleGameStatus";

interface IGameStatus {
	intents: number;
}

export default function GameStatus({ intents }: IGameStatus) {
	const classes = useStyleGameStatus();
	const { seconds, minutes } = useChronometer();

	return (
		<div className={classes.container}>
			<p className={classes.title}>tiempo</p>
			<p className={classes.title}>{`${minutes}: ${seconds}`}</p>
			<p className={classes.title}>intentos</p>
			<p className={classes.title}>{intents}</p>
		</div>
	);
}
