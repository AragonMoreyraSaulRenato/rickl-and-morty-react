import React, { ReactElement } from "react";
import { useStyleMemoram } from "./StyleMemoram";

export default function Memoram(): ReactElement {
	const classes = useStyleMemoram();
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
