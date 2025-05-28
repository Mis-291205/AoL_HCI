const registerButton = document.querySelector('.button-register');
var agreement = document.getElementById("agreement");


registerButton.addEventListener('click', function(event) {
    // event.preventDefault();

    saveUserData();
});


function saveUserData() {

    // console.log("P");

    const fullName = document.getElementById('full-name').value;
    const gender = document.getElementById('gender').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const dob = document.getElementById('dob').value;

    const fullNameRegex = /^[A-Za-z\s]+$/; //hanya mengandung huruf dan spasi
    const usernameRegex = /^(?=.*[A-Za-z])[A-Za-z0-9]+$/; // wajib ada huruf dan angka, karakter lain dilarang
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/; // wajib ada huruf, angka, dan karakter masing" min 1
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //harus memiliki @ dengan format -> [...]@[...].[...]
    const phoneNumberRegex = /^[0-9]+$/; //hanya mengandung angka
    

    if (!fullName.match(fullNameRegex)) {
        alert("Full name can only contain letters and spaces.");
        return;
    }

    if (fullName.length < 10) {
        alert("Full name must be at least 10 chars");
        return;
    }

    if (!username.match(usernameRegex)) {
        alert("Username must contain only letters and numbers, another characters are forbidden");
        return;
    }

    if (username.length < 5) {
        alert("Username must be at least 5 chars");
        return;
    }


    if (!password.match(passwordRegex)) {
        alert("Password must contain at least one letter, one number, and one character (!@#$%^&*)");
        return;
    }

    if (password.length < 5) {
        alert("Password must be at least 5 characters");
        return;
    }


    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (email.length < 15) {
        alert("Email must be at least 15 chars");
        return;
    }


    if (!address.toLowerCase().endsWith("street")){
        alert("Address must ends with street");
        return;
    }



    if (!phoneNumber.match(phoneNumberRegex)) {
        alert("Phone number can only contain numbers.");
        return;
    }

    if (phoneNumber.charAt(0) !== '0') {
        alert("Phone number must start with 0. Please enter again.");
        return;
    }

    if (phoneNumber.length < 10) {
        alert("Phone number must be at least 10 digits long.");
        return;
    }


    // Hanya 18 ke atas yang bisa register
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        alert("You must be at least 18 years old to register.");
        window.location.href = 'home.html';
        return;
    }



    if (fullName && gender && username && password && email && address && phoneNumber && dob) {
        if(!agreement.checked){
            alert("Agreement must be checked!");
        } else {
            const userData = {
                fullName: fullName,
                gender: gender,
                username: username,
                password: password,
                email: email,
                address: address,
                phoneNumber: phoneNumber,
                dob: dob
            };

            let users = JSON.parse(localStorage.getItem('users')) || [];

            const existingUser = users.find(user => user.username === username);

            if (existingUser) {
                if (existingUser.password !== password) {
                    alert("Username is already taken. Please choose a different username.");
                    return;
                } else {
                    const userIndex = users.findIndex(user => user.username === username);
                    users[userIndex] = userData;
                }
            } else {
                users.push(userData);
            }

            localStorage.setItem('users', JSON.stringify(users));

            localStorage.setItem('loggedInUsername', username);

            alert("Register Success");

            window.location.href = 'profile.html';
        }
    } else {
        alert("Please fill in all fields.");
    }
}
