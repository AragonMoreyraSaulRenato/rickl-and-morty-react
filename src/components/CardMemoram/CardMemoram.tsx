import { ReactElement, useEffect, useRef, useState } from "react";
import { Character } from "../../classes";
import { useStyleCardMemoram } from "./StyleCardMemoram";
import clsx from "clsx";

interface ICardMemoram {
	character: Character;
	addMatch: (id: string) => void;
	addMovement: () => void;
	match: Array<string>;
	clearMatch: () => void;
}

export default function CardMemoram({
	character,
	addMatch,
	addMovement,
	match,
	clearMatch,
}: ICardMemoram): ReactElement {
	const classes = useStyleCardMemoram();
	const [open, setOpen] = useState<boolean>(false);
	const timer = useRef<NodeJS.Timeout>();

	const handleOpen = () => {
		if (match.length !== 2 && !open) {
			setOpen(true);
			addMatch(character.id);
			addMovement();
		}
	};

	useEffect(() => {
		if (match.length === 2 && match.find((e) => character.id === e)) {
			timer.current = setTimeout(() => {
				match[0] !== match[1] && setOpen(false);
				clearMatch();
			}, 1000);
		}

		return () => clearTimeout();
	}, [match, character, clearMatch]);

	return (
		<div onClick={handleOpen} className={classes.flipContainer}>
			<div
				className={clsx({
					[classes.cardContainer]: true,
					[classes.rotar]: open,
				})}
			>
				<div
					className={clsx({
						[classes.image]: true,
						[classes.frontImage]: true,
					})}
				/>
				<img
					src={character?.image}
					alt=""
					className={clsx({
						[classes.image]: true,
						[classes.backImage]: true,
					})}
				/>
			</div>
		</div>
	);
}
