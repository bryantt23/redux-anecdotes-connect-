const initialState = { input: '' };
console.log(initialState);

export const updateFilter = input => {
  return {
    type: 'UPDATE_FILTER',
    payload: input
  };
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      const input = action.payload;
      return { ...state, input };
    default:
      return state;
  }
};

export default filterReducer;
