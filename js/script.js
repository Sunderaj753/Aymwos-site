// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}

// ==================== Smooth Scroll Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards, AI cards, and portfolio items
document.querySelectorAll('.service-card, .ai-card, .portfolio-item').forEach(el => {
    el.classList.add('fade-in');
});

// ==================== Parallax Effect on Scroll ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-object, .stars');

    parallaxElements.forEach((el, index) => {
        el.style.transform = `translateY(${scrolled * 0.3 * (index + 1)}px)`;
    });
});

// ==================== Navbar Style on Scroll ====================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(102, 126, 234, 0.2)';
        navbar.style.background = 'rgba(15, 15, 30, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(102, 126, 234, 0.1)';
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== Floating Banner Parallax ====================
window.addEventListener('mousemove', (e) => {
    const banners = document.querySelectorAll('.floating-banner');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    banners.forEach((banner, index) => {
        const offsetX = (mouseX - 0.5) * 20 * (index + 1);
        const offsetY = (mouseY - 0.5) * 20 * (index + 1);
        banner.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// ==================== CTA Button Click Animation ====================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        // Navigate to services section
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==================== Form Submission Handler ====================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);

        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';

        // Reset form
        this.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ==================== Service Card Hover Effect ====================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

// ==================== AI Card Interactive Effects ====================
document.querySelectorAll('.ai-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// ==================== Active Link Indicator ====================
const updateActiveLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveLink);

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';

    // Animate hero title character by character
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';

        let char = 0;
        const typeEffect = setInterval(() => {
            if (char < text.length) {
                heroTitle.textContent += text.charAt(char);
                char++;
            } else {
                clearInterval(typeEffect);
            }
        }, 50);
    }
});

// ==================== Custom Cursor Effect ====================
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #667eea;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    display: none;
`;
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = (mouseX - 10) + 'px';
    cursor.style.top = (mouseY - 10) + 'px';
    cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

// ==================== Interactive Portfolio Hover ====================
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.4)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// ==================== Scroll Progress Bar ====================
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
        z-index: 10000;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createProgressBar();

// ==================== Ripple Effect CSS ====================
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==================== Floating Banners Auto-scroll ====================
const floatingBanners = document.querySelectorAll('.floating-banner');
floatingBanners.forEach((banner, index) => {
    banner.addEventListener('click', function() {
        const sections = ['home', 'services', 'ai-solutions'];
        const targetSection = sections[index] || 'home';
        const element = document.getElementById(targetSection);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== Initialize All Interactive Elements ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to elements as they appear
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .ai-card, .portfolio-item');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                el.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on load

    console.log('✓ AymWos Technologies website loaded successfully!');
});

