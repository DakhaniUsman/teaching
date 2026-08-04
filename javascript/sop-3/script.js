const button = document.getElementById("btn");

const textInput = document.getElementById("textInput");

const result = document.getElementById("result");

button.addEventListener("click", function () {
  const text = textInput.value.toLowerCase();

  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }

  result.innerHTML = "Total Vowels : " + count;
});
