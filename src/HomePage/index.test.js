/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomePage from './index';

describe('The homePage component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<HomePage testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
