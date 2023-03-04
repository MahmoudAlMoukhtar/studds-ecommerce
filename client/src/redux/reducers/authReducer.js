const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        idUser: action?._id,
        isAdmin: action?.isAdmin,
      };
    case "SIGNUP":
      return {
        idUser: action?._id,
        isAdmin: action?.isAdmin,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
