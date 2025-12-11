document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting normally

    const accountName = document.getElementById('accountName').value;
    const pin = document.getElementById('pin').value;
    const errorMessage = document.getElementById('error-message');
    
    // Create a temporary email using the account name to satisfy Firebase Auth requirements
    const email = `${accountName.toLowerCase().replace(/\s/g, '')}@nothingbuttylerplus.com`;

    errorMessage.textContent = ''; // Clear previous errors

    // 1. Create User in Firebase Authentication (handles the secure PIN hashing)
    auth.createUserWithEmailAndPassword(email, pin)
        .then((userCredential) => {
            const user = userCredential.user;
            
            // 2. Store Account Name in Firestore Database
            return db.collection("users").doc(user.uid).set({
                accountName: accountName,
                profilePicURL: "images/default-profile.png" // You need to upload this image to your repo!
            });
        })
        .then(() => {
            console.log("Sign-up complete. Redirecting...");
            // Redirect the user to their dashboard
            window.location.href = "/user/dashboard";
        })
        .catch((error) => {
            // Display any errors (e.g., pin is too weak, account name already used)
            errorMessage.textContent = `Sign-up Failed: ${error.message}`;
        });
});
