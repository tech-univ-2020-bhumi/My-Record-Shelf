/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountryGenre from './index';

describe('The CountryGenre component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CountryGenre testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
