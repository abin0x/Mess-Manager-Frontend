// Function to toggle between login and signup forms
function showLogin() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  if (loginForm && signupForm) {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
  }
}

function showSignup() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  if (loginForm && signupForm) {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
  }
}

// Login functionality
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (!username || !password) {
    alert('Please enter username and password');
    return;
  }

  const data = { username, password };

  fetch('http://127.0.0.1:8000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) throw new Error('Invalid credentials');
      return response.json();
    })
    .then(data => {
      alert('Login Successful!');
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('token', data.token);

      updateNavLink();
      window.location.href = '/index.html';
    })
    .catch(error => alert(error.message));
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

  fetch('http://127.0.0.1:8000/api/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) throw new Error('Signup failed');
      return response.json();
    })
    .then(() => {
      alert('Signup successful!');
      showLogin();
    })
    .catch(error => alert(error.message));
}

// Logout functionality
function logout() {
  const token = sessionStorage.getItem('token');
  if (!token) {
    alert('You are not logged in');
    return;
  }

  fetch('http://127.0.0.1:8000/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
  })
    .then(response => {
      if (!response.ok) throw new Error('Logout failed');
      alert('Logged out successfully');
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('token');
      updateNavLink();
      window.location.href = '/html/login.html';
    })
    .catch(error => alert(error.message));
}

function updateNavLink() {
  const loginLogoutLink = document.getElementById('loginLogoutLink');
  const dashboardLink = document.getElementById('dashboardLink');

  if (!loginLogoutLink || !dashboardLink) {
    console.error('Could not find the navigation elements');
    return;
  }

  console.log('Checking sessionStorage for isLoggedIn:', sessionStorage.getItem('isLoggedIn'));

  if (sessionStorage.getItem('isLoggedIn')) {
    console.log('User is logged in');
    loginLogoutLink.textContent = 'Logout';
    loginLogoutLink.href = '#';
    loginLogoutLink.onclick = logout;

    console.log('Showing dashboard link');
    dashboardLink.style.display = 'block';
  } else {
    console.log('User is logged out');
    loginLogoutLink.textContent = 'Login/Signup';
    loginLogoutLink.href = './html/login.html';
    loginLogoutLink.onclick = null;

    dashboardLink.style.display = 'none';
  }
}

// Ensure the DOM is loaded before executing logic
document.addEventListener('DOMContentLoaded', () => {
  updateNavLink();
});
