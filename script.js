const form = document.getElementById("userForm");
const input = document.getElementById("userInput");
const text = document.getElementById("text");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userInput = input.value.trim();

  if (userInput[0].toLowerCase() === "a") {
    text.innerHTML = "<h4>Your future partner is: Aarav </h4>";
  } else if (userInput[0].toLowerCase() === "b") {
    text.innerHTML = "<h2>Your future partner is: Bhavya </h2>";
  } else if (userInput[0].toLowerCase() === "c") {
    text.innerHTML = "<h2>Your future partner is: Chetan </h2>";
  } else if (userInput[0].toLowerCase() === "d") {
    text.innerHTML = "<h2>Your future partner is: Daksh </h2>";
  } else if (userInput[0].toLowerCase() === "e") {
    text.innerHTML = "<h2>Your future partner is: Eklavya </h2>";
  } else if (userInput[0].toLowerCase() === "g") {
    text.innerHTML = "<h2>Your future partner is: Gaurav </h2>";
  } else if (userInput[0].toLowerCase() === "h") {
    text.innerHTML = "<h2>Your future partner is: Harsh </h2>";
  } else if (userInput[0].toLowerCase() === "i") {
    text.innerHTML = "<h2>Your future partner is: Ivaan </h2>";
  } else if (userInput[0].toLowerCase() === "j") {
    text.innerHTML = "<h2>Your future partner is: Jatin </h2>";
  } else if (userInput[0].toLowerCase() === "k") {
    text.innerHTML = "<h2>Your future partner is: Kunal </h2>";
  } else if (userInput[0].toLowerCase() === "l") {
    text.innerHTML = "<h2>Your future partner is: Lakshay </h2>";
  } else if (userInput[0].toLowerCase() === "m") {
    text.innerHTML = "<h2>Your future partner is: Manu </h2>";
  } else if (userInput[0].toLowerCase() === "n") {
    text.innerHTML = "<h2>Your future partner is: Neil </h2>";
  } else if (userInput[0].toLowerCase() === "o") {
    text.innerHTML = "<h2>Your future partner is: Ojas </h2>";
  } else if (userInput[0].toLowerCase() === "p") {
    text.innerHTML = "<h2>Your future partner is: Parth </h2>";
  } else if (userInput[0].toLowerCase() === "r") {
    text.innerHTML = "<h2>Your future partner is: Raj </h2>";
  } else if (userInput[0].toLowerCase() === "s") {
    text.innerHTML = "<h2>Your future partner is: Siddharth </h2>";
  } else if (userInput[0].toLowerCase() === "t") {
    text.innerHTML = "<h2>Your future partner is: Tarun </h2>";
  } else if (userInput[0].toLowerCase() === "u") {
    text.innerHTML = "<h2>Your future partner is: Udit </h2>";
  } else if (userInput[0].toLowerCase() === "v") {
    text.innerHTML = "<h2>Your future partner is: Varun </h2>";
  } else if (userInput[0].toLowerCase() === "y") {
    text.innerHTML = "<h2>Your future partner is: Yash </h2>";
  }
});
