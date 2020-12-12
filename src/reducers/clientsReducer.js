const initialState = [];

const clientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ALL_CLIENTS":
      return payload.sort((a, b) => b.createdAt - a.createdAt);
    case "ADD_CLIENT":
      return [payload, ...state];
    case "DELETE_client":
      return state.filter((client) => client !== payload);

    default:
      return state;
  }
};

export default clientsReducer;
