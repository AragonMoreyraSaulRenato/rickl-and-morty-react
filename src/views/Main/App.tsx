import React from "react";
import Stars from "../../components/Stars";
import MyRoutes from "../../routes";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache()
});



function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<MyRoutes />
				<Stars />
			</div>
		</ApolloProvider>
	);
}

export default App;
