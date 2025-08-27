import createAsyncMessage from './bai01a'
import createAsyncNumber from './bai02a'
import createAsyncError from './bai03a'
import getRandomNumber from './bai04a'
import simulateTask from './bai05_6a'
import createRacingPromises from './bai07a'
import createPromiseChain from './bai08a'
import readAndFilterEvenNumbers from './bai09a'
/*
 * Nguyễn Văn Minh - 22003405 - Week02
 */
console.log("A. Basics with Promise");
(async () => {
  console.log("1a. Create a Promise that returns the string 'Hello Async' after 2 seconds.");
  const message = await createAsyncMessage();
  console.log(message);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("2a. Write a function that returns a Promise resolving with the number 10 after 1 second.");
  const number = await createAsyncNumber();
  console.log(number);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("3a. Write a function that returns a Promise rejecting with an error after 1 second.");
  try {
    const error = await createAsyncError();
    console.log(error);
  } catch (err) {
    console.log(err);
  }
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("4a. Use .then() and .catch() to handle a Promise that returns a random number.");
  await getRandomNumber()
  .then((number) => {
    console.log("Random number:", number);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("5a. Create a function simulateTask(time) that returns a Promise resolving with 'Task done' after time ms.");
  await simulateTask(1500)
  .then((result) => {
    console.log(result);
  })
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("6a. Use Promise.all() to run 3 simulated Promises in parallel and print the result.");
  const tasks = [simulateTask(1000), simulateTask(2000), simulateTask(1500)];
  await Promise.all(tasks)
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("7a. Use Promise.race() to return whichever Promise resolves first.");
  await createRacingPromises()
  .then((result) => {
    console.log("First to resolve:", result);
  })
  .catch((error) => {
    console.error("Error in race:", error);
  });
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("8a. Create a Promise chain: square the number 2, then double it, then add 5.");
  await createPromiseChain()
  .then((result) => {
    console.log("Promise chain completed with result:", result);
  })
  .catch((error) => {
    console.error("Error in promise chain:", error);
  });
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("9a. Write a Promise that reads an array after 1 second and filters even numbers.");
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const evenNumbers = await readAndFilterEvenNumbers(sampleArray);
  console.log("Original array:", sampleArray);
  console.log("Even numbers:", evenNumbers);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log("10a. Use .finally() to log `Done` when a Promise finishes (success or failure).");
  await getRandomNumber()
  .then((number) => {
    console.log("Random number:", number);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Done");
  });
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
})();