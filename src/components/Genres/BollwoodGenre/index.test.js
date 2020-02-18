/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BollywoodGenre from './index';

describe('The BollywoodGenre component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<BollywoodGenre testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
