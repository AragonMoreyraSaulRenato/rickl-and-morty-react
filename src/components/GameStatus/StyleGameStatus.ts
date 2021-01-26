import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BACKGROUND_COLOR_DARKER } from "../../colors";

export const useStyleGameStatus = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			maxWidth: 250,
			minWidth: 200,
			background: BACKGROUND_COLOR_DARKER,
			borderRadius: 20,
			minHeight: 300,
			display: "flex",
			padding: 15,
			flexDirection: "column",
			/* boxShadow:
				"0 10px 20px rgba(130,208,10,0.19), 0 6px 6px rgba(130,208,10,0.23)", */
		},
		title: {
			fontSize: 20,
			fontWeight: 400,
			textTransform: "uppercase",
			textAlign: "center",
			letterSpacing: 3,
		},
	})
);
