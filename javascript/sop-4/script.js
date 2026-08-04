const button = document.getElementById("btn");

const textInput = document.getElementById("textInput");

const reverseText = document.getElementById("reverse");

const result = document.getElementById("result");

button.addEventListener("click", function () {
  const original = textInput.value.trim().toLowerCase();

  const reversed = original.split("").reverse().join("");

  reverseText.innerHTML = "Reversed String : " + reversed;

  if (original === reversed) {
    result.innerHTML = "Result : Palindrome";

    result.style.color = "green";
  } else {
    result.innerHTML = "Result : Not a Palindrome";

    result.style.color = "red";
  }
});
z``