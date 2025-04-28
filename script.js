// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenuBtn = document.querySelector('.close-menu');
    
    // Function to close the mobile menu
    function closeMenu() {
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons({
                attrs: {
                    class: 'mobile-icon'
                }
            });
        }
    }
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            // Toggle between menu and x icon
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (icon.getAttribute('data-lucide') === 'menu') {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                // Recreate the icons to reflect the change
                lucide.createIcons({
                    attrs: {
                        class: 'mobile-icon'
                    }
                });
            }
        });
    }
    
    // Close menu when close button is clicked
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }
    
    // Close menu when overlay is clicked
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Pause client logo slider on hover
    const clientTrack = document.querySelector('.client-logos-track');
    if (clientTrack) {
        clientTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        clientTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (menu.classList.contains('active')) {
                closeMenu();
            }
            
            const targetId = this.getAttribute('href');
            
            // Skip for empty hash links
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight - 20, // Additional offset for spacing
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple form validation
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Simulate API call delay
            setTimeout(() => {
                // Success message
                submitButton.textContent = 'Message Sent!';
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 2000);
            }, 1500);
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    let lastScrollY = window.scrollY;
    
    // Function to handle scroll effects
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Header style on scroll
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Header hide/show on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        // Parallax effect for hero section
        if (heroSection && currentScrollY < heroSection.offsetHeight) {
            const backdrop = document.querySelector('.hero-backdrop');
            if (backdrop) {
                backdrop.style.transform = `translateY(${currentScrollY * 0.4}px)`;
                backdrop.style.opacity = Math.max(0.15 - currentScrollY * 0.0005, 0);
            }
        }
        
        lastScrollY = currentScrollY;
    }
    
    // Initial call to set correct states
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Parallax effect for images
    const parallaxContainers = document.querySelectorAll('.parallax-container');
    
    if (parallaxContainers.length > 0) {
        window.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            parallaxContainers.forEach(container => {
                const boundingRect = container.getBoundingClientRect();
                
                // Check if container is in viewport
                if (
                    boundingRect.top < window.innerHeight &&
                    boundingRect.bottom > 0 &&
                    boundingRect.left < window.innerWidth &&
                    boundingRect.right > 0
                ) {
                    const parallaxImage = container.querySelector('.parallax-image');
                    if (parallaxImage) {
                        parallaxImage.style.transform = `translate(${mouseX * -30}px, ${mouseY * -30}px)`;
                    }
                }
            });
        });
    }
    
    // Count up animation for statistics
    const countUpElements = document.querySelectorAll('.count-up');
    
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            el.textContent = Math.floor(current);
            
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }
    
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.service-card, .industry-card, .feature-list li, .section-header, .column-image, .scroll-fade-in, .scroll-scale, .scroll-rotate-in, .stat-item, .quote-container');
    
    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Start counter animation if it's a count-up element
                const countEl = entry.target.querySelector('.count-up');
                if (countEl) {
                    animateCounter(countEl);
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each element
    animateElements.forEach(el => {
        observer.observe(el);
    });
}); 