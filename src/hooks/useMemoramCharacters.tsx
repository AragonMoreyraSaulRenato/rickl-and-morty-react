import { useState, useEffect } from "react";
//Graphql
import { GET_CHARACTERS_ONLY_IMG } from "../graphql/query";
import { useQuery } from "@apollo/client";

export default function useMemoramCharacters() {
	const [characters, setCharacters] = useState([]);

	const page = Math.floor(Math.random() * 34);

	const { loading, error, data } = useQuery(GET_CHARACTERS_ONLY_IMG, {
		variables: { page },
	});

	useEffect(() => {
		const newArray = data?.characters?.results;
		setCharacters(newArray);
		console.log(newArray);
	}, [data]);

	return [loading, error, characters];
}
