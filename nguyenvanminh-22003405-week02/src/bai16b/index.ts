import simulateTask from '../bai05_6a';
import multiplyAfterDelay from '../bai14b';

const callInParallel = async (): Promise<void> => {
  console.log("Starting all async operations in parallel...");
  
  const promises = [
    simulateTask(2000),
    multiplyAfterDelay(4),
    multiplyAfterDelay(10)
  ];
  
  const results = await Promise.all(promises);
  
  console.log("All parallel operations completed");
  console.log("Results:", results);
};

export default callInParallel;
