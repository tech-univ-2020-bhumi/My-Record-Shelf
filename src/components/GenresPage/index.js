/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';
import useRecords from '../../hooks/useRecords';

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

  //   const rockArr = getGenresArray('rock', records);
  //   //   console.log('Rooockkk', rockArr);

  //   const popArr = getGenresArray('pop', records);
  //   //   console.log('Poppppp', popArr);

  //   const bollywoodArr = getGenresArray('bollywood', records);
  //   //   console.log('bollyyy', bollywoodArr);

  //   const countryArr = getGenresArray('country', records);
  //   //   console.log('coutrrry', countryArr);


  return (
    <div data-testid={testId}>

      <div>genres</div>

      <div className="genresRows">

        <div className="genresRowOne">

          <img src="./001-guitar.png" height="100" width="100" />
          <Link to="/rock"><button type="button">rock</button></Link>

          {/* <img src="./049-singer.png" height="100" width="100" />
          <Link to="/pop"><button type="button">pop</button></Link> */}

        </div>

        <div className="genresRowTwo">

          {/* <img src="./006-amplifier.png" height="100" width="100" />
          <Link to="/bollywood"><button type="button">bollywood</button></Link>

          <img src="./012-electric guitar.png" height="100" width="100" />
          <Link to="country"><button type="button">country</button></Link> */}

        </div>

      </div>
    </div>
  );
}

GenresPage.propTypes = {
  testId: propTypes.func.isRequired,
};

export default GenresPage;
