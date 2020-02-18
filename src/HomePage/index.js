/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
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
      </div>
    </div>

  );
}

HomePage.propTypes = {
  testId: propTypes.func.isRequired,
};

export default HomePage;
