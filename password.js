let password = document.getElementById("password");
let strengthBar = document.getElementById("strengthBar");
let strengthText = document.getElementById("strengthText");

password.addEventListener('input', () => {
    let strength = checkstrength(password.value);
    updateHTML(strength);
})

function checkstrength(p) {
    let strength = 0;

    if (p.length >= 10) { strength++ };
    if (p.match(/[a-z]/)) { strength++ };
    if (p.match(/[A-Z]/)) { strength++ };
    if (p.match(/[0-9]/)) { strength++ };
    if (p.match(/[\W]/)) { strength++ };

    return strength;
}

function updateHTML(s) {
    strengthBar.className = ''
    strengthText.textContent = ''

    switch (s) {
        case 1:
            strengthBar.classList.add("very_weak");
            strengthText.textContent = "Very weak"
            break;
        case 2:
            strengthBar.classList.add("weak");
            strengthText.textContent = "Weak"
            break;
        case 3:
            strengthBar.classList.add("medium");
            strengthText.textContent = "Medium"
            break;
        case 4:
            strengthBar.classList.add("strong");
            strengthText.textContent = "Strong"
            break;
        case 5:
            strengthBar.classList.add("very_strong");
            strengthText.textContent = "Very strong"
            break;

    }
}