// Select the container div
const container = document.querySelector("#container");

// 1. Add a <p> with red text
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

// 2. Add an <h3> with blue text
const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

// 3. Add a <div> with a black border and pink background
const div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
div.style.padding = "10px";

// Inside the div: Add an <h1>
const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
div.appendChild(divHeading);

// Inside the div: Add a <p>
const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";
div.appendChild(divParagraph);

// Append the div to the container
container.appendChild(div);

// EVENTS

// Method 1: Inline event (Not recommended but shown for demonstration)
document.querySelector("#btn1").onclick = function() {
    alert("Hello World! (Method 1)");
};

// Method 2: Using onclick property
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World! (Method 2)");

// Method 3: Using addEventListener (Recommended)
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World! (Method 3)");
});

// Demonstrating event object usage
btn3.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.style.background = "blue";
});

// Adding event listeners to multiple buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`You clicked: ${button.id}`);
    });
});
