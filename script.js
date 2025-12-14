function register() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({
    email: r_email.value,
    password: r_password.value
  });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered!");
  window.location.href = "index.html";
}

function login() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === email.value && u.password === password.value);

  if (email.value === "admin@gmail.com") {
    window.location.href = "admin.html";
  } else if (user) {
    localStorage.setItem("loggedUser", user.email); // ✅ store user
    window.location.href = "user.html";
  } else {
    alert("Invalid login credentials");
  }
}

