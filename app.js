const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("button");

const loginGreeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginGreeting.innerText = `Hello, ${username}!`;
    loginGreeting.classList.remove(HIDDEN_CLASSNAME);
}


loginButton.addEventListener("click", onLoginSubmit);

