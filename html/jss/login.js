// Switch between login and signup forms
function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
  }
  
  function showSignup() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
  }
  
  // Login functionality
  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (username === 'abin0x' && password === 'proxyh4k3r') {
      alert('Login Successful!');
    } else {
      alert('Invalid credentials. Try again.');
    }
  }
  
  // Signup functionality
  function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const firstName = document.getElementById('signup-first-name').value;
    const lastName = document.getElementById('signup-last-name').value;
    const userType = document.getElementById('signup-user-type').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    const data = {
      username,
      email,
      password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      user_type: userType,
    };
  
    console.log('Signup Data:', data);
    alert('Signup Successful!');
  }
  