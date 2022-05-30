import { poolPromise } from './connect';

async function signUp({ email, name, password }) {
  const QUERY_SIGNUP = `INSERT INTO user (email, name, password) VALUES('${email}', '${name}', '${password}')`;
  try {
    const [result, fields] = await poolPromise.query(QUERY_SIGNUP);
    return true;
  } catch (error) {
    return false;
  }
}

async function signIn({ email, password }) {
  const QUERY_SIGNIN = `SELECT id, email, name FROM user WHERE email='${email}' AND password='${password}'`;
  try {
    const [result, fields] = await poolPromise.query(QUERY_SIGNIN);
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getUser({ id }) {
  const QUERY_SIGNIN = `SELECT id, email, name FROM user WHERE id='${id}'`;
  try {
    const [result, fields] = await poolPromise.query(QUERY_SIGNIN);
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

async function getUsers() {
  const QUERY_SIGNIN = `SELECT id, email, name FROM user`;
  try {
    const [result, fields] = await poolPromise.query(QUERY_SIGNIN);
    if (result.length > 0) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export default { signUp, signIn, getUser, getUsers };
