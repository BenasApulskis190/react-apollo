import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Card from '../card/card.component';

import './main.style.scss'

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

  if (error) {
    console.log(error);
    return
  }

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
