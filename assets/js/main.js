document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Fermer le menu mobile lors du clic sur un lien
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.add('hidden');
        });
    });
});
