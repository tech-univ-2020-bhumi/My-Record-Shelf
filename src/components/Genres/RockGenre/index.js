/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes, { array } from 'prop-types';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';
import './index.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRjZjIxZjEzLWU0ODUtNDkwNy05YjlhLTMxYTdkN2ExYmJkYyIsIm5iZiI6MTU4MTk5ODU4MiwiZXhwIjoxNTgyMDg0OTgyLCJpYXQiOjE1ODE5OTg1ODIsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.Wj_kOeKMpop1XDz_S-QOVDz8_UC2Fu9AMH-bSbwiNm8';

function RockGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const rockArr = getRecord('rock', records);


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
