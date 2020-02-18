import React from 'react';
import propTypes from 'prop-types';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';

function RockGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const rockArr = getRecord('rock', records);
  console.log(rockArr);
  return (
    <div>
      <div>rock</div>
      <div />
    </div>
  );
}

RockGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default RockGenre;