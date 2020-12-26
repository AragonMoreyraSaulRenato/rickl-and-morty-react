import React, { useState } from 'react';

import MainContainer from '../../container/MainContainer';
import { Character } from '../../classes'
import { CharacterCard } from '../../components'
import { Grid } from '@material-ui/core';
import SearchBar from '../../components/SearchBar';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TEXT_WHITE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../colors'

//Graphql
import { GET_CHARACTERS } from '../../graphql/query'
import { useQuery } from '@apollo/client'

const useStyles = makeStyles((theme) =>
   createStyles({
      root: {
         "& .MuiPaginationItem-root": {
            color: TEXT_WHITE_COLOR
         },
         "& .Mui-selected": {
            background: PRIMARY_COLOR,
            '&:hover': {
               background: SECONDARY_COLOR,
            },
         }
      },
   }),
);


function Characters(): JSX.Element {
   const classes = useStyles();
   const [page, setPage] = useState(1)

   const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
      variables: { page: 1 },
   });



   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      if (fetchMore)
         fetchMore({
            variables: { page: value },
         });
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
               <SearchBar />
            </Grid>

            <Grid item
               container
               direction="column"
               justify="flex-start"
               alignItems="center"
            >
               <Pagination count={data?.characters?.info?.pages} page={page} onChange={handleChange} className={classes.root} />
            </Grid>

            <Grid item container spacing={4}
               justify="center"
               alignItems="center">

               {
                  data?.characters?.results?.map((item: Character) => {
                     return <Grid item key={`card-character${item.id}`}>
                        <CharacterCard data={item} />
                     </Grid>
                  })
               }
            </Grid>

         </Grid>
      </MainContainer>
   )
}

export default Characters
