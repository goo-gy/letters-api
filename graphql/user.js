const db_users = [];

const user = ({ id }) => {
  const findUser = db_users.filter((user) => user.id === id);
  if (findUser.length === 1) return findUser[0];
};

const users = () => {
  return db_users;
};

// Mutation

const signUp = ({ email, name, password }) => {
  db_users.push({
    id: db_users.length + 1,
    email,
    name,
    password,
  });
  return true;
};

export { user, users, signUp };
