// Array containing 7 different colours

const colours = [

    "#ff595e",
    "#ffca3a",
    "#8ac926",
    "#1982c4",
    "#6a4c93",
    "#f72585",
    "#00b4d8"

];

// Fetch button

const button = document.getElementById("btn");

// Variable to store current colour

let index = 0;

// Variable to store interval id

let interval = null;


// Function to change background colour

function changeBackgroundColour(){

    document.body.style.backgroundColor = colours[index];

    index = (index + 1) % colours.length;

}


// Start changing colours

button.addEventListener("mouseover",function(){

    // Prevent multiple intervals

    if(interval === null){

        changeBackgroundColour();

        interval = setInterval(changeBackgroundColour,1000);

    }

});


// Stop changing colours

button.addEventListener("mouseout",function(){

    clearInterval(interval);

    interval = null;

});