export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const menuItems = ["Pizza", "Burger", "Pasta", "Salad"];
    const list = document.createElement("ul");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    content.appendChild(heading);
    content.appendChild(list);
}
