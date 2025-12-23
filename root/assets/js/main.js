window.onload = function() {
    const menu_button = document.getElementById('menu');
    const navbar = document.getElementsByClassName('navbar')[0];

    if (menu_button) {
        menu_button.addEventListener("click", function() {
            menu_button.getElementsByTagName('i')[0].classList.toggle('fa-bars');
            menu_button.getElementsByTagName('i')[0].classList.toggle('fa-x');
            navbar.classList.toggle('show_all');
        });
    }

    // Project filter functionality
    const filterBtns = document.querySelectorAll('.filter_btn');
    const projectItems = document.querySelectorAll('.project_item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
};