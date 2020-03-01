const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';

const authReducer = (state = [], action) => {
  switch (action.type) {
    case SIGNIN:
      return action.userAuth;
    case SIGNUP:
      return action.userInfo;
    default:
      return state;
  }
};

export default authReducer;
