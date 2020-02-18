/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';

function PopGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const popArr = getRecord('rock', records);
  console.log(popArr);
  return (
    <div data-testid={testId}>
      <div>pop</div>
      <div />
    </div>
  );
}

PopGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default PopGenre;
