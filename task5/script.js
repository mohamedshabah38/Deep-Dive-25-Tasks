 document.addEventListener('DOMContentLoaded', function() {
            const registerForm = document.getElementById('register-form');
            const messageDiv = document.getElementById('message');
            
registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get input values
const firstname = document.getElementById('firstname').value;
const surname = document.getElementById('surname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;
                
                // Get selected gender
let gender = '';
if (document.getElementById('male').checked) {
    gender = 'Male';
} else if (document.getElementById('female').checked) {
    gender = 'Female';
} else if (document.getElementById('other').checked) {
    gender = 'Other';
}

                // Validate required fields
if (!firstname || !surname || !email || !password || !confirmPassword || !gender) {
alert('Please fill in all required fields');
 return;
}
                
                // Validate password match
if (password !== confirmPassword) {
alert('Passwords do not match');
return;
}

                // Display the welcome message with user data
document.getElementById('display-firstname').textContent = firstname;
document.getElementById('display-surname').textContent = surname;
document.getElementById('display-email').textContent = email;
document.getElementById('display-gender').textContent = gender;
document.getElementById('display-mobile').textContent = email.includes('@') ? 'Not provided' : email;
                
                // Show the message div
messageDiv.style.display = 'block';
                
                // Optional: Reset the form
registerForm.reset();
});
});