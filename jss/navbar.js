document.addEventListener("DOMContentLoaded", function() {
    const loginLogoutLink = document.getElementById('loginLogoutLink');

    // Check if user is logged in
    if (sessionStorage.getItem('isLoggedIn')) {
        // Change the Login/Signup link to Logout
        loginLogoutLink.textContent = 'Logout';
        loginLogoutLink.href = './logout.html'; // Link to your logout logic
    } else {
        loginLogoutLink.textContent = 'Login/Signup';
        loginLogoutLink.href = './html/login.html';
    }
});

// Handle logout
document.getElementById('loginLogoutLink')?.addEventListener('click', function(e) {
    if (sessionStorage.getItem('isLoggedIn')) {
        e.preventDefault();
        logout();
    }
});

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    location.href = './html/login.html'; // Redirect user back to login/signup page
}
