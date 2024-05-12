let userBudget = localStorage.getItem("userBudget") || "0";

function setBudget(value) {
  userBudget = value;
  localStorage.setItem("userBudget", value);
}

function getBudget() {
  return userBudget;
}


module.exports = { setBudget, getBudget};