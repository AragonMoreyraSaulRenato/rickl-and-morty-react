import React, { ReactElement, useCallback, useState } from "react";
import { useStyleMemoram } from "./StyleMemoram";
import useMemoramCharacters from "../../hooks/useMemoramCharacters";
import MainContainer from "../../container/MainContainer";
import { Character } from "../../classes";
import CardMemoram from "../../components/CardMemoram/CardMemoram";
import GameStatus from "../../components/GameStatus";

export default function Memoram(): ReactElement {
	const classes = useStyleMemoram();
	const { loading, characters } = useMemoramCharacters();
	const [match, setMatch] = useState<Array<string>>([]);
	const [movement, setMovement] = useState<number>(0);

	//const timer = useRef<NodeJS.Timeout>();

	const addMatch = (id: string) => {
		const newSelected = [...match];
		newSelected.push(id);
		setMatch(newSelected);
	};

	const clearMatch = useCallback(() => {
		setMatch([]);
	}, []);

	if (loading) return <MainContainer>loading...</MainContainer>;

	return (
		<MainContainer>
			<div className={classes.container}>
				{characters?.map((character: Character, index: number) => (
					<CardMemoram
						key={`card-memoram-${index}`}
						character={character}
						addMatch={addMatch}
						addMovement={() => setMovement(movement + 1)}
						match={match}
						clearMatch={clearMatch}
					/>
				))}
			</div>
			<GameStatus intents={movement} />
		</MainContainer>
	);
}
