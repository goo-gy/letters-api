// local
import userDB from './db/user';
import { createToken, verifyToken } from './auth';

const user = async ({ id, token }) => {
  if (token) {
    const user = verifyToken(token);
    return user;
  } else {
    const user = await userDB.getUser({ id });
    return user;
  }
};

const users = async () => {
  const users = await userDB.getUsers();
  return users;
};

const signIn = async ({ email, password }) => {
  const user = await userDB.signIn({ email, password });
  console.log(user);
  if (user) {
    const token = createToken(user);
    return { ...user, token };
  } else {
    return null;
  }
};

// Mutation

const signUp = async ({ email, name, password }) => {
  const success = await userDB.signUp({ email, name, password });
  return success;
};

export { signIn, signUp, user, users };
