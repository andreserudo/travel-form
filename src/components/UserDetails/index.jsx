import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function UserDetails() {
  const [initialDate, setInitialDate] = useState(new Date());
  const classes = useStyles();

  return (
    <>
      <h1>User Details</h1>
      <form className={classes.root}>
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
        <TextField
          label="País"
        />
        <TextField
          label="CPF"
        />
        <TextField
          label="Email"
        />
        <TextField
          label="Telefone"
        />
      </form>
    </>
  );
}

export default UserDetails;
