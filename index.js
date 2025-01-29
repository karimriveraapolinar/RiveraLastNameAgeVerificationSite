const ageInput = document.getElementById("ageInput");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
let age;

submitButton.onclick = function () {
  age = ageInput.value;
  age = Number(age);
  if (age >= 1 && age < 18) {
    result.textContent = `You are ${age}, which is between the ages of 1 and 18, don't stay up too late you child.`;
  } else if (age >= 18 && age <= 65) {
    result.textContent = `You are ${age}, which is between the ages of 18 and 65, labeling you as an adult.`;
  } else if (age > 65 && age <= 100) {
    result.textContent = `You are ${age}, which is between the ages of 65 and 100, thanks grandma/pa.`;
  } else if (age > 100) {
    result.textContent = `You are ${age}, you're pretty much a fossil at this point.`;
  } else {
    result.textContent = `You are ${age}, which means you shouldn't be alive.`;
  }
};
