const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginToggle.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  loginToggle.classList.add("active");
  signupToggle.classList.remove("active");
});

signupToggle.addEventListener("click", () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  signupToggle.classList.add("active");
  loginToggle.classList.remove("active");
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (!email || !password) {
    alert("Please fill in all fields to log in.");
    return;
  }
  alert("Logged in successfully!");
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  if (!name || !email || !password) {
    alert("Please fill in all fields to sign up.");
    return;
  }
  alert("Signed up successfully!");
});