/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';
import './index.css';

function BollywoodGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const bollywoodArr = getRecord('bollywood', records);
  console.log(bollywoodArr);
  return (
    <div data-testid={testId}>
      <div className="rock">bollywood</div>
      <br />
      <div className="records">
        {
           bollywoodArr.map((record) => (
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

BollywoodGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default BollywoodGenre;
