document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter a username and password");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    alert("Username can only contain letters, numbers, and underscores");
  } else {
    document.getElementById("form").submit();
    console.log("Login successful");
  }
}


function toggleLoginForm(isRegister) {
  loginForm = document.getElementById("loginForm");
  loginForm.reset();
  let btnToggler = document.getElementById("btn-toggle");
  
  let loginSubmitBtn = document.getElementById("loginSubmitBtn");
  
  let registerSubmitBtn = document.getElementById("registerSubmitBtn");
  if (!registerSubmitBtn) {
    registerSubmitBtn = document.createElement("button");
    registerSubmitBtn.innerText = "REGISTER";
    registerSubmitBtn.id = "registerSubmitBtn";
    registerSubmitBtn.classList.add("hide");
    loginForm.appendChild(registerSubmitBtn);
  }
  
  if (isRegister) {
    btnToggler.classList.add("btn-toggler-second");
    loginForm.children[5].classList.add("hide");
    loginForm.children[0].classList.remove("hide");
    loginForm.children[3].classList.remove("hide");
    loginSubmitBtn.classList.add("hide");
    registerSubmitBtn.classList.remove("hide");
  } else {
    btnToggler.classList.remove("btn-toggler-second");
    loginForm.children[5].classList.remove("hide");
    loginForm.children[0].classList.add("hide");
    loginForm.children[3].classList.add("hide");
    registerSubmitBtn.classList.add("hide");
    loginSubmitBtn.classList.remove("hide");
  }
}

/*function toggleLoginForm(isRegister) {
  loginForm = document.getElementById("loginForm");
  loginForm.reset();
  let btnToggler = document.getElementById("btn-toggle");
  if (isRegister) {
    btnToggler.classList.add("btn-toggler-second");
    loginForm.children[5].classList.add("hide");
    loginForm.children[0].classList.remove("hide");
    loginForm.children[3].classList.remove("hide");
    
    
  } else {
    btnToggler.classList.remove("btn-toggler-second");
    loginForm.children[5].classList.remove("hide");
    loginForm.children[0].classList.add("hide");
    loginForm.children[3].classList.add("hide");
    
  }
}*/

/*Changes:-
  1. login to register button submission
  2. name and i agree to terms & conditions remove
  */
