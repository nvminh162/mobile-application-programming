import simulateTask from '../bai05_6a';
import multiplyAfterDelay from '../bai14b';

const callSequentially = async (): Promise<void> => {
  const taskResult = await simulateTask(1000);
  console.log("First async call result:", taskResult);
  
  const numberResult = await multiplyAfterDelay(7);
  console.log("Second async call result:", numberResult);
  
  const finalResult = await multiplyAfterDelay(numberResult);
  console.log("Third async call result:", finalResult);
};

export default callSequentially;
