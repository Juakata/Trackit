const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';
const CATEGORY = 'CATEGORY';
const ADDGOAL = 'ADDGOAL';
const UPDATEGOALS = 'UPDATEGOALS';

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

const addGoal = goal => ({
  type: ADDGOAL,
  goal,
});

const updateGoals = goals => ({
  type: UPDATEGOALS,
  goals,
});

export {
  signin, signup, setCategory, addGoal, updateGoals,
};
