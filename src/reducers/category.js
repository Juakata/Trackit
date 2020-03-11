const CATEGORY = 'CATEGORY';

const catReducer = (state = '', action) => {
  switch (action.type) {
    case CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default catReducer;
