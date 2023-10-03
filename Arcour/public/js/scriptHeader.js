const profileDropDown = document.getElementById("profile-dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");

window.addEventListener("load", () => {
    profileDropDown.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show-menu");
    });
});



