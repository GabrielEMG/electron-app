const initialState = [];

const clientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_ALL_CLIENTS":
      return payload;
    case "ADD_CLIENT":
      return [payload, ...state];
    default:
      return state;
  }
};

export default clientsReducer;
