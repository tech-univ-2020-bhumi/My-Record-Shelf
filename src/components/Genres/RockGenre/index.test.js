/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RockGenre from './index';

describe('The RockGenre component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<RockGenre testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
