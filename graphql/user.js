import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY;

const db_users = [
  {
    id: 1,
    email: 'g@g.com',
    name: 'gooMail',
    password: '123456',
    token: '',
  },
  {
    id: 2,
    email: 'googy',
    name: 'googy',
    password: '123456',
    token: '',
  },
  {
    id: 3,
    email: 'gooroo',
    name: 'gooroo',
    password: '123456789a',
    token: '',
  },
];

const createToken = ({ id, email, name }) => {
  const token = jwt.sign({ id, email, name }, secretKey);
  return token;
};

const verifyToken = (token) => {
  try {
    console.log(token);
    console.log(secretKey);
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return { error: true };
  }
};

export const user = ({ id, token }) => {
  if (token) {
    const user = verifyToken(token);
    return user;
  } else {
    const findUser = db_users.filter((user) => user.id === id);
    if (findUser.length === 1) return findUser[0];
  }
};

export const users = () => {
  return db_users;
};

export const signIn = ({ email, password }) => {
  const users = db_users.filter(
    (user) => user.email === email && user.password === password
  );
  console.log(email, password);
  if (users.length === 1) {
    const loginUser = users[0];
    const token = createToken(loginUser);
    return { ...loginUser, token };
  }
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
