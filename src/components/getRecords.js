const getGenresArray = (inputGenre, records) => {
  const arr = [];
  records.forEach((record) => {
    record.genres.forEach((genre) => {
      if (genre === inputGenre)arr.push(record);
    });
  });
  return arr;
};

export default getGenresArray;
