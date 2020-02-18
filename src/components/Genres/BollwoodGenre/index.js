/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';

function BollywoodGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const popArr = getRecord('rock', records);
  console.log(popArr);
  return (
    <div data-testid={testId}>
      <div>bollywood</div>
      <div />
    </div>
  );
}

BollywoodGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default BollywoodGenre;
