const ADDGOAL = 'ADDGOAL';
const UPDATEGOALS = 'UPDATEGOALS';

const goalsReducer = (state = [], action) => {
  let add = true;
  switch (action.type) {
    case ADDGOAL:
      state.forEach(e => {
        if (e.name === action.goal.name) {
          add = false;
        }
      });
      if (add) {
        return [...state, action.goal];
      }
      break;
    case UPDATEGOALS:
      return action.goals;
    default:
      return state;
  }
  return null;
};

export default goalsReducer;
