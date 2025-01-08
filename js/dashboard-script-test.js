/* This is the script for the user dashboard */
let userIdToken; 
let googleUser;
function onSignIn(googleUser) { 
  userIdToken = googleUser.getAuthResponse().id_token; 
  const profile = googleUser.getBasicProfile();
  $('#user-info').html( <p>Name: ${profile.getName()}</p> <p>Email: ${profile.getEmail()}</p> <img src="${profile.getImageUrl()}" alt="Profile Picture"> ); 
  $('#dashboard').removeClass('hidden');
} 
function signOut() { const auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then(() => { $('#dashboard').addClass('hidden');
                                                $('#user-info').html(''); console.log('User signed out.');
                                               });
                   }
$('#sign-out').on('click', signOut);
