import simulateTask from '../bai05_6a';

const runTaskWithAwait = async (): Promise<void> => {
  const result = await simulateTask(2000);
  console.log(result);
};

export default runTaskWithAwait;
