import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MemoramImage from "../../assets/img/iconmemoram.jpg";
import { SECONDARY_COLOR } from "../../colors";

export const useStyleCardMemoram = makeStyles((theme: Theme) =>
	createStyles({
		cardContainer: {
			display: "flex",
			height: 120,
			width: 120,
			justifyContent: "center",
			alignItems: "center",
			margin: 10,
			cursor: "pointer",
			transformStyle: "preserve-3d",
			transformOrigin: "center right",
			position: "relative",
			transition: "1s",
		},
		image: {
			position: "absolute",
			width: "100%",
			height: "100%",
			textAlign: "center",
			borderRadius: 20,
			border: `2px solid ${SECONDARY_COLOR}`,
			boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
		},
		flipContainer: {
			placeSelf: "center",
			"-webkit-perspective": 600,
			perspective: 600,
			position: "relative",
		},
		frontImage: {
			backgroundImage: `url(${MemoramImage})`,
			backgroundSize: "cover",
		},
		backImage: {
			transform: "rotateX(180deg)",
		},
		rotar: {
			transform: "rotateX(180deg)",
		},
	})
);
