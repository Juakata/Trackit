const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';
const CATEGORY = 'CATEGORY';

const signin = username => ({
  type: SIGNIN,
  username,
});

const signup = username => ({
  type: SIGNUP,
  username,
});

const setCategory = category => ({
  type: CATEGORY,
  category,
});

export { signin, signup, setCategory };
