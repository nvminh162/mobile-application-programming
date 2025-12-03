// Create a function that uses Promise.race() to return whichever Promise resolves first
const createRacingPromises = () => {
  const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("First promise (3 seconds)"), 3000);
  });

  const promise2 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Second promise (1 second)"), 1000);
  });

  const promise3 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Third promise (2 seconds)"), 2000);
  });

  return Promise.race([promise1, promise2, promise3]);
};

export default createRacingPromises;