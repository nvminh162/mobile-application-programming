import createAsyncMessage from './bai01a'
import createAsyncNumber from './bai02a'
import createAsyncError from './bai03a'
import getRandomNumber from './bai04a'
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
})();