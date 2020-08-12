import React from 'react';
import Card from '../card/card.component';
import { gql, useQuery } from '@apollo/client';

const Main = () => {
  const MAIN_CONTENT = gql`
      query GetExchangeRates {
          page {
              main {
                  title
                  content
              }
          }
      }
  `;

  const {loading, error, data} = useQuery(MAIN_CONTENT);

  return !loading ? (
    <main>
      <Card>
        <h1>{data.page.main.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.page.main.content}}/>
      </Card>
    </main>
  ) : (
    <div>Loading...</div>
  )
}

export default Main;
