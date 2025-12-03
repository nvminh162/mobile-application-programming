import multiplyAfterDelay from '../bai14b';

const iteratePromises = async (): Promise<void> => {
  const numbers = [3, 5, 7, 9];
  const promises = numbers.map(num => multiplyAfterDelay(num));
  
  console.log("Original numbers:", numbers);
  console.log("Processing each promise with for await...of:");
  
  const results = [];
  for await (const result of promises) {
    console.log("Received result:", result);
    results.push(result);
  }
  
  console.log("All results:", results);
};

export default iteratePromises;
