import React, { useState } from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';

import './form.style.scss'

const Form = () => {

  const [credentials, setCredentials] = useState({
    name: '',
    lastName: '',
    message: '',
  });

  return (
    <div className="Form">
      <form>
        <Input inputType="input" label="First name" id="name" name="name" placeholder="First name" type="text"/>
        <Input inputType="input" label="Last name" id="lastName" name="lastName" placeholder="Last name" type="text"/>
        <Input inputType="textarea" label="message" name="message" id="message" cols="30" rows="7" placeholder="Your message here"/>
        <Button text="Submit" type="button"/>
      </form>
    </div>
  )
}

export default Form;
