import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyleNoResults = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
      maxWidth: 500,
    },
    image: {
      width: "100%",
    },
  })
);

/*
} */
