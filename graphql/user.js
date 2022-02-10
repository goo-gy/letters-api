const db_users = [
  {
    id: 1,
    email: 'g@g.com',
    name: 'googy',
    password: '123456',
    token: '',
  },
];

export const user = ({ id }) => {
  const findUser = db_users.filter((user) => user.id === id);
  if (findUser.length === 1) return findUser[0];
};

export const users = () => {
  return db_users;
};

export const signIn = ({ email, password }) => {
  console.log(db_users);
  console.log(email, password);
  const loginUser = db_users.filter(
    (user) => user.email === email && user.password === password
  );
  if (loginUser.length === 1) return loginUser[0];
};

// Mutation

export const signUp = ({ email, name, password }) => {
  db_users.push({
    id: db_users.length + 1,
    email,
    name,
    password,
  });
  return true;
};
