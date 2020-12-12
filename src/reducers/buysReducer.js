const initialState = [];

const buysReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ALL_BUYS":
      return payload.sort((a, b) => b.createdAt - a.createdAt);
    case "ADD_BUY":
      return [payload, ...state];
    case "DELETE_buy":
      console.log("filter");
      console.log(payload);
      return state.filter((buy) => buy !== payload);
    default:
      return state;
  }
};

export default buysReducer;
