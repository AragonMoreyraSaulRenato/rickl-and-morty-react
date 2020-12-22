import React from 'react';
import { GET_CHARACTERS } from '../../graphql/query'
import { useQuery } from '@apollo/client'
import MainContainer from '../../container/MainContainer';
import { Character } from '../../classes'
import { CharacterCard } from '../../components'
import { Grid } from '@material-ui/core';


function Characters(): JSX.Element {

   const { loading, error, data } = useQuery(GET_CHARACTERS);

   if (loading) return <MainContainer>
      {'Loading...'}
   </MainContainer>

   if (error) return <MainContainer>
      {`Error! ${error.message}`}
   </MainContainer>

   //data.characters.results.map
   return (
      <MainContainer>
         <Grid container spacing={4}>
            {
               data.characters.results.map((item: Character) => {
                  return <Grid item>
                     <CharacterCard data={item} />
                  </Grid>
               })
            }
         </Grid>
      </MainContainer>
   )
}

export default Characters
