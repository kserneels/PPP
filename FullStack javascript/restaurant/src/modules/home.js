export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";

    const description = document.createElement("p");
    description.textContent = "The best place to enjoy delicious meals.";

    content.appendChild(heading);
    content.appendChild(description);
}
