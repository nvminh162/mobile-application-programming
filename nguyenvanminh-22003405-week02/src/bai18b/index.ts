interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (id: number): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: `User ${id}`,
        email: `user${id}@example.com`
      });
    }, 1000);
  });
};

export default fetchUser;
