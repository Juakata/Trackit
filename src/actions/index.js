const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNIN';

const signin = userAuth => ({
  type: SIGNIN,
  userAuth,
});

const signup = userInfo => ({
  type: SIGNUP,
  userInfo,
});

export { signin, signup };
