async function validate() {
    event.preventDefault();

    const data = await getData();
    console.log(data);

    noErrors = true;
    noErrors &= validateUsername();
    noErrors &= validateNames();
    noErrors &= validateEmail();
    noErrors &= validatePassword();
    noErrors &= validatePostcode();

    const username = document.getElementById('usernameInput').value;
    const usernameError = document.getElementById('usernameInputError');

    if (noErrors && isUsernameAvailable(username, data, usernameError)) {
        document.getElementById('result').innerText = "Успешна регистрация";
    }
}

async function getData() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
        .then(data => data.json())
        .catch(error => console.error(error));
}

function validateUsername() {
    var username = document.forms["userInputForm"]["usernameInput"].value;
    var usernameInputError = document.getElementById("usernameInputError");

    if (!username) {
        usernameInputError.innerText = "Потребителското име е задължително";
        return false;
    }
    if (!(username.length >= 3 && username.length <= 10)) {
        usernameInputError.innerText = "Потребителското име трябва да е между 3-10 символа";
        return false;
    }

    usernameInputError.innerHTML = "";
    return true;
}


function validateNames() {
    var name = document.forms["userInputForm"]["namesInput"].value;
    var nameInputError = document.getElementById("namesInputError");

    if (!name) {
        nameInputError.innerText = "Имената са задължителни";
        return false;
    }
    if (name.length > 50) {
        nameInputError.innerText = "Имената трябва да са до 50 символа";
        return false;
    }

    nameInputError.innerHTML = "";
    return true;
}

function validateEmail() {
    var email = document.forms["userInputForm"]["emailInput"].value;
    var emailInputError = document.getElementById("emailInputError");

    if (!email) {
        emailInputError.innerText = "Имейлът е задължителен";
        return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        emailInputError.innerText = "Имейлът трябва да е валиден";
        return false;
    }

    emailInputError.innerHTML = "";
    return true;
}

function validatePassword() {
    var password = document.forms["userInputForm"]["passwordInput"].value;
    var passwordInputError = document.getElementById("passwordInputError");

    if (!password) {
        passwordInputError.innerText = "Паролата е задължителна";
        return false;
    }
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/.test(password))) {
        passwordInputError.innerText = "Паролата трябва да съдържа между 6 и 10 символа: главни и малки букви и цифри";
        return false;
    }

    passwordInputError.innerHTML = "";
    return true;
}

function validatePostcode() {
    var postcode = document.forms["userInputForm"]["postcodeInput"].value;
    var postcodeInputError = document.getElementById("postcodeInput");

    if (postcode && !(/^[0-9]{5}-[0-9]{4}$/.test(postcode))) {
        postcodeInputError.innerText = "Пощенският код е във формат 11111-1111 (само цифри)";
        return false;
    }

    postcodeInputError.innerHTML = "";
    return true;
}

function isUsernameAvailable(username, data, usernameInputError) {
    for (var i = 0; i < data.length; i++) {
        var u = data[i].username;
        if (u == username) {
            usernameInputError.innerText = "Потребителско име е заето";
            return false;
        }
    }
    return true;
}