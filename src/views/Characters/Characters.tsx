import React, { useState } from 'react';
//Material UI
import { Character } from '../../classes'
import { CharacterCard } from '../../components'
import { Grid } from '@material-ui/core';
import SearchBar from '../../components/SearchBar';
import Pagination from '@material-ui/lab/Pagination';
import { useStylesCharacters } from './StylesCharacters'
//Graphql
import { GET_CHARACTERS } from '../../graphql/query';
import { useQuery } from '@apollo/client'

import MainContainer from '../../container/MainContainer';


function Characters(): JSX.Element {
   const classes = useStylesCharacters();
   const [page, setPage] = useState(1);
   const [search, setSearch] = useState("");

   const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
      variables: {
         page, search
      },
   });

   const getCharacters = (page: number = 1, search: string = "") => {
      if (fetchMore)
         fetchMore({
            variables: {
               page: page,
               search: search
            },
         });
   }

   const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      getCharacters(value, search);
   };

   const handleSearch = () => {
      getCharacters(1, search);
   };

   if (loading) return <MainContainer>
      {'Loading...'}
   </MainContainer>

   if (error) return <MainContainer>
      {`Error! ${error.message}`}
   </MainContainer>

   //data.characters.results.map
   return (
      <MainContainer>
         <Grid container spacing={4}
            direction="column"
            justify="flex-start"
            alignItems="stretch" >

            <Grid item>
               <SearchBar
                  search={search}
                  setSearch={setSearch}
                  onSearch={handleSearch} />
            </Grid>

            <Grid item
               container
               direction="column"
               justify="flex-start"
               alignItems="center"
            >
               <Pagination
                  count={data?.characters?.info?.pages}
                  page={page}
                  onChange={handleChangePage}
                  className={classes.root} />
            </Grid>


            <Grid item container spacing={4}
               justify="center"
               alignItems="center">

               {
                  data?.characters?.results?.map((item: Character) => {
                     return <Grid item key={`item-card-character-${item.id}`}>
                        <CharacterCard data={item} />
                     </Grid>
                  })
               }
            </Grid>

         </Grid>
      </MainContainer >
   )
}

export default Characters
