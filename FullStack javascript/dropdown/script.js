// script.js

// Reusable function to toggle dropdown
function toggleDropdown(dropdownId, eventType) {
    const dropdown = document.getElementById(dropdownId);
    const menu = dropdown.querySelector('.dropdown-menu');

    if (eventType === 'hover') {
        dropdown.addEventListener('mouseover', () => {
            menu.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', () => {
            menu.style.display = 'none';
        });
    } else if (eventType === 'click') {
        dropdown.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Initialize dropdowns
toggleDropdown('dropdown1', 'hover');
toggleDropdown('dropdown2', 'click');
