const loginButton = document.querySelector('.button-login');

loginButton.addEventListener('click', function(event) {
    // event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const loggedInUser = users.find(user => user.username === username && user.password === password);

        if (loggedInUser) {
            localStorage.setItem('loggedInUsername', loggedInUser.username);

            alert("Login Success");

            window.location.href = 'profile.html';
        } else {
            alert("Username or password incorrect. Please try again.");
        }
    } else {
        alert("Please enter username and password.");
    }
});
