window.onload = function () {
    var success = document.getElementsByClassName("login");
    success[0].onsubmit = function () {
        var value1 = document.getElementById("username").value;
        var password1 = document.getElementById("password").value;
        var userinfo = {user : value1, password : password1};
        sessionStorage.setItem("UserInfo:", JSON.stringify(userinfo));
    }
}