document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuDrawer = document.getElementById('menuDrawer');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuText = document.getElementById('menuText');
    const hamburger = document.getElementById('hamburger');

    let isMenuOpen = false;

    function openMenu() {
        isMenuOpen = true;
        menuDrawer.classList.add('open');
        menuOverlay.classList.add('open');
        hamburger.classList.add('active');
        menuToggle.classList.add('menu-open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Fade out MENU text and fade in CLOSE text
        menuText.style.opacity = '0';
        setTimeout(() => {
            menuText.textContent = 'CLOSE';
            menuText.style.opacity = '1';
        }, 150);
    }

    function closeMenuFunc() {
        isMenuOpen = false;
        menuDrawer.classList.remove('open');
        menuOverlay.classList.remove('open');
        hamburger.classList.remove('active');
        menuToggle.classList.remove('menu-open');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Fade out CLOSE text and fade in MENU text
        menuText.style.opacity = '0';
        setTimeout(() => {
            menuText.textContent = 'MENU';
            menuText.style.opacity = '1';
        }, 150);
    }

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        if (isMenuOpen) {
            closeMenuFunc();
        } else {
            openMenu();
        }
    });

    // Close menu
    menuOverlay.addEventListener('click', closeMenuFunc);

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenuFunc();
        }
    });
});