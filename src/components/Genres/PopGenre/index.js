/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';
import './index.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRjZjIxZjEzLWU0ODUtNDkwNy05YjlhLTMxYTdkN2ExYmJkYyIsIm5iZiI6MTU4MTk5ODU4MiwiZXhwIjoxNTgyMDg0OTgyLCJpYXQiOjE1ODE5OTg1ODIsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.Wj_kOeKMpop1XDz_S-QOVDz8_UC2Fu9AMH-bSbwiNm8';
function PopGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const popArr = getRecord('pop', records);

  const [loveCount, setLoveCount] = useState(0);

  let heartRecord;
  const asyncFunc = async (record) => {
    heartRecord = await axios.get(`records/${record.id}/love`, {
      headers: {
        Authorization: (`Bearer ${token}`),
      },
    });
    setLoveCount(heartRecord.count + 1);
  };

  return (
    <div data-testid={testId}>
      <div className="rock">pop</div>
      <br />
      <div className="records">
        {
           popArr.map((record) => (
             <div className="rowData">
               <img src={record.albumArtUrl} height="300" width="300" />
               <button onClick={async () => {
                 asyncFunc(record);
                 setLoveCount(loveCount + 1);
                 axios.put(`/records/${record.id}/love`, {
                   headers: {
                     Authorization: (`Bearer ${token}`),
                   },
                 }).then(({ data }) => { data.count = loveCount; });
               }}
               >
                 <FaHeart className="heart" />
                 {loveCount}
               </button>
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

PopGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default PopGenre;
