import React from 'react';
import { gql, useQuery } from '@apollo/client';


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
  return !loading ? (
    <aside>
      <h2>{data.page.sidebar.title}</h2>
      <p>{data.page.sidebar.content}</p>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">First name</label>
          <input id="name" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last name</label>
          <input id="last-name" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="message">message</label>
          <textarea name="message" id="message" cols="30" rows="10">

              </textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </aside>
  ) : (<div>Loading...</div>);
};

export default SideBar;
