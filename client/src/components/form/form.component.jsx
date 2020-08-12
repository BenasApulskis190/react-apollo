import React from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';

import './form.style.scss'

const Form = () => {

  return (
    <div className="Form">
      <form>
        <Input label="First name" id="name" name="name" placeholder="First name" type="text"/>
        <Input label="Last name" id="lastName" name="lastName" placeholder="Last name" type="text"/>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="7" placeholder="Your message here">

          </textarea>
        </div>

        <Button text="Submit" type="button"/>
      </form>
    </div>
  )
}

export default Form;
