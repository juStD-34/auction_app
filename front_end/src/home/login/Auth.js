let login = localStorage.getItem("login") || "Logout";
let name = localStorage.getItem("name") || "None";

function setLogin(value) {
  login = value;
  localStorage.setItem("login", value);
}

function getLogin() {
  return login;
}

function setUserName(value) {
  name = value;
  localStorage.setItem("name", value);
}

function getUserName() {
  return name;
}

module.exports = { setLogin, getLogin, setUserName, getUserName};