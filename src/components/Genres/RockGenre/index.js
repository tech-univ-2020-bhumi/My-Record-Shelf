/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes, { array } from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';
import './index.css';


function RockGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const rockArr = getRecord('rock', records);
  console.log(rockArr);

  return (
    <div>
      <div className="rock">rock</div>
      <br />
      <div className="records">
        {
           rockArr.map((record) => (
             <div className="rowData">
               <img src={record.albumArtUrl} height="300" width="300" />
               <FaHeart />
               <div>{record.name}</div>
               <div>{record.artists[0]}</div>
               <br />
             </div>
           ))
          }
      </div>
    </div>
  );
}

RockGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default RockGenre;
