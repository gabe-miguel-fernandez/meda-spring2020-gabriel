$(document).ready(function () {
    console.log("jQuery ready!")    
    
    $("#submit-button").click(function (event) {
        event.preventDefault();
        console.log("Clicked!");
        /*
         *  $("#username").val("Hello I was set by jQuery");
         */
        var username = $("#username").val();
        console.log("username = " + username);
        var password = $("#password").val();
        console.log("password = " + password);

        // input from text box is returned as string
        if (username == "admin") {
            $("#messages").append("<p>Welcome administrator!</p>");
            // console.log("Welcome administrator!");
                    // input from text box is returned as string
            if (password == "123456") {
                $("#messages").append("<p>Administrator successfully logged in!<p>");
                // console.log("Administrator successfully logged in!");
            } else {
                // .html clears #messages container
                $("#messages").html("<p>Login failed! Wrong username or password!<p>");
                // console.log("Login failed! Wrong username or password!");
            }
        } else {
            // .html clears #messages container
            $("#messages").html("<p>Welcome " + username + "!</p>");
            // console.log("Welcome " + username + "!");
        }
    });
});