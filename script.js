function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "d" && password === "1") {
    window.location.href = "posts.html";
  } else {
    alert("Wrong username or password");
  }
}
