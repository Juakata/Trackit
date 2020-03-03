const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';

const signin = username => ({
  type: SIGNIN,
  username,
});

const signup = username => ({
  type: SIGNUP,
  username,
});

export { signin, signup };
