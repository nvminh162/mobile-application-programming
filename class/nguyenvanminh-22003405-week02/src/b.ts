import createAsyncMessageWithAwait from './bai11b'
import runTaskWithAwait from './bai12b'
import handleErrorWithTryCatch from './bai13b'
import multiplyAfterDelay from './bai14b'
import callSequentially from './bai15b'
import callInParallel from './bai16b'
import iteratePromises from './bai17b'
import fetchUser from './bai18b'
import fetchUsers from './bai19b'
import demoFetchWithTimeout from './bai20b'

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
    
    console.log("14b. Write an async function that takes a number, waits 1 second, and returns the number × 3.");
    const inputNumber = 5;
    const result = await multiplyAfterDelay(inputNumber);
    console.log(`${inputNumber} × 3 = ${result}`);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("15b. Call multiple async functions sequentially using await.");
    await callSequentially();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("16b. Call multiple async functions in parallel using Promise.all().");
    await callInParallel();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("17b. Use for await...of to iterate over an array of Promises.");
    await iteratePromises();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("18b. Write an async function fetchUser(id) that simulates an API call.");
    const user = await fetchUser(42);
    console.log("Fetched user:", user);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("19b. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.");
    const userIds = [1, 2, 3];
    const users = await fetchUsers(userIds);
    console.log("Fetched users:", users);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log("20b. Add a timeout: if the API call takes more than 2 seconds, throw an error.");
    await demoFetchWithTimeout();
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
}

export default b;