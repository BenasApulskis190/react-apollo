import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Form from '../form/form.component';

import './sidebar.style.scss'

const SideBar = () => {
  const SIDE_BAR_CONTENT = gql`
      query GetExchangeRates {
          page {
              sidebar {
                  title
                  content
              }
          }
      }
  `;

  const {loading, error, data} = useQuery(SIDE_BAR_CONTENT);

  if (error) {
    console.log(error);
    return
  }

  return !loading ? (
    <aside className="SideBar">
      <h2>{data.page.sidebar.title}</h2>
      <p>{data.page.sidebar.content}</p>
      <Form />
    </aside>
  ) : (<div>Loading...</div>);
};

export default SideBar;
