import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyleSearchBar = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			zIndex: 1,
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			minWidth: 700,
			[theme.breakpoints.down('sm')]: {
				minWidth: '100%'
			},
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		divider: {
			height: 28,
			margin: 4,
		},
	})
);

/*
} */
