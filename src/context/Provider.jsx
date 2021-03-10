import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';

function Provider({ children }) {
  const defaultValue = {
    departureDate: '',
    arriveDate: '',
    departurePlace: '',
    arrivePlace: '',
    name: 'André',
    surName: '',
    email: '',
    country: '',
  };
  const [formInfo, setFormInfo] = useState(defaultValue);

  const handleChange = (field, value) => {
    setFormInfo({ ...formInfo, [field]: value });
  };

  const context = {
    formInfo,
    handleChange,
  };
  return (
    <FormContext.Provider value={context}>
      { children }
    </FormContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}),
};

Provider.defaultProps = {
  children: {},
};

export default Provider;
