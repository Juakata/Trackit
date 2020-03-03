const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';

const authReducer = (state = '', action) => {
  switch (action.type) {
    case SIGNIN:
      return action.username;
    case SIGNUP:
      return action.username;
    default:
      return state;
  }
};

export default authReducer;
