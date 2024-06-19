function logTextToConsole() {
    console.log("We are using an onclick, HTML event handler attribute to listen to a click event on this button ")
}

function showAlertOnBlur() {
    alert("The input is out of focus. This means we've triggered a blur event")
}

const usernameInput = document.getElementById('userName')
usernameInput.onblur = showAlertOnBlur;