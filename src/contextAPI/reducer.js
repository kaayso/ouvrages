export const initialState = {
  serviceIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SERVICE_INDEX':
      return {
        ...state,
        serviceIndex: action.serviceIndex,
      };
    default:
      return state;
  }
};

export default reducer;
