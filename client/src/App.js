import React from 'react';
import { Route, Switch } from 'react-router-dom'

import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider
} from '@apollo/client';

import HomePage from './views/HomePage/homepage.component';

import './App.scss'

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
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </ApolloProvider>
  );
}

export default App;
