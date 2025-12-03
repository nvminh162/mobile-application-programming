const createAsyncMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
};

export default createAsyncMessage;