/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import getRecord from '../../getRecords';
import useRecords from '../../../hooks/useRecords';

function CountryGenre(props) {
  const { testId } = props;
  const [records, getRecords] = useRecords();
  const countryArr = getRecord('country', records);
  console.log(countryArr);
  return (
    <div data-testid={testId}>
      <div className="rock">country</div>
      <br />
      <div className="records">
        {
           countryArr.map((record) => (
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

CountryGenre.propTypes = {
  testId: propTypes.func.isRequired,
};

export default CountryGenre;
