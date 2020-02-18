/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenresPage from './index';

describe('The GenresPage component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GenresPage testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
