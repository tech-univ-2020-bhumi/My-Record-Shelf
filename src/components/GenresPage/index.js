/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';
import useRecords from '../../hooks/useRecords';
import guitar from './001-guitar.png';
import singer from './049-singer.png';
import amplifier from './006-amplifier.png';
import electricGuitar from './electricGuitar.png';

// const getGenresArray = (inputGenre, records) => {
//   const arr = [];
//   records.forEach((record) => {
//     record.genres.forEach((genre) => {
//       if (genre === inputGenre)arr.push(record);
//     });
//   });
//   return arr;
// };

function GenresPage(props) {
//   const [records, setRecords] = useRecords();
  const { testId } = props;

  return (
    <div data-testid={testId}>

      <div className="genres">genres</div>

      <div className="genresRows">

        <div className="genresRowOne">

          <img src={guitar} height="250" width="250" />
          <Link to="/rock"><button type="button" className="rock">rock</button></Link>

          <img src={singer} height="250" width="250" />
          <Link to="/pop"><button type="button" className="pop">pop</button></Link>

        </div>

        <div className="genresRowTwo">

          <img src={amplifier} height="250" width="250" />
          <Link to="/bollywood"><button type="button" className="amplifier">bollywood</button></Link>

          <img src={electricGuitar} height="250" width="250" />
          <Link to="country"><button type="button" className="country">country</button></Link>

        </div>

      </div>
    </div>
  );
}

GenresPage.propTypes = {
  testId: propTypes.func.isRequired,
};

export default GenresPage;
