document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.classList.contains('animate-fade-in-up')) {
                    target.style.animation = 'fadeAndSlideInUp 1s ease-out forwards';
                } else if (target.classList.contains('animate-fade-in')) {
                    target.style.animation = 'fadeInScale 1s ease-out forwards';
                } else if (target.classList.contains('animate-slide-in-left')) {
                    const delay = parseFloat(target.dataset.delay || 0);
                    target.style.animation = `slideInLeft 0.8s ease-out forwards ${delay}s`;
                } else if (target.classList.contains('animate-zoom-in')) {
                    const delay = parseFloat(target.dataset.delay || 0);
                    target.style.animation = `zoomIn 0.7s ease-out forwards ${delay}s`;
                } else if (target.classList.contains('animate-flip-in-y')) {
                    const delay = parseFloat(target.dataset.delay || 0);
                    target.style.animation = `flipInY 0.9s ease-out forwards ${delay}s`;
                }
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // Observe elements for animations
    document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-slide-in-left, .animate-zoom-in, .animate-flip-in-y').forEach(el => {
        observer.observe(el);
    });

    // Handle initial animations for hero section elements
    document.querySelector('.hero-title').style.animation = 'fadeInScale 1s ease-out forwards';
    document.querySelector('.hero-subtitle').style.animation = 'fadeInScale 1s ease-out forwards 0.3s';
    document.querySelector('.hero-section .btn-primary').style.animation = 'fadeAndSlideInUp 1s ease-out forwards 0.6s';

    // Set delays for staggered animations (e.g., benefits, portfolio, pricing)
    // Zaktualizowana linia dla benefits-grid
    document.querySelectorAll('.benefits-grid .benefit-item').forEach((item, index) => {
        item.dataset.delay = (index * 0.1).toFixed(2); // 0s, 0.1s, 0.2s, 0.3s, 0.4s, 0.5s
    });
    document.querySelectorAll('.portfolio-grid .portfolio-item').forEach((item, index) => {
        item.dataset.delay = (index * 0.1).toFixed(2);
    });
    document.querySelectorAll('.pricing-grid .pricing-card').forEach((item, index) => {
        item.dataset.delay = (index * 0.1).toFixed(2);
    });
});