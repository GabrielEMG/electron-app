const initialState = [];

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ALL_ORDERS":
      return payload;
    case "ADD_ORDER":
      return [payload, ...state];
    case "DELETE_order":
      return state.filter((order) => order !== payload);
    default:
      return state;
  }
};

export default ordersReducer;
