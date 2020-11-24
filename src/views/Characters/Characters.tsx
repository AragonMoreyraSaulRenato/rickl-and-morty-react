import React from 'react';
import { GET_CHARACTERS } from '../../graphql/query'
import { useQuery } from '@apollo/client'
import MainContainer from '../../container/MainContainer';



function Characters(): JSX.Element {
   const { loading, error, data } = useQuery(GET_CHARACTERS);

   if (loading) return <MainContainer>
      {'Loading...'}
   </MainContainer>

   if (error) return <MainContainer>
      {`Error! ${error.message}`}
   </MainContainer>


   return (
      <MainContainer>
         {JSON.stringify(data)}
      </MainContainer>
   )
}

export default Characters
