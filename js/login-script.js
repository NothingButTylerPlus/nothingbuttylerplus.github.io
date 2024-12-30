document.getElementById('loginForm').addEventListener('submit', function(event) { 
  event.preventDefault(); 
  
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value; 
  const validEmails = ['tylerbloxofficialyt@gmail.com', 'nothingbuttylerofficial@gmail.com'];
  const validPasswords = ['roblox!2#', 'AthenaIsC00L123']; 
  if (validEmails.includes(email) && validPasswords.includes(password)) { 
    
    document.getElementById('message').innerText = 'Login successful! Click <a href="//valodokagames.github.io">here</a> to go to your dashboard.';
    document.getElementById('message').style.color = 'green';
                                                                        } 
  else { document.getElementById('message').innerText = 'Invalid email or password.';
       } 
});
