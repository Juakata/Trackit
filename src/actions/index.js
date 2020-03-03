const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';

const signin = userAuth => ({
  type: SIGNIN,
  userAuth,
});

const signup = userInfo => ({
  type: SIGNUP,
  userInfo,
});

export { signin, signup };
