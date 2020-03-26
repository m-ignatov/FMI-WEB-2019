const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
        username: event.target.querySelector('input[name="username"]').value,
        password: event.target.querySelector('input[name="password"]').value,
    }

    fetch("./register.php", {
        method: 'POST',
        body: JSON.stringify(formData),
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById("result").innerText = response;
        });
}

document.getElementById("userInputForm").addEventListener("submit", onSubmit);