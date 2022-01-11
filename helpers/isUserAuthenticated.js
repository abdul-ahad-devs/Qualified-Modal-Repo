import jwtDecode from "jwt-decode";

export const isUserAuthenticated = (token) => {
  if (token) {
    const currentTime = new Date().getTime();
    const decodedToken = jwtDecode(token);
    const expiryTime = decodedToken.exp * 1000;
    if (currentTime > expiryTime) {
      return false;
    }
  } else {
    return false;
  }
  return true;
};
