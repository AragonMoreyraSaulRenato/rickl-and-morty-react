import { useState, useEffect } from "react";
import { Character } from "../classes";
//Graphql
import { GET_CHARACTERS_ONLY_IMG } from "../graphql/query";
import { useQuery } from "@apollo/client";
import suffle from "../utils/SuffleArray";

export default function useMemoramCharacters() {
	const [characters, setCharacters] = useState<Character[]>([]);
	const { loading, error, data } = useQuery(GET_CHARACTERS_ONLY_IMG, {
		variables: { page: Math.floor(Math.random() * 34) },
	});

	useEffect(() => {
		if (data && characters.length === 0) {
			console.log(data?.characters?.results);
			let newArray = data?.characters?.results;
			let otherarray = [...newArray].splice(0, 10);
			const newUnSortedArray: Character[] = suffle([
				...otherarray,
				...otherarray,
			]);
			setCharacters(newUnSortedArray);
		}
	}, [data, characters]);

	/* const openCharacter = (index: number) => {
		const newCharacters: Character[] = [...characters];
		newCharacters[index].open = true;
		console.log(newCharacters[index]);
		setCharacters(newCharacters);
	}; */

	return { loading, error, characters };
}
