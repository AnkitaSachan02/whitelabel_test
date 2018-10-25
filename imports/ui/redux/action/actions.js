export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CONTACTUSINFO = "CONTACTUSINFO";

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function saveContactUsInfo(result) {
  console.log("user's email address is", result.email);
  return {
    type: CONTACTUSINFO,
    result
  };
}
