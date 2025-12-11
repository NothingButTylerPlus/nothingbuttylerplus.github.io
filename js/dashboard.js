    // In the dashboard.js file:

    auth.onAuthStateChanged(function(user) {
        if (user) {
            // ... (user is logged in, data loading logic) ...
        } else {
            // IF NOT logged in (user is FALSE): 
            // 1. Redirects them immediately to the login page (index.html).
            // Change the path to go up one directory (from /user/ to /)
            window.location.href = "/"; // 🚨 CRITICAL CHANGE 🚨
        }
    });

    // Also update the Sign Out function in the same file:
    document.getElementById('signOutButton').addEventListener('click', function() {
        auth.signOut()
            .then(() => {
                // Sign-out successful. Redirect to login, which is one level up.
                window.location.href = "/"; // 🚨 CRITICAL CHANGE 🚨
            })
            // ... (catch block) ...
    });
