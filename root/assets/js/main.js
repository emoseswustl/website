window.onload = (event) => {
    const menu_button = document.getElementById("menu");
    const navbar = document.getElementsByClassName("navbar")[0];

    menu_button.addEventListener("click", function() {
        navbar.classList.toggle('show_all');
    }); 
};