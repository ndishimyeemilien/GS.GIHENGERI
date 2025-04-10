document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store the logged-in user's email in localStorage
        localStorage.setItem("loggedInUserEmail", email);
        window.location.href = "profile.html"; // Redirect to profile page after login
    } else {
        document.getElementById("login-message").textContent = "Invalid email or password!";
    }
});