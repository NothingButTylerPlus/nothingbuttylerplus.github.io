// Function to handle the display and user check
function loadDashboard() {
    // 1. Check if a user is logged in
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is logged in, now fetch their custom data (account name)
            db.collection("users").doc(user.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const userData = doc.data();
                        
                        // Update the dashboard elements
                        document.getElementById("welcome-message").textContent = `Welcome, ${userData.accountName}!`;
                        document.getElementById("profile-pic").src = userData.profilePicURL;
                    } else {
                        // This case should not happen if sign-up worked
                        document.getElementById("welcome-message").textContent = "Welcome! (Account data missing)";
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    document.getElementById("welcome-message").textContent = "Error loading account data.";
                });
        } else {
            // No user is logged in, redirect them back to the sign-up/login page
            window.location.href = "index.html";
        }
    });
}

// Function to handle logging out
document.getElementById('logout-button').addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            // Redirect to the sign-up page after a successful log out
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Logout Error:", error);
            alert("Could not log out. Check the console for details.");
        });
});

// Run the function when the page loads
loadDashboard();
