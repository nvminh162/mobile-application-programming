import fetchUser from '../bai18b';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUserWithTimeout = async (id: number, timeout: number = 2000): Promise<User> => {
  return Promise.race([
    fetchUser(id),
    new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Timeout: Failed to fetch user ${id} after ${timeout}ms`));
      }, timeout);
    })
  ]) as Promise<User>;
};

export { fetchUserWithTimeout };

const demoFetchWithTimeout = async (): Promise<void> => {
  try {
    console.log("Fetching user with 3 second timeout (should succeed):");
    const user1 = await fetchUserWithTimeout(1, 3000);
    console.log("Fetched user:", user1);
    
    console.log("Fetching user with 500ms timeout (should fail):");
    const user2 = await fetchUserWithTimeout(2, 500);
    console.log("Fetched user:", user2);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

export default demoFetchWithTimeout;
