import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
      {
          page {
              main {
                  title
                  content
              }
              sidebar {
                  title
                  content
              }
              infoBoxes
              footer
          }
      }
  `
}).then(result => console.log(result));


function App() {
  return (
    <ApolloProvider client={client}>
      <p>Veikia</p>
    </ApolloProvider>
  );
}

export default App;
