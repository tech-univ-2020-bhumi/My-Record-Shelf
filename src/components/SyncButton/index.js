/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

function SyncButton(props) {
  const { testId } = props;
  return (
    <button type="button" data-testid={testId}>sync</button>
  );
}

SyncButton.propTypes = {
  testId: propTypes.func.isRequired,
};

export default SyncButton;
