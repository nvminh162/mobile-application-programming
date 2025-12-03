const createAsyncMessageWithAwait = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
};

export default createAsyncMessageWithAwait;
