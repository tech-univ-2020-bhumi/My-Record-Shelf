/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SyncButton from './index';

describe('The SyncButton component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SyncButton testId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
