var togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  var password = document.querySelector("#password");
  var type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the eye icon
  var toggleEye = document.querySelector("#toggle-eye");
  toggleEye.classList.toggle("fa-eye-slash");
  toggleEye.classList.toggle("fa-eye");
});
