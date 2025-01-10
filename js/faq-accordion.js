document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ accordions
    function initAccordions() {
        const accordions = document.querySelectorAll('.t668__accordion');
        
        accordions.forEach(accordion => {
            const header = accordion.querySelector('.t668__header');
            const content = accordion.querySelector('.t668__content');
            
            // Set initial state
            content.style.display = 'none';
            
            header.addEventListener('click', () => {
                const isOpen = accordion.classList.contains('t668__opened');
                
                // Close all accordions
                accordions.forEach(acc => {
                    acc.classList.remove('t668__opened');
                    const accContent = acc.querySelector('.t668__content');
                    if (accContent) {
                        accContent.style.display = 'none';
                    }
                });
                
                // Toggle clicked accordion
                if (!isOpen) {
                    accordion.classList.add('t668__opened');
                    content.style.display = 'block';
                }
            });
        });
    }

    // Initialize when DOM is loaded
    initAccordions();
});
