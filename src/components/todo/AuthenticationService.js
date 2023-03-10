class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("login succesful");
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  ifUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }
}

export default new AuthenticationService();
