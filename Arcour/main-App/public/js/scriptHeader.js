const profileDropDown = document.getElementById("profile-dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");

window.addEventListener("load", () => {
    if(profileDropDown) {
        profileDropDown.addEventListener("click", () => {
            dropdownMenu.classList.toggle("show-menu");
        });
    }
});



