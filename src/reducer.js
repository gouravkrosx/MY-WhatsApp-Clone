export const initialState = {
  user: null,
};

//this pushes information in datalayer
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
    //in this suppose we are adding a new user and keeping everysingle info same.  
    return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;