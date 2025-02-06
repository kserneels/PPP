export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const info = document.createElement("p");
    info.textContent = "Phone: (123) 456-7890 | Email: contact@restaurant.com";

    content.appendChild(heading);
    content.appendChild(info);
}
