// local
import userDB from './db/user';
import { createToken, verifyToken } from './auth';

async function user({ id, token }) {
  if (token) {
    const user = verifyToken(token);
    return user;
  } else {
    const user = await userDB.getUser({ id });
    return user;
  }
}

async function users() {
  const users = await userDB.getUsers();
  return users;
}

async function signIn({ email, password }) {
  const user = await userDB.signIn({ email, password });
  if (user) {
    const token = createToken(user);
    return { ...user, token };
  } else {
    return null;
  }
}

// Mutation

async function signUp({ email, name, password }) {
  const success = await userDB.signUp({ email, name, password });
  return success;
}

export { signIn, signUp, user, users };
