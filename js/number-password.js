// This is the number password script for the 
const input = document.getElementById('number-password'); 
// Prevent non-numeric input 
input.addEventListener('keydown', function(event) { 
// Allow only numbers and control keys 
if (!((event.key >= '0' && event.key <= '9') || event.key === 'Backspace' || event.key === 'Delete')) { 
event.preventDefault(); 
} });
