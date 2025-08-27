const createAsyncMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
};

const runExample = async () => {
  console.log("Starting...");
  const message = await createAsyncMessage();
  console.log(message);
};

export default createAsyncMessage;