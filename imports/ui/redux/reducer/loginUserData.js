function loginUser(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      if (
        action.payload.name === "admin" &&
        action.payload.password === "test"
      ) {
        return Object.assign({}, state, {
          loginUser: { name: "admin", password: "test" }
        });
      } else {
        return Object.assign({}, state, {
          loginUser: "Not Authorized user!"
        });
      }
    case "LOGOUT":
      return Object.assign({}, state, { loginUser: "" });
    default:
      return state;
  }
}

export default loginUser;
