/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

function GenresPage(props) {
  const { testId } = props;
  return (
    <div data-testid={testId}>
      <div>genres</div>
    </div>
  );
}

GenresPage.propTypes = {
  testId: propTypes.func.isRequired,
};

export default GenresPage;
