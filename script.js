function logTextToConsole(myEvent) {
    console.log("We are using an onclick, HTML event handler attribute to listen to a click event on this button ")
    console.log("The event is", myEvent) //You can access the global Javascript event object directly.
    console.log("The event type is", myEvent.type)
}

function stopLoggingTextToConsole() {
    const logTextBtn = document.getElementById('logTextBtn')
    logTextBtn.removeAttribute("onclick")
    alert("The Log Text Button doesn't work anymore. Click it to find out for yourself")
}

function showAlertOnBlur(inputEvent) {
    alert("The input is out of focus. This means we've triggered a blur event")
    console.log("The event object is", inputEvent)
}

function logTextOnBlur() {
    console.log("The form input is out of focus but the alert doesn't show anymore")
}

const usernameInput = document.getElementById('userName')
usernameInput.onblur = showAlertOnBlur; 
usernameInput.onblur = logTextOnBlur; //Second onblur handler which overrides showAlertOnBlur

// function stopBlurEvent(formBtnEvent) {
//     formBtnEvent.preventDefault()
//     usernameInput.onblur = null
//     console.log('Stop Blur Btn Clicked')
// }

// const stopBlurBtn = document.getElementById('stopBlurBtn')
// stopBlurBtn.onclick = stopBlurEvent


