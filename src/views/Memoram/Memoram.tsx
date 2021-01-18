import React, { ReactElement } from "react";
import { useStyleMemoram } from "./StyleMemoram";
import useMemoramCharacters from "../../hooks/useMemoramCharacters";

export default function Memoram(): ReactElement {
	const classes = useStyleMemoram();
	const hook = useMemoramCharacters();
	console.log(hook);
	return (
		<div className={classes.container}>
			<ol className={classes.grid}>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
				<li>2</li>
			</ol>
		</div>
	);
}
