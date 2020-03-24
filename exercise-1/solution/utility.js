function validate() {
    const password = document.getElementById("passwordInput");
    const passwordRepeat = document.getElementById("passwordInputRepeated");

    if (password.value != passwordRepeat.value) {
        passwordRepeat.setCustomValidity("Passwords do not match");
        return false;
    }
    passwordRepeat.setCustomValidity('');
    return true;
}
