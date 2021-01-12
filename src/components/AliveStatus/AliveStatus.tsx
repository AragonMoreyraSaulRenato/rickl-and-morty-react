import React from "react";
import clsx from "clsx";
import { useStylesAliveStatus } from "./StyleAliveStatus";

interface IAliveStatus {
	status?: string;
}

function AliveStatus(props: IAliveStatus) {
	const status = props.status?.toLowerCase();

	const classes = useStylesAliveStatus();
	return (
		<span
			className={clsx(classes.dot, {
				[classes.dotGreen]: "alive" === status,
				[classes.dotRed]: "dead" === status,
				[classes.dotWhite]: "unknown" === status,
			})}
		/>
	);
}

export default AliveStatus;
