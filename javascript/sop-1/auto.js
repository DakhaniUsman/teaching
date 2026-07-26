// Array of background colours

const colours = [
  "#ff595e",
  "#ffca3a",
  "#8ac926",
  "#1982c4",
  "#6a4c93",
  "#f72585",
  "#00b4d8",
];

// Variable to track current colour

let index = 0;

// Function to change background colour

function changeBackgroundColour() {
  document.body.style.backgroundColor = colours[index];

  index = (index + 1) % colours.length;
}

// Run automatically after page loads

window.onload = function () {
  changeBackgroundColour();

  setInterval(changeBackgroundColour, 1000);
};
