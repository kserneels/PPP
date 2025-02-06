import "./styles.css";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

document.getElementById("home-btn").addEventListener("click", loadHome);
document.getElementById("menu-btn").addEventListener("click", loadMenu);
document.getElementById("contact-btn").addEventListener("click", loadContact);

// Load Home Page by Default
loadHome();
