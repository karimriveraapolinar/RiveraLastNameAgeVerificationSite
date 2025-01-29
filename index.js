const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const myResult = document.getElementById('myResult');
let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);

    if (age < 18) {
        myResult.textContent = 'You are under 18.';
    } else if (age >= 18 && age < 65) {
        myResult.textContent = 'You are an adult.';
    } else {
        myResult.textContent = 'You are a senior.';
    }
};