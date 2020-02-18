import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRjZjIxZjEzLWU0ODUtNDkwNy05YjlhLTMxYTdkN2ExYmJkYyIsIm5iZiI6MTU4MTk5ODU4MiwiZXhwIjoxNTgyMDg0OTgyLCJpYXQiOjE1ODE5OTg1ODIsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.Wj_kOeKMpop1XDz_S-QOVDz8_UC2Fu9AMH-bSbwiNm8';

const useRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      const response = await axios.get('/api/records', {
        headers: {
          Authorization: (`Bearer ${token}`),
        },
      });
        // console.log(response.data.data);
      setRecords(response.data.data);
    };
    getRecords();
  }, []);

  return [records, setRecords];
};

export default useRecords;
