import createAsyncError from '../bai03a';

const handleErrorWithTryCatch = async (): Promise<void> => {
  try {
    const result = await createAsyncError();
    console.log(result);
  } catch (err: any) {
    console.log("Error caught:", err.message);
  }
};

export default handleErrorWithTryCatch;
