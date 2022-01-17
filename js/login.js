const jwt = localStorage.getItem("jwt");

if (jwt != null) {
  window.location.href = "./index.html";
}

function login() {
  const username = document.getElementById("floatingUsername").value;
  const password = document.getElementById("floatingPassword").value;

  const xhttp = new XMLHttpRequest();
  // todo: add here api for make request
  xhttp.open("POST", "login API");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      username: username,
      password: password,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects["status"] === "ok") {
        localStorage.setItem("jwt", objects["accessToken"]);
        Swal.fire({
          text: objects["message"],
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./index.html";
          }
        });
      } else {
        Swal.fire({
          text: objects["message"],
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  return false;
}

function redirectOnMetuniverse() {
  console.log("redirect");
  // redirect on  metuniverse
}

function getNewPassword() {
  console.log("redirect");
  // redirect user for update password
}
