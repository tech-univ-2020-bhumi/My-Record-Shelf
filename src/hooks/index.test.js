import axios from 'axios';
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useRecords from './useRecords';

describe('the useInput hook', () => {
  it('should make an api call to fetch the records and set it in state', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { id: '1' } });
    const { result, waitForNextUpdate } = renderHook(() => useRecords());
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith('/api/records', {
      headers: {
        Authorization: ('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRjZjIxZjEzLWU0ODUtNDkwNy05YjlhLTMxYTdkN2ExYmJkYyIsIm5iZiI6MTU4MTk5ODU4MiwiZXhwIjoxNTgyMDg0OTgyLCJpYXQiOjE1ODE5OTg1ODIsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.Wj_kOeKMpop1XDz_S-QOVDz8_UC2Fu9AMH-bSbwiNm8'),
      },
    });
    // expect(result.current[0]).toEqual('123');
  });
});
