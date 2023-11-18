document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginButton = document.getElementById("loginButton");
   
    //  Checking if password and username are correct
    if (username ==  "admin" && password == "admin") {  
        loginButton.style.backgroundColor = "#119134";
        loginButton.innerText = "Login successful! Redirecting...";
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000); 

        // Storing login status in sessionStorage
        sessionStorage.setItem("isLoggedIn", "true");
        
    } else {
        loginButton.style.backgroundColor = "red";
        loginButton.innerText = "Invalid username or password! Try again...";
        setTimeout(function() {
            loginButton.style.backgroundColor = "";
            loginButton.innerText = "Log In";
        }, 2000);
    }
});

// Checking if the user is already log in when page is loading
function checkLoginStatus() {
    var loginLink = document.getElementById("loginLink");    
    var logoutLink = document.getElementById("logoutLink");    

    if (sessionStorage.getItem("isLoggedIn") == "true") {
        loginLink.style.display = "none";
        logoutLink.style.display = "block";
    } else {
        loginLink.style.display = "block";
        logoutLink.style.display = "none";
    }
};

// Checking status of the login when loading any html file
window.addEventListener("load", checkLoginStatus);

// Log out functionallity
document.getElementById("logoutLink").addEventListener("click" ,function(event){
    event.preventDefault();

    // Clearing session status
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "loging.html";
});