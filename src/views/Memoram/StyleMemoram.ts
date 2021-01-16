import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyleMemoram = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginTop: 100,
			color: "#FFFFFF",
			textAlign: "center",
		},
		grid: {
			padding: 0,
			listStyle: "none",
			display: "grid",
			gridTemplateColumns: "repeat(6, 1fr)",
		},
	})
);
