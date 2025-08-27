import createAsyncMessage from './bai01'
/*
 * Nguyễn Văn Minh - 22003405 - Week02
 */
console.log("A. Basics with Promise");
console.log("1a. Create a Promise that returns the string 'Hello Async' after 2 seconds.");
(async () => {
  const message = await createAsyncMessage();
  console.log(message);
})();
