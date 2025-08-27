import createAsyncMessage from './bai01a'
import createAsyncNumber from './bai02a'
/*
 * Nguyễn Văn Minh - 22003405 - Week02
 */
console.log("A. Basics with Promise");
(async () => {
  console.log("1a. Create a Promise that returns the string 'Hello Async' after 2 seconds.");
  const message = await createAsyncMessage();
  console.log(message);
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("2a. Write a function that returns a Promise resolving with the number 10 after 1 second.");
  const number = await createAsyncNumber();
  console.log(number);
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
})();