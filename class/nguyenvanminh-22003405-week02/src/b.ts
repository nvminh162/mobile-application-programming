import createAsyncMessageWithAwait from './bai11b'
import runTaskWithAwait from './bai12b'
import handleErrorWithTryCatch from './bai13b'

const b = async () => {
    console.log("B. Async/Await Exercises");
    console.log("11b. Convert Exercise 1 to use async/await: Create a function that returns 'Hello Async' after 2 seconds.");
    const message = await createAsyncMessageWithAwait();
    console.log(message);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("12b. Write an async function that calls simulateTask(2000) and logs the result.");
    await runTaskWithAwait();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    console.log("13b. Handle errors using try/catch with async/await.");
    await handleErrorWithTryCatch();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
}

export default b;