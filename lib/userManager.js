import { Users } from '../data/userData';

const authenticate = ({ username, password }) => {
  Users.forEach(user => {
    if (user.username === username && user.password === password)
      return {
        username: user.username,
        fullname: user.fullname,
      };
  });
  return null;
};

export { authenticate }