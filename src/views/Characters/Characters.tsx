import React, { useState, ReactElement } from "react";
//Material UI
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { Character } from "../../classes";
import { CharacterCard } from "../../components";
import SearchBar from "../../components/SearchBar";
import { useStylesCharacters } from "./StylesCharacters";

//Graphql
import { GET_CHARACTERS } from "../../graphql/query";
import { useQuery } from "@apollo/client";

import MainContainer from "../../container/MainContainer";
import NoResults from "../../components/NoResults";

function Characters(): ReactElement | null {
	const classes = useStylesCharacters();

	const [empty, setEmpty] = useState(false);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
		variables: { page: page, search },
	});

	const getCharacters = (page: number = 1, search: string = "") => {
		fetchMore({
			variables: { page: page, search: search },
		})
			.then((response) => {
				console.log(response);
				setEmpty(false);
			})
			.catch((errors) => {
				setEmpty(true);
			});
	};

	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
		getCharacters(value, search);
	};

	const handleSearch = (search: string) => {
		const newPage: number = 1;
		setPage(newPage);
		setSearch(search);
		getCharacters(newPage, search);
	};

	if (loading) return null;

	if (error) return <MainContainer>{`Error! ${error}`}</MainContainer>;

	return (
		<MainContainer>
			<Grid
				container
				spacing={4}
				direction="column"
				justify="flex-start"
				alignItems="stretch"
			>
				<Grid item>
					<SearchBar onSearch={handleSearch} />
				</Grid>

				<Grid
					item
					container
					direction="column"
					justify="flex-start"
					alignItems="center"
				>
					{!empty && (
						<Pagination
							count={data?.characters?.info?.pages}
							page={page}
							onChange={handleChangePage}
							className={classes.root}
						/>
					)}
				</Grid>

				<Grid item container spacing={4} justify="center" alignItems="center">
					{empty && search !== "" ? (
						<NoResults search={search} />
					) : (
						data?.characters?.results?.map((item: Character) => {
							return (
								<Grid item key={`item-card-character-${item.id}`}>
									<CharacterCard data={item} />
								</Grid>
							);
						})
					)}
				</Grid>
			</Grid>
		</MainContainer>
	);
}

export default Characters;
