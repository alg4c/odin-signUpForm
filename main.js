// validate password and show error message when passwords do not match

const password = document.querySelector("#pass");

const passwordConfirm = document.querySelector("#confPass");
passwordConfirm.addEventListener("keyup", (e) => {
  validatePassword(e.target.value);
});

const errorMsg = document.querySelector(".error");

function validatePassword(text) {
  if (password.value != text) {
    errorMsg.style.color = "red";
  } else {
    errorMsg.style.color = "grey";
  }
}
