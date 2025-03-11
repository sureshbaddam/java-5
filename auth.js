document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');

  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      // Basic validation (you should add more robust validation)
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      // Store user information in local storage (for demonstration purposes)
      localStorage.setItem('username', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      alert('Sign up successful!');
      window.location.href = 'index.html'; // Redirect to home page
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      // Retrieve stored user information
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');
      const storedUsername = localStorage.getItem('username');

      // Check if credentials match
      if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');

        // Update username in navbar
        if (storedUsername) {
          document.getElementById(
            'username-display'
          ).textContent = `Welcome, ${storedUsername}!`;
        }

        window.location.href = 'index.html'; // Redirect to home page
      } else {
        alert('Invalid credentials.');
      }
    });
  }
});
