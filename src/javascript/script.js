const inputPassword = document.querySelector(".input[type=password]");

const succesSvg = document.querySelector(".input[type=password] ~ img")


let timer;              // Timer identifier
const waitTime = 100;   

inputPassword.addEventListener('keyup', (e) => {
    // Clear timer
    clearTimeout(timer);

    // Wait for X ms and then process the request
    timer = setTimeout(() => {
        if(e.target.value === "password") {
            succesSvg.classList.add("succes");
        } else {
            succesSvg.classList.remove("succes");
        }
    }, waitTime);
});