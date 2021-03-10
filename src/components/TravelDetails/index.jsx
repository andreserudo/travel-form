import React, { useContext, useEffect, useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
import ContentDetail from './styles';
import FormContext from '../../context/FormContext';

function TravelDetails() {
  const defaultDetails = {
    departureDate: '',
    arriveDate: '',
    departurePlace: '',
    arrivePlace: '',
  };
  const [initialDate, setInitialDate] = useState(new Date());
  const [details, setDetails] = useState(defaultDetails);
  const { formInfo, handleChange } = useContext(FormContext);

  const handleFieldChange = ({ target }, name) => {
    const valueField = target.value;

    setDetails({ ...details, [name]: valueField });
    handleChange(name, valueField);
  };

  useEffect(() => {
    const { departurePlace, arrivePlace } = formInfo;
    setDetails({ departurePlace });
  }, []);

  return (
    <>
      <h1>Detalhes</h1>
      <ContentDetail>
        <DatePicker
          label="Data de saída"
          value={initialDate}
          onChange={setInitialDate}
          animateYearScrolling
          required
        />
        <DatePicker
          label="Data de retorno"
          value={initialDate}
          onChange={setInitialDate}
          animateYearScrolling
        />
        <TextField
          label="Local de Saída"
          value={details.departurePlace}
          onChange={(event) => handleFieldChange(event, 'departurePlace')}
        />
        <TextField
          label="Local de Chegada"
          value={details.arrivePlace}
          onChange={(event) => handleFieldChange(event, 'arrivePlace')}
        />
      </ContentDetail>
    </>
  );
}

export default TravelDetails;
