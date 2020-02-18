/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PopGenre from './index';

describe('The PopGenre component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<PopGenre testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
