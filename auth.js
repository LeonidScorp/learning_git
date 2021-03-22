function authenticate (login, password) {
  if (login == 'login' && password == 'password') {
    return 'You were logged in';
  } else {
    return 'Login or password is incorrect';
  }
}
