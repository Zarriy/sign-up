// internationalizing of password.
const phoneInput = document.querySelector("#tel");

const phoneInt = window.intlTelInput(phoneInput, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.js",
});
function minlengthDefin() {
  setTimeout(() => {
    phoneInput.minLength = phoneInput.placeholder.replace(
      /[()-\s]/gi,
      ""
    ).length;
  }, 800);
}
minlengthDefin();
setTimeout(() => {
  const countryFlag = document.querySelector(".iti--allow-dropdown");
  console.log(countryFlag);
  countryFlag.addEventListener("click", function (e) {
    minlengthDefin();
  });
}, 800);

// confirm password
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passMessage = document.querySelector(".password-message");
const button = document.querySelector(".btn");

function confirmPasswordV() {
  if (password.value !== confirmPassword.value) {
    button.disabled = true;
    passMessage.innerHTML = "Password Unmatch";
    passMessage.style.color = "#293241";
    confirmPassword.style.backgroundColor = "#293241";
  } else {
    button.disabled = false;
    passMessage.innerHTML = "* Password Matched.";
    passMessage.style.color = "rgb(47, 231, 255)";
    confirmPassword.style.backgroundColor = "rgb(47, 231, 255)";
  }
}

confirmPassword.addEventListener("keyup", confirmPasswordV);
