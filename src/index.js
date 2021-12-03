import "./style.css";

const userName = document.getElementById("username");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const conPwd = document.getElementById("conpwd");
const btn = document.querySelector("button");
// const form = document.querySelector("form");

const onSuccess = function onSuccess(input) {
  const parent = input.parentElement;
  const messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  messageEle.innerText = "";
  parent.classList.add("success");
  parent.classList.remove("error");
};

const onError = function onError(input, message) {
  const parent = input.parentElement;
  const messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
};

const isValidEmail = function isValidEmail(emailAddress) {
  return /^([a-zA-Z0-9]+[_|_|\-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/.test(
    emailAddress
  );
};

const validateInput = function validateInput() {
  // check username is empty
  if (userName.value.trim() === "") {
    onError(userName, "User Name cannot be empty");
  } else {
    onSuccess(userName);
  }

  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else if (!isValidEmail(email.value.trim())) {
    onError(email, "Email is not valid");
  } else {
    onSuccess(email);
  }

  if (pwd.value.trim() === "") {
    onError(pwd, "Password cannot be empty");
  } else {
    onSuccess(pwd);
  }

  if (conPwd.value.trim() === "") {
    onError(conPwd, "Confirm Password cannot be empty");
  } else if (conPwd.value.trim() !== pwd.value.trim()) {
    onError(conPwd, "Password & Confirm password not matching");
  } else {
    onSuccess(conPwd);
  }
};

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  validateInput();
});
