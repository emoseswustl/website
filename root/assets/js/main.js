window.onload = function() {
    const menu_button = document.getElementById('menu');
    const navbar = document.getElementsByClassName('navbar')[0];

    menu_button.addEventListener("click", function() {
        menu_button.getElementsByTagName('i')[0].classList.toggle('fa-bars');
        menu_button.getElementsByTagName('i')[0].classList.toggle('fa-x');
        navbar.classList.toggle('show_all');
    }); 
};