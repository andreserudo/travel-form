import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

function TravelDetails() {
  const [initialDate, setInitialDate] = useState(new Date());
  return (
    <>
      <h1>Detalhes</h1>
      <DatePicker
        label="Data de saída"
        value={initialDate}
        onChange={setInitialDate}
        animateYearScrolling
      />
      <DatePicker
        label="Data de retorno"
        value={initialDate}
        onChange={setInitialDate}
        animateYearScrolling
      />
      <TextField
        label="Local de Origem"
      />
      <TextField
        label="Local de Saída"
      />
    </>
  );
}

export default TravelDetails;
