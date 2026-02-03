const passwordDisplay = document.getElementById('passwordDisplay');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

function generatePassword() {
    const length = 14;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordDisplay.value = password;
}

function copyPassword() {
    if (passwordDisplay.value === "") return;
    
    passwordDisplay.select();
    navigator.clipboard.writeText(passwordDisplay.value);
    alert("Password copied!");
}

// Attach events to buttons
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
