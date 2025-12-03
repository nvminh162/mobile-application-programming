import fetchUser from '../bai18b';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (ids: number[]): Promise<User[]> => {
  const userPromises = ids.map(id => fetchUser(id));
  const users = await Promise.all(userPromises);
  return users;
};

export default fetchUsers;
