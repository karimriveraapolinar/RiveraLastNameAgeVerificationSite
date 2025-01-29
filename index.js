const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 1 && age < 18) {
    myResult.textContent = `You are ${age}, which is between the ages of 1 and 18, dont stay up to late you child.`;
  } else if (age >= 18 && age <= 65) {
    myResult.textContent = `You are ${age}, which is between the ages of 18 and 65, labeling you as an adult`;
  } else if (age > 65 && age <= 100) {
    myResult.textContent = `You are ${age}, which is between the ages of 65 and 100, thanks grandma/pa.`;
  } else if (age > 100) {
    myResult.textContent = `You are ${age}, you're pretty much a fossil at this point.`;
  } else {
    myResult.textContent = `You are ${age}, which means you shouldn't be alive.`;
  }
}
