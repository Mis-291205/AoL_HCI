const users = JSON.parse(localStorage.getItem('users')) || [];

const loggedInUsername = localStorage.getItem('loggedInUsername');

const loggedInUser = users.find(user => user.username === loggedInUsername);

function formatDate(dateString) {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}

if (!loggedInUsername) {
    alert("Not logged in. Please log in first.");
    window.location.href = 'login.html';
} else {
    const loggedInUser = users.find(user => user.username === loggedInUsername);

    document.getElementById('full-name').value = loggedInUser.fullName;
    document.getElementById('gender').value = loggedInUser.gender;
    document.getElementById('username').value = loggedInUser.username;
    document.getElementById('password').value = loggedInUser.password;
    document.getElementById('email').value = loggedInUser.email;
    document.getElementById('address').value = loggedInUser.address;
    document.getElementById('phone-number').value = loggedInUser.phoneNumber;
    document.getElementById('dob').value = formatDate(loggedInUser.dob);

    document.querySelector('.button-logout').addEventListener('click', function() {
        document.getElementById('full-name').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';
        document.getElementById('address').value = '';
        document.getElementById('phone-number').value = '';
        document.getElementById('dob').value = '';

        localStorage.removeItem('loggedInUsername');

        alert("Logout success");

        window.location.href = 'home.html';
    });

    document.querySelector('.button-change').addEventListener('click', function() {
        alert("You can change data in register page if you input true username and password");
        window.location.href = 'register.html';
    });
}

