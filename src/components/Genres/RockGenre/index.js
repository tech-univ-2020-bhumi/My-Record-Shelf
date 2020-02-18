import React from 'react';
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

export default RockGenre;
