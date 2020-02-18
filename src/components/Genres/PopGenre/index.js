/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';
import './index.css';

function PopGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const popArr = getRecord('pop', records);
  console.log(popArr);
  return (
    <div data-testid={testId}>
      <div className="rock">pop</div>
      <br />
      <div className="records">
        {
           popArr.map((record) => (
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

PopGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default PopGenre;
