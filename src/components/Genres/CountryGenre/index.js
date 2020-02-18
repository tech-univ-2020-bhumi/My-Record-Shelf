/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';

function CountryGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const countryArr = getRecord('country', records);
  console.log(countryArr);
  return (
    <div data-testid={testId}>
      <div>country</div>
      <div />
    </div>
  );
}

CountryGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default CountryGenre;
