function Login() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  if (username === "merjohn@" && password === "merjohn2004") {
    window.location.href = "html/Home.html";
  } else {
    alert("Incorrect username or password");
  }
}

function showpass(checkbox) {
  var password = document.getElementById("pass");
  if (checkbox.checked) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}
