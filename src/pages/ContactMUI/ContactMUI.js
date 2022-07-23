import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function ContactMUI() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Contact MUI Page</h1>

      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <Button
        sx={{ height: '60px', color: 'green', borderColor: 'green' }}
        onClick={() => console.log(value)}
        variant="outlined"
      >
        Click
      </Button>
    </div>
  );
}

export default ContactMUI;
