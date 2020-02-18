/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SyncButton from '../SyncButton';
//  import { FaHeart } from "react-icons/fa";

function HomePage(props) {
  const { testId } = props;
  return (
    <div data-tetid={testId}>
      <div>My Record Shelf</div>
      <div>
        :((
        <br />
        seems a bit empty in here...
        {/* <Link to="/genres"> */}
        <div><SyncButton /></div>
        {/* </Link> */}
      </div>
    </div>

  );
}

HomePage.propTypes = {
  testId: propTypes.func.isRequired,
};

export default HomePage;
