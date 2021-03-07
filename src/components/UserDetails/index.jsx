import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

function UserDetails() {
  const [initialDate, setInitialDate] = useState(new Date());

  return (
    <>
      <h1>User Details</h1>
      <TextField
        label="Nome"
      />
      <TextField
        label="Sobrenome"
      />
      <DatePicker
        label="Data de Nascimento"
        value={initialDate}
        onChange={setInitialDate}
        animateYearScrolling
      />
    </>
  );
}

export default UserDetails;
