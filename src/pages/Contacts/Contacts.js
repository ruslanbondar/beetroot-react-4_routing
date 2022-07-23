import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { Button, Form } from 'react-bootstrap';

export const Contacts = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    setValue('');

    // navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        /> */}
        {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
        <div style={{ width: '100px' }}>
          <Form.Control
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        {/* <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text> */}
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
