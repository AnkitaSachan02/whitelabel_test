function usersData(state = [], action) {
  switch (action.type) {
    case "CONTACTUSINFO":
      return [
        ...state,
        {
          firstName: action.result.firstName,
          lastName: action.result.lastName,
          email: action.result.email,
          phone: action.result.phone,
        }
      ];
    default:
      return state;
  }
}

export default usersData;
