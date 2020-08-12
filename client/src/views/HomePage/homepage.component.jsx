import React from 'react';
import './homepage.style.scss'

import Header from '../../components/header/header.component';

const HomePage = () => (
  <div className='home-page'>
    <Header/>
    <div className="container">
      <div className="row">
        <main>
          <div className="card">
            <h1>Lorem ipsum dolor sit amet, consecte</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius et ex expedita id inventore iste
              itaque iusto molestiae necessitatibus nesciunt obcaecati officia, pariatur repellendus saepe tempora totam
              ut voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius et ex expedita id inventore iste
              itaque iusto molestiae necessitatibus nesciunt obcaecati officia, pariatur repellendus saepe tempora totam
              ut voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius et ex expedita id inventore iste
              itaque iusto molestiae necessitatibus nesciunt obcaecati officia, pariatur repellendus saepe tempora totam
              ut voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius et ex expedita id inventore iste
              itaque iusto molestiae necessitatibus nesciunt obcaecati officia, pariatur repellendus saepe tempora totam
              ut voluptates?</p>
          </div>
        </main>
        <aside>
          <h2>Side bar title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus error est libero non numquam odit
            omnis quo rerum, voluptatem. Cupiditate deserunt eos impedit ipsum nobis, reiciendis sequi tempore vel.</p>
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
      </div>

      <div className="row">
        <div className="info-box">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolores ea ex
            exercitationem, facilis iusto laudantium obcaecati quae recusandae? Debitis distinctio ea nulla quaerat quos
            ratione, repudiandae unde voluptatibus?
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolores ea ex
            exercitationem, facilis iusto laudantium obcaecati quae recusandae? Debitis distinctio ea nulla quaerat quos
            ratione, repudiandae unde voluptatibus?
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolores ea ex
            exercitationem, facilis iusto laudantium obcaecati quae recusandae? Debitis distinctio ea nulla quaerat quos
            ratione, repudiandae unde voluptatibus?
          </div>
        </div>
      </div>
    </div>

    <footer>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet deleniti dolor ducimus enim eos est
        explicabo fuga harum iure laudantium magni mollitia nobis, numquam quibusdam similique sint ullam veniam.</p>
    </footer>
  </div>
);

export default HomePage;
