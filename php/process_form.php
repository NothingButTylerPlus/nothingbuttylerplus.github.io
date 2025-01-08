<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  // Get the data from the form
  $email = htmlspecialchars($_POST['email']); $phone = htmlspecialchars($_POST['phone']); 
  // Prepare the data to be saved
  $data = "Email: $email, Phone: $phone\n"; 
  // Save the data to a text file
  file_put_contents('responses.txt', $data, FILE_APPEND); 
  // Server response (optional: You can redirect or show a message)
  echo "Thank you for your submission!"; } ?>
