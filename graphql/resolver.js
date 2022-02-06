import { user, users, signUp } from './user';

const resolvers = {
  Query: {
    user: (_, { id }) => user({ id }),
    users: () => users(),
  },
  Mutation: {
    signUp: (_, { email, name, password }) => signUp({ email, name, password }),
  },
};
export default resolvers;
