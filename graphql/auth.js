import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

const createToken = ({ id, email, name }) => {
  const token = jwt.sign({ id, email, name }, secretKey);
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return { error: true };
  }
};

export { createToken, verifyToken };
