const initialState = [];

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ALL_ORDERS":
      return payload.sort((a, b) => b.createdAt - a.createdAt);
    case "ADD_ORDER":
      return [payload, ...state];
    case "DELETE_order":
      return state.filter((order) => order !== payload);
    case "SWITCH_COMPLETE_order":
      console.log("trigger");
      return state.map((order) =>
        order._id === payload._id ? payload : order
      );
    default:
      return state;
  }
};

export default ordersReducer;
