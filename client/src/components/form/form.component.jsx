import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

import Input from '../input/input.component';
import Button from '../button/button.component';

import './form.style.scss'

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    message: '',
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const SUBMIT_CONTACT_FORM = gql`
      mutation SubmitContactForm($firstName: String, $lastName: String, $message: String) {
          submitContactForm(firstName: $firstName, lastName: $lastName, message: $message)
      }
  `;

  const [submitForm] = useMutation(SUBMIT_CONTACT_FORM);

  const handleChange = e => {
    const {value, name} = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);

    if (formData.name === '' && formData.lastName === '') {
      setLoading(false);

      setError('First name and last name is required');
    } else {
      submitForm({
        variables: {
          firstName: formData.name,
          lastName: formData.lastName,
          message: formData.message,
        }
      }).then(() => {
        setFormData({
          name: '',
          lastName: '',
          message: '',
        });
        setLoading(false);
        setError(null);

      }).catch(err => console.log(err));
    }
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <Input
          inputType="input"
          label="First name"
          id="name"
          onChange={handleChange}
          name="name"
          placeholder="First name"
          type="text"
          disabled={loading}
          value={formData.name}
        />
        <Input
          inputType="input"
          label="Last name"
          id="lastName"
          onChange={handleChange}
          name="lastName"
          placeholder="Last name"
          disabled={loading}
          type="text"
          value={formData.lastName}
        />
        <Input
          inputType="textarea"
          label="message"
          name="message"
          id="message"
          disabled={loading}
          onChange={handleChange}
          cols="30"
          rows="7"
          placeholder="Your message here"
          value={formData.message}
        />
        {error && (<div className='error'>{error}</div>)}
        <Button text="Submit" type="submit" isLoading={loading} disabled={loading}/>
      </form>
    </div>
  )
}

export default Form;
