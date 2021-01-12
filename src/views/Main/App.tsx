import React from "react";
import Stars from "../../components/Stars";
import MyRoutes from "../../routes";
import "./App.css";
import ApolloClientConfig from "../../graphql/config";
import { ApolloProvider } from "@apollo/client";

function App(): JSX.Element {
  return (
    <ApolloProvider client={ApolloClientConfig}>
      <div className="App">
        <MyRoutes />
        <Stars />
      </div>
    </ApolloProvider>
  );
}

export default App;
