(function() {
    var butLog = document.getElementById("LogInBut");
    var butCreateAcc = document.getElementById("createAccount");
    var butRegister = document.getElementById("RegisterBut");

    butLog.addEventListener("click", function(event) {
        event = event || window.event;
        var inputs = document.querySelector("#loginForm > input");
        var username = inputs[0].value.trim();
        var password = inputs[1].value.trim();

        if (userManager.loginUser(username, password)) {
            window.location = "http://localhost/button_exercise/bravo.html"
        }
        event.preventDefault();
    }, false);

})();