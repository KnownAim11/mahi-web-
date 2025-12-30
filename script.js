// Mobile Navigation Toggle
const hamburger = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        
        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
}

// Close mobile menu when clicking on a link
if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            if (hamburger) {
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    });
}

// Navbar scroll effect - transparent on home page, ivory on others
const navbar = document.getElementById('navbar');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelectorAll('#nav-link');
const navBookBtn = document.getElementById('nav-book-btn');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    
    if (navbar) {
        if (isHomePage && currentScroll < 100) {
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = 'none';
            // Keep text white on video background
            if (navLogo) {
                const logoSpan = navLogo.querySelector('span');
                if (logoSpan) logoSpan.style.color = '#F9F8F5';
            }
            navLinks.forEach(link => link.style.color = '#F9F8F5');
            // Keep Book button visible with white text and gold border
            if (navBookBtn) {
                navBookBtn.style.color = '#F9F8F5';
                navBookBtn.style.borderColor = '#D4AF37';
                navBookBtn.style.backgroundColor = 'transparent';
            }
        } else {
            navbar.style.background = 'rgba(249, 248, 245, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.1)';
            // Change text to dark when scrolled
            if (navLogo) {
                const logoSpan = navLogo.querySelector('span');
                if (logoSpan) logoSpan.style.color = '#2D2D2D';
            }
            navLinks.forEach(link => link.style.color = '#2D2D2D');
            // Make Book button stand out with gold background on scroll
            if (navBookBtn) {
                navBookBtn.style.color = '#2D2D2D';
                navBookBtn.style.borderColor = '#D4AF37';
                navBookBtn.style.backgroundColor = '#D4AF37';
            }
        }
    }
    
    lastScroll = currentScroll;
});

// Set initial navbar state
if (navbar) {
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    if (!isHomePage && window.pageYOffset < 100) {
        navbar.style.background = 'rgba(249, 248, 245, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.1)';
        // Set initial colors for non-home pages
        if (navLogo) {
            const logoSpan = navLogo.querySelector('span');
            if (logoSpan) logoSpan.style.color = '#2D2D2D';
        }
        navLinks.forEach(link => link.style.color = '#2D2D2D');
        if (navBookBtn) {
            navBookBtn.style.color = '#2D2D2D';
            navBookBtn.style.borderColor = '#D4AF37';
            navBookBtn.style.backgroundColor = '#D4AF37';
        }
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-item, .philosophy-text').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(item);
});

// Image zoom-on-hover effect
document.querySelectorAll('.image-placeholder, .service-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Sticky booking button visibility (show/hide based on scroll)
const stickyBooking = document.getElementById('sticky-booking');
if (stickyBooking) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Show button when scrolling down, hide when at top
        if (currentScrollY > 300) {
            stickyBooking.style.display = 'block';
        } else {
            stickyBooking.style.display = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Initially hide if at top
    if (window.scrollY < 300) {
        stickyBooking.style.display = 'none';
    }
}

// Sticky footer booking button (always visible on mobile)
const stickyFooterBooking = document.getElementById('sticky-footer-booking');
if (stickyFooterBooking) {
    // Always visible on mobile, no need to hide/show
    stickyFooterBooking.style.display = 'block';
}

// Hero video handling
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    // Ensure video plays on mobile
    heroVideo.addEventListener('loadedmetadata', () => {
        heroVideo.play().catch(e => {
            console.log('Video autoplay prevented:', e);
        });
    });
}

// Animate service overlap sections on scroll
const serviceOverlaps = document.querySelectorAll('.service-overlap');
if (serviceOverlaps.length > 0) {
    const overlapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    serviceOverlaps.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        overlapObserver.observe(item);
    });
}

// Header fade-in-up on scroll
const headers = document.querySelectorAll('.section-title, h1, h2');
headers.forEach(header => {
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    headerObserver.observe(header);
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Prevent flash of unstyled content
if (document.readyState === 'loading') {
    document.documentElement.style.opacity = '0';
    window.addEventListener('DOMContentLoaded', () => {
        document.documentElement.style.transition = 'opacity 0.3s';
        document.documentElement.style.opacity = '1';
    });
}

// Add click tracking for analytics (optional)
document.querySelectorAll('.btn-ghost, a[href*="glossgenius"]').forEach(button => {
    button.addEventListener('click', function() {
        // Analytics tracking can be added here
        console.log('Booking button clicked:', this.textContent);
    });
});

// Lazy loading for images (if real images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Parallax effect for hero images
const heroImages = document.querySelectorAll('.hero-image, .image-placeholder');
heroImages.forEach(img => {
    window.addEventListener('scroll', () => {
        const rect = img.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            img.style.transform = `translateY(${rate}px)`;
        }
    });
});
