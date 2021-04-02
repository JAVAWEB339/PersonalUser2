window.onload = function () {
    var success = document.getElementById("ok");
    success.onsubmit = function () {
        var value1 = document.getElementById("input1").value;
        var password1 = document.getElementById("input2").value;
        // sessionStorage.setItem("UserInfo", value1);
        // sessionStorage.setItem("UserInfo:PASSWORD", password1);
        sessionStorage.setItem("UserInfo:", "name:"+value1+"password:"+password1);
    }
}

// userinfo = {
//     name:'',
//     password: ''
// }