import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className="container mb-5">
      <h2 className="contactTitle text-center">Contact Me</h2>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input className="form-control form-control-lg" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address:</label>
          <input className="form-control form-control-lg" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control form-control-lg" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="submitBtn btn mb-3 mx-auto d-block" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;