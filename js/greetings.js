const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");
const CLASS_HIDDEN = "hidden";


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add(CLASS_HIDDEN);
    showGreetings();
    
}

function showGreetings() {
    const username = localStorage.getItem("username");
    greetings.classList.remove(CLASS_HIDDEN);
    greetings.innerText = `Hello there, General ${username}!`;
}


if (savedUsername === null) {
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showGreetings();
}