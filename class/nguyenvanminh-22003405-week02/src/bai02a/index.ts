const createAsyncNumber = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

export default createAsyncNumber;
