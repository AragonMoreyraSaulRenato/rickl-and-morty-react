import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyleMemoram = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: 0,
			listStyle: "none",
			display: "flex",
			maxWidth: 700,
			flexWrap: "wrap",
			justifyContent: "center",
		},
	})
);
