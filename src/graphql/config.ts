import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";

const cache: InMemoryCache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            characters: relayStylePagination(),
         },

      },
   },
});

const client = new ApolloClient({
   uri: 'https://rickandmortyapi.com/graphql',
   cache
});


export default client;