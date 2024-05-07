let userID = localStorage.getItem("userID") || "None";

function setUserID(value) {
  userID = value;
  localStorage.setItem("userID", value);
}

function getUserID() {
  return userID;
}


module.exports = { setUserID, getUserID};