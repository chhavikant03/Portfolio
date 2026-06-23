// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active nav highlighting
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href').slice(1);
        if (href === current) {
            link.style.color = 'var(--accent-teal)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
});

// Console message
console.log('%c✨ Welcome to your APM Portfolio!', 'color: #2dd4c0; font-size: 16px; font-weight: bold;');
console.log('Replace all [PLACEHOLDER] text with your actual content.');