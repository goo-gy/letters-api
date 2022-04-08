import { user, users, signIn, signUp } from './user';

const resolvers = {
  Query: {
    user: (_, { id, token }) => user({ id, token }),
    users: () => users(),
    signIn: (_, { email, password }) => signIn({ email, password }),
  },
  Mutation: {
    signUp: (_, { email, name, password }) => signUp({ email, name, password }),
  },
};
export default resolvers;
