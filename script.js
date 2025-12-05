// Show Signup Form
function showSignup() {
    document.getElementById("signup-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
}

// Show Login Form
function showLogin() {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

// Sign Up Function
function signup() {
   let username = document.getElementById("new-username").value;
let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let email = document.getElementById("new-email").value;
let password = document.getElementById("new-password").value;
let confirm = document.getElementById("confirm-password").value;

// Validation
if (!username || !firstName || !lastName || !email || !password || !confirm) {
    alert("Please fill all fields!");
    return;
}

if (password !== confirm) {
    alert("Passwords do not match!");
    return;
}

// Save to localStorage
localStorage.setItem("username", username);
localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Signup successful! Please log in.");
showLogin();

}

// Login Function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (username === savedUser && password === savedPass) {
        alert("Login successful!");

        // Hide login/signup
        document.getElementById("login-box").style.display = "none";
        document.getElementById("signup-box").style.display = "none";

        // Show dashboard
        document.getElementById("dashboard").style.display = "block";

    } else {
        alert("Incorrect username or password.");
    }
}

// Device Toggle Logging
function toggleDevice(name, id) {
    let element = document.getElementById(id);
    element.classList.toggle("active");

    let state = element.classList.contains("active") ? "ON" : "OFF";
    log(`${name} turned ${state}`);
}

// Activity Log Function
function log(message) {
    let logs = document.getElementById("logs");
    let time = new Date().toLocaleTimeString();
    logs.innerHTML += `<p>[${time}] ${message}</p>`;
    logs.scrollTop = logs.scrollHeight;
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Logout Function
function logout() {
    // Optionally clear login session (not deleting user account)
    // localStorage.removeItem("username");  
    // localStorage.removeItem("password");  

    alert("You have been logged out.");

    // Hide dashboard
    document.getElementById("dashboard").style.display = "none";

    // Show login form
    document.getElementById("login-box").style.display = "block";

    // Clear login fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


