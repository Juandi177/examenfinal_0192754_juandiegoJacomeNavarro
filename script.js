const password = document.getElementById("password");
const showButton = document.getElementById("showButton");
const checkButton = document.getElementById("checkButton");
const clearButton = document.getElementById("clearButton");

const result = document.getElementById("result");
const progressBar = document.getElementById("progressBar");

const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

// ===========================
// BOTÓN SHOW / HIDE
// ===========================

showButton.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";
        showButton.textContent = "Hide";

    }else{

        password.type = "password";
        showButton.textContent = "Show";

    }

});

// ===========================
// BOTÓN CHECK PASSWORD
// ===========================

checkButton.addEventListener("click", function(){

    let value = password.value;

    let score = 0;

    // Mínimo 8 caracteres

    if(value.length >= 8){

        score++;

        length.textContent = "✔ At least 8 characters";

    }else{

        length.textContent = "❌ At least 8 characters";

    }

    // Mayúscula

    if(/[A-Z]/.test(value)){

        score++;

        uppercase.textContent = "✔ Uppercase letter";

    }else{

        uppercase.textContent = "❌ Uppercase letter";

    }

    // Minúscula

    if(/[a-z]/.test(value)){

        score++;

        lowercase.textContent = "✔ Lowercase letter";

    }else{

        lowercase.textContent = "❌ Lowercase letter";

    }

    // Número

    if(/[0-9]/.test(value)){

        score++;

        number.textContent = "✔ Number";

    }else{

        number.textContent = "❌ Number";

    }

    // Símbolo

    if(/[^A-Za-z0-9]/.test(value)){

        score++;

        symbol.textContent = "✔ Symbol";

    }else{

        symbol.textContent = "❌ Symbol";

    }

    // RESULTADO FINAL

    if(score <= 2){

        result.textContent = "Weak Password ❌";

        progressBar.style.width = "30%";
        progressBar.style.background = "red";

    }

    else if(score == 3 || score == 4){

        result.textContent = "Medium Password ⚠";

        progressBar.style.width = "65%";
        progressBar.style.background = "orange";

    }

    else{

        result.textContent = "Strong Password ✅";

        progressBar.style.width = "100%";
        progressBar.style.background = "green";

    }

});

// ===========================
// BOTÓN CLEAR
// ===========================

clearButton.addEventListener("click", function(){

    password.value = "";

    result.textContent = "Waiting for analysis...";

    progressBar.style.width = "0%";
    progressBar.style.background = "red";

    length.textContent = "❌ At least 8 characters";
    uppercase.textContent = "❌ Uppercase letter";
    lowercase.textContent = "❌ Lowercase letter";
    number.textContent = "❌ Number";
    symbol.textContent = "❌ Symbol";

});