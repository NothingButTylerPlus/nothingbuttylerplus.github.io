document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('popup'); 
  const closeButton = document.getElementById('close-btn');
  // Function to hide the popup
  function hidePopup() {
    popup.classList.add('hidden');
  } 
  // Set timeout to hide the popup after 5 seconds 
  setTimeout(hidePopup, 5000); 
  // Close button event listener 
  closeButton.addEventListener('click', hidePopup); 
});