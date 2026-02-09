// ============================================
// COMPLETE PORTFOLIO - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navigation on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function activateNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', activateNavLink);
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // PROJECT FILTERING
    // ============================================
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    setTimeout(() => {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeInUp 0.5s ease-out';
                    }, index * 50);
                } else {
                    card.style.animation = 'fadeOut 0.3s ease-out';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
    
    // ============================================
    // INTERSECTION OBSERVER
    // ============================================
    const observerOptions = {
        threshold: 0.1,
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
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.project-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Arrow key navigation for filter tabs
    filterTabs.forEach((tab, index) => {
        tab.addEventListener('keydown', function(e) {
            let newIndex;
            
            switch(e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    newIndex = (index + 1) % filterTabs.length;
                    filterTabs[newIndex].focus();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    newIndex = (index - 1 + filterTabs.length) % filterTabs.length;
                    filterTabs[newIndex].focus();
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.click();
                    break;
            }
        });
    });
    
    // ============================================
    // HOVER EFFECTS
    // ============================================
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // ============================================
    // TYPING EFFECT (Optional - Hero Section)
    // ============================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect on subtitle
    // const heroSubtitle = document.querySelector('.hero-subtitle');
    // if (heroSubtitle) {
    //     const originalText = heroSubtitle.textContent;
    //     typeWriter(heroSubtitle, originalText);
    // }
    
    // ============================================
    // LAZY LOAD IMAGES
    // ============================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ============================================
    // PERFORMANCE - Debounce Function
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const handleScroll = debounce(function() {
        const scrollPosition = window.scrollY;
        
        // Parallax effect for hero section (optional)
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    }, 10);
    
    // Uncomment to enable parallax
    // window.addEventListener('scroll', handleScroll);
    
    // ============================================
    // ANALYTICS TRACKING (Placeholder)
    // ============================================
    function trackEvent(eventName, eventData) {
        console.log('Analytics Event:', eventName, eventData);
        
        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName, eventData);
        // }
    }
    
    // Track filter changes
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            trackEvent('filter_click', {
                filter_name: this.getAttribute('data-filter')
            });
        });
    });
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('button_click', {
                button_text: this.textContent
            });
        });
    });
    
    // ============================================
    // CONSOLE GREETING
    // ============================================
    console.log('%c👋 Welcome to Oshani\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #3B82F6;');
    console.log('%cInterested in collaborating? Let\'s connect!', 'font-size: 14px; color: #64748B;');
    console.log('%c📧 Email: oshani@example.com', 'font-size: 12px; color: #8B5CF6;');
    
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add fade out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// MODAL FUNCTIONALITY FOR "HOW I WORK" SECTION
// ============================================

// Modal content for each work approach
const modalContent = {
    'stakeholder-collaboration': {
        title: '🤝 Empathetic Stakeholder Collaboration',
        body: `
            <p>As a Business Analyst, I am committed to developing robust solutions that begin with a comprehensive understanding of stakeholders, extending beyond mere requirements. In my role with Student Partnerships and Swinburne University, I actively engaged with diverse stakeholders, including academic coordinators focused on governance, administrators facing operational pressures, and developers constrained by technical considerations.</p>
            
            <p>I prioritized building rapport by employing active listening techniques, asking probing questions, and validating my understanding prior to proposing solutions. For instance, during the Capstone Proposal Management System project, I collaborated closely with academic staff to gain insights into their frustrations with manual proposal handling. I translated these insights into clear, structured requirements for the development team.</p>
            
            <p>This collaborative approach not only fostered trust and reduced misalignment but also ensured smooth solution adoption, as stakeholders felt genuinely heard and engaged throughout the process.</p>
        `
    },
    'problem-solving': {
        title: '🧠 Structured Problem Solving with a Practical Mindset',
        body: `
            <p>I possess a natural ability to dissect complex problems into manageable, logical components while maintaining a focus on practical outcomes. During the Airtable Process Automation project, I encountered undocumented and highly manual workflows, which initially made the issue appear overwhelming. Rather than immediately resorting to tools, I took a step back to analyze the current state, meticulously map out processes, and identify the core bottlenecks.</p>
            
            <p>By structuring the problem into process flows, data relationships, and decision points, I was able to design a solution that addressed root causes rather than merely treating symptoms. This analytical mindset facilitated the transformation of fragmented processes into a cohesive, automated system that enhanced efficiency and data consistency, while remaining user-friendly to encourage confident adoption.</p>
        `
    },
    'quality-mindset': {
        title: '🛡️ Attention to Quality and Accountability',
        body: `
            <p>My background in Quality Assurance has profoundly influenced my approach as a Business Analyst. I take personal accountability for ensuring that deliverables function effectively - not just theoretically, but within actual operational contexts. At Virtusa, working on enterprise systems across telecom, insurance, and healthcare sectors, I recognized the critical importance of validating requirements, testing edge cases, and anticipating risks before they escalate to production.</p>
            
            <p>I integrated this quality-driven mindset into my BA roles by meticulously validating acceptance criteria, supporting User Acceptance Testing (UAT), and ensuring data accuracy in dashboards and systems I helped design. This unwavering attention to quality minimized rework, bolstered stakeholder confidence, and guaranteed that solutions were reliable from day one.</p>
            
            <p>For me, quality is not merely a phase; it is an integral aspect of responsible analysis and delivery.</p>
        `
    }
};

// Function to open modal
window.openModal = function(contentKey) {
    const content = modalContent[contentKey];
    if (!content) return;
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('workModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'workModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close" onclick="closeModal()">&times;</span>
                <h2 class="modal-title" id="modalTitle"></h2>
                <div class="modal-body" id="modalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Set content
    document.getElementById('modalTitle').innerHTML = content.title;
    document.getElementById('modalBody').innerHTML = content.body;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// Function to close modal
window.closeModal = function() {
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});


// ============================================
// EXPERIENCE SECTION INTERACTIVE TIMELINE
// ============================================

// ============================================
// EXPERIENCE SECTION - COMPLETE REBUILD
// ============================================

function initializeExperience() {
    console.log('Initializing Experience Section...');
    
    // Show first experience by default
    showExperience('experience-1');
    
    // Add click handlers to all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const experienceId = this.getAttribute('data-experience');
            console.log('Timeline item clicked:', experienceId);
            showExperience(experienceId);
        });
        
        // Also handle arrow button clicks specifically
        const arrowBtn = item.querySelector('.timeline-arrow');
        if (arrowBtn) {
            arrowBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const experienceId = item.getAttribute('data-experience');
                console.log('Arrow button clicked:', experienceId);
                showExperience(experienceId);
            });
        }
    });
}

function showExperience(experienceId) {
    console.log('=== showExperience called with:', experienceId, '===');
    
    // 1. Update timeline items
    const allTimelineItems = document.querySelectorAll('.timeline-item');
    allTimelineItems.forEach(item => {
        if (item.getAttribute('data-experience') === experienceId) {
            item.classList.add('active');
            console.log('Added active to timeline:', experienceId);
        } else {
            item.classList.remove('active');
        }
    });
    
    // 2. Update impact blocks
    const allImpactBlocks = document.querySelectorAll('.impact-block');
    console.log('Found impact blocks:', allImpactBlocks.length);
    
    allImpactBlocks.forEach(block => {
        const blockId = block.getAttribute('data-experience');
        console.log('Checking block:', blockId, 'against', experienceId);
        
        if (blockId === experienceId) {
            block.classList.add('active');
            block.style.display = 'block';
            console.log('Showing block:', blockId);
        } else {
            block.classList.remove('active');
            block.style.display = 'none';
            console.log('Hiding block:', blockId);
        }
    });
    
    console.log('=== showExperience complete ===');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExperience);
} else {
    initializeExperience();
}

// Also make it globally available for onclick handlers
window.showExperience = showExperience;

// ============================================
// HOW I WORK - MODAL FUNCTIONALITY
// ============================================
(function() {
    const overlay = document.getElementById('modal-overlay');
    const workCards = document.querySelectorAll('.work-card');
    const closeButtons = document.querySelectorAll('.work-modal-close');
    const modals = document.querySelectorAll('.work-modal');
    
    // Open modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId + '-content');
        if (!modal || !overlay) return;
        
        // Hide all modals first
        modals.forEach(m => m.classList.remove('active'));
        
        // Show overlay and specific modal
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Focus close button for accessibility
        const closeBtn = modal.querySelector('.work-modal-close');
        if (closeBtn) {
            setTimeout(() => closeBtn.focus(), 100);
        }
    }
    
    // Close modal
    function closeModal() {
        overlay.classList.remove('active');
        modals.forEach(m => m.classList.remove('active'));
        document.body.classList.remove('modal-open');
    }
    
    // Card click handlers
    workCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                openModal(modalId);
            }
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                if (modalId) {
                    openModal(modalId);
                }
            }
        });
        
        // Make cards keyboard accessible
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Read more button handlers
    const readMoreButtons = document.querySelectorAll('.work-readmore');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click from firing
            const card = this.closest('.work-card');
            const modalId = card.getAttribute('data-modal');
            if (modalId) {
                openModal(modalId);
            }
        });
    });
    
    // Close button handlers
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeModal();
        });
    });
    
    // Overlay click (outside modal)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    // ESC key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });
})();

// ============================================
// TESTIMONIALS - IMAGE MODAL
// ============================================
(function() {
    const modalOverlay = document.getElementById('testimonial-modal-overlay');
    const modalImage = document.getElementById('testimonial-modal-image');
    const closeButton = document.querySelector('.testimonial-modal-close');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Open modal with image
    function openTestimonialModal(imageSrc) {
        if (!modalOverlay || !modalImage) return;
        
        modalImage.src = imageSrc;
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Focus close button for accessibility
        if (closeButton) {
            setTimeout(() => closeButton.focus(), 100);
        }
    }
    
    // Close modal
    function closeTestimonialModal() {
        if (!modalOverlay) return;
        
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
        modalImage.src = '';
    }
    
    // Card click handlers
    testimonialCards.forEach(card => {
        card.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            if (imageSrc) {
                openTestimonialModal(imageSrc);
            }
        });
        
        // Keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const imageSrc = this.getAttribute('data-image');
                if (imageSrc) {
                    openTestimonialModal(imageSrc);
                }
            }
        });
        
        // Make cards keyboard accessible
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.querySelector('img').alt + ' - Click to enlarge');
    });
    
    // Close button handler
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeTestimonialModal();
        });
    }
    
    // Overlay click (outside image)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeTestimonialModal();
            }
        });
    }
    
    // ESC key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeTestimonialModal();
        }
    });
})();

// ============================================
// CERTIFICATE MODAL - BADGES & EDUCATION
// ============================================
(function() {
    console.log('=== Certificate Modal Script Loading ===');
    
    // Detect if path is PDF or image
    function isPDF(path) {
        return path.toLowerCase().endsWith('.pdf');
    }
    
    // Fix path: convert backslashes and encode spaces
    function fixPath(path) {
        if (!path) return '';
        const normalized = path.replace(/\\/g, '/');
        return encodeURI(normalized);
    }
    
    // Initialize modal
    function initCertificateModal() {
        console.log('=== Initializing Certificate Modal ===');
        
        const modalOverlay = document.getElementById('certificate-modal-overlay');
        const modalContent = document.getElementById('certificate-modal-content');
        const closeButton = document.querySelector('.certificate-modal-close');
        
        console.log('Modal elements:', { 
            overlay: !!modalOverlay, 
            content: !!modalContent, 
            closeButton: !!closeButton 
        });
        
        if (!modalOverlay || !modalContent) {
            console.error('❌ Certificate modal elements not found!');
            return;
        }
        
        console.log('✅ Modal elements found');
        
        // Open certificate modal
        function openCertificateModal(certPath) {
            console.log('📂 Opening modal with path:', certPath);
            
            modalContent.innerHTML = '';
            const fixedPath = fixPath(certPath);
            console.log('🔧 Fixed path:', fixedPath);
            
            if (isPDF(certPath)) {
                const iframe = document.createElement('iframe');
                iframe.src = fixedPath;
                iframe.title = 'Certificate PDF';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                modalContent.appendChild(iframe);
                console.log('📄 PDF iframe created');
            } else {
                const img = document.createElement('img');
                img.src = fixedPath;
                img.alt = 'Certificate';
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                img.style.objectFit = 'contain';
                modalContent.appendChild(img);
                console.log('🖼️ Image created');
            }
            
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
            console.log('✅ Modal opened');
            
            if (closeButton) {
                setTimeout(() => closeButton.focus(), 100);
            }
        }
        
        // Close modal
        function closeCertificateModal() {
            console.log('❌ Closing modal');
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
            modalContent.innerHTML = '';
        }
        
        // Add click handler to all clickable certificates
        const clickableCerts = document.querySelectorAll('.clickable-cert');
        console.log('🎯 Found clickable certificates:', clickableCerts.length);
        
        clickableCerts.forEach((cert, index) => {
            console.log(`  ${index + 1}. ${cert.textContent.trim()} → ${cert.getAttribute('data-cert')}`);
            
            // Make sure it's styled as clickable
            cert.style.cursor = 'pointer';
            cert.setAttribute('tabindex', '0');
            cert.setAttribute('role', 'button');
            
            // Click handler
            cert.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const certPath = this.getAttribute('data-cert');
                console.log('🖱️ Certificate clicked:', this.textContent.trim());
                if (certPath) {
                    openCertificateModal(certPath);
                } else {
                    console.error('❌ No data-cert attribute!');
                }
            });
            
            // Keyboard handler
            cert.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const certPath = this.getAttribute('data-cert');
                    if (certPath) {
                        openCertificateModal(certPath);
                    }
                }
            });
        });
        
        // Close button handler
        if (closeButton) {
            closeButton.addEventListener('click', function(e) {
                e.stopPropagation();
                closeCertificateModal();
            });
        }
        
        // Overlay click handler
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeCertificateModal();
            }
        });
        
        // ESC key handler
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeCertificateModal();
            }
        });
        
        console.log('✅ Certificate modal initialized successfully');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCertificateModal);
    } else {
        initCertificateModal();
    }
})();

// ============================================
// CONTACT FORM - FORMSPREE INTEGRATION
// ============================================
(function() {
    const form = document.getElementById('contactForm');
    const sendBtn = document.getElementById('contactSendBtn');
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const honeypot = document.querySelector('[name="company"]');
    const hiddenSubject = document.getElementById('hiddenSubject');
    
    const nameError = document.getElementById('errName');
    const emailError = document.getElementById('errEmail');
    const messageError = document.getElementById('errMessage');
    const formStatus = document.getElementById('formStatus');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Clear all errors
    function clearErrors() {
        [nameError, emailError, messageError].forEach(el => {
            if (el) {
                el.textContent = '';
                el.classList.remove('visible');
            }
        });
        [nameInput, emailInput, messageInput].forEach(el => {
            if (el) el.classList.remove('error');
        });
        if (formStatus) {
            formStatus.classList.remove('visible', 'success', 'error');
            formStatus.textContent = '';
        }
    }
    
    // Show error
    function showError(errorEl, inputEl, message) {
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('visible');
        }
        if (inputEl) {
            inputEl.classList.add('error');
            inputEl.focus();
        }
    }
    
    // Show status message
    function showStatus(message, type) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.classList.add('visible', type);
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    
    // Validate form
    function validateForm() {
        clearErrors();
        let isValid = true;
        let firstInvalidField = null;
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Validate name
        if (!name) {
            showError(nameError, nameInput, 'Name is required');
            isValid = false;
            if (!firstInvalidField) firstInvalidField = nameInput;
        } else if (name.length < 2) {
            showError(nameError, nameInput, 'Name must be at least 2 characters');
            isValid = false;
            if (!firstInvalidField) firstInvalidField = nameInput;
        }
        
        // Validate email
        if (!email) {
            showError(emailError, emailInput, 'Email is required');
            isValid = false;
            if (!firstInvalidField) firstInvalidField = emailInput;
        } else if (!emailRegex.test(email)) {
            showError(emailError, emailInput, 'Please enter a valid email address');
            isValid = false;
            if (!firstInvalidField) firstInvalidField = emailInput;
        }
        
        // Validate message
        if (!message) {
            showError(messageError, messageInput, 'Message is required');
            isValid = false;
            if (!firstInvalidField) firstInvalidField = messageInput;
        } else if (message.length < 10) {
            showError(messageError, messageInput, 'Message must be at least 10 characters');
            isValid = false;
            if (!firstInvalidField) firstInvalidField = messageInput;
        }
        
        // Focus first invalid field
        if (firstInvalidField) {
            firstInvalidField.focus();
        }
        
        return isValid;
    }
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check honeypot (spam prevention)
            if (honeypot && honeypot.value) {
                console.log('Spam detected');
                return;
            }
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Build subject with required prefix
            const name = nameInput.value.trim();
            const subjectValue = subjectInput.value.trim();
            const finalSubject = 'Connection From Protfolio ' + (subjectValue || name);
            
            // Set hidden subject field
            if (hiddenSubject) {
                hiddenSubject.value = finalSubject;
            }
            
            // Disable button and show loading state
            sendBtn.disabled = true;
            sendBtn.classList.add('loading');
            const originalText = sendBtn.textContent;
            sendBtn.textContent = 'Sending';
            
            // Prepare form data
            const formData = new FormData(form);
            
            // Send via fetch to Formspree
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    showStatus('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
                    
                    // Clear form
                    form.reset();
                    
                } else {
                    return response.json().then(data => {
                        // Error from Formspree
                        throw new Error(data.error || 'Failed to send message');
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showStatus('✗ Failed to send message. Please try again or email me directly at oshanitharanga68@gmail.com', 'error');
            })
            .finally(() => {
                // Re-enable button
                sendBtn.disabled = false;
                sendBtn.classList.remove('loading');
                sendBtn.textContent = originalText;
            });
        });
    }
})();

// ============================================
// FIX SOCIAL BUTTONS - SIDEBAR & FOOTER
// ============================================
(function() {
    // Smooth scroll function
    function smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Get all buttons with scroll-to-contact action
    const contactButtons = document.querySelectorAll('[data-action="scroll-to-contact"]');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo('#contact');
        });
    });
    
    // Get all back-to-top buttons
    const backToTopButtons = document.querySelectorAll('[data-action="back-to-top"]');
    backToTopButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Also fix the existing back-to-top button if it exists
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
})();

// ============================================
// PROJECTS SECTION - VIDEO AND MODAL
// ============================================
(function() {
    // Project data
    const projectData = {
        'project-1': {
            title: 'Project Demo 1',
            video: 'https://drive.google.com/file/d/13el8RTfme9iLo0yA0LdpTTGVMkB2xELj/preview',
            isGoogleDrive: true,
            description: 'This is a comprehensive demonstration of the first project showcasing business analysis and process improvement techniques. The project highlights key methodologies used in requirements gathering, stakeholder management, and solution delivery.'
        },
        'project-2': {
            title: 'Project Demo 2',
            video: 'https://drive.google.com/file/d/1kBhI5gmP-6RPTQEXNY_kWtEvrv7p_-eC/preview',
            isGoogleDrive: true,
            description: 'This is a comprehensive demonstration of the second project highlighting data analytics and automation solutions. The project showcases innovative approaches to data visualization, process automation, and business intelligence implementation.'
        }
    };

    // Handle video preview play buttons (only for non-iframe videos)
    const videoPlayButtons = document.querySelectorAll('.video-play-btn');
    
    videoPlayButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const videoPreview = this.previousElementSibling;
            
            if (videoPreview && videoPreview.classList.contains('project-video') && videoPreview.tagName === 'VIDEO') {
                if (videoPreview.paused) {
                    videoPreview.play();
                    videoPreview.classList.add('playing');
                    this.style.opacity = '0';
                } else {
                    videoPreview.pause();
                    videoPreview.classList.remove('playing');
                    this.style.opacity = '1';
                }
            }
        });
    });

    // Reset play button when video ends (only for HTML5 videos)
    const projectVideos = document.querySelectorAll('.project-video');
    projectVideos.forEach(video => {
        // Only add event listeners to actual video elements, not iframes
        if (video.tagName === 'VIDEO') {
            video.addEventListener('ended', function() {
                this.classList.remove('playing');
                const playBtn = this.nextElementSibling;
                if (playBtn && playBtn.classList.contains('video-play-btn')) {
                    playBtn.style.opacity = '1';
                }
            });

            // Also show play button when video is paused
            video.addEventListener('pause', function() {
                if (!this.ended) {
                    const playBtn = this.nextElementSibling;
                    if (playBtn && playBtn.classList.contains('video-play-btn')) {
                        playBtn.style.opacity = '1';
                    }
                }
            });

            video.addEventListener('play', function() {
                const playBtn = this.nextElementSibling;
                if (playBtn && playBtn.classList.contains('video-play-btn')) {
                    playBtn.style.opacity = '0';
                }
            });
        }
    });

    // Handle "See more" buttons
    const seeMoreButtons = document.querySelectorAll('.project-see-more');
    const projectModal = document.getElementById('project-modal-overlay');
    const modalTitle = document.getElementById('project-modal-title');
    const modalDescription = document.getElementById('project-modal-description');
    const modalClose = document.querySelector('.project-modal-close');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectCard = this.closest('.project-card-new');
            const projectId = projectCard.getAttribute('data-project');
            const project = projectData[projectId];

            if (project && projectModal) {
                // Pause any playing preview videos
                projectVideos.forEach(video => {
                    if (video.tagName === 'VIDEO') {
                        video.pause();
                        video.currentTime = 0;
                        video.classList.remove('playing');
                    }
                });

                // Populate modal
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;

                const videoContainer = document.querySelector('.project-modal-video-container');
                if (project.isGoogleDrive) {
                    // Create Google Drive iframe
                    videoContainer.innerHTML = `
                        <iframe class="project-modal-video project-video-gdrive" 
                                src="${project.video}" 
                                frameborder="0" 
                                allow="autoplay"
                                allowfullscreen>
                        </iframe>
                    `;
                } else {
                    // Use regular video element
                    videoContainer.innerHTML = `
                        <video class="project-modal-video" controls>
                            <source src="${project.video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `;
                }

                // Show modal
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal function
    function closeProjectModal() {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Pause and reset modal video
            const videoContainer = document.querySelector('.project-modal-video-container');
            if (videoContainer) {
                const video = videoContainer.querySelector('video');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
                // For iframes (Google Drive, YouTube), reload to stop playback
                const iframe = videoContainer.querySelector('iframe');
                if (iframe) {
                    const src = iframe.src;
                    iframe.src = src;
                }
            }
        }
    }

    // Close button
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    // Click outside modal
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
})();


// ============================================
// THREE.JS 3D VISUALIZATIONS FOR POWER BI PROJECTS
// ============================================

// Project configurations with colors and types
const projectConfigs = {
    sales: {
        color: 0xF4A261,
        secondaryColor: 0xE76F51,
        accentColor: 0xFFD166,
        type: 'bars'
    },
    trend: {
        color: 0x5B9BD5,
        secondaryColor: 0x4A90D9,
        accentColor: 0x70C1FF,
        type: 'line'
    },
    global: {
        color: 0x3B82F6,
        secondaryColor: 0x10B981,
        accentColor: 0xF59E0B,
        type: 'sphere'
    },
    operational: {
        color: 0x8B5CF6,
        secondaryColor: 0xEC4899,
        accentColor: 0xF97316,
        type: 'grid'
    }
};

// Store scenes, cameras, and renderers
const powerBIScenes = {};

// Initialize all 3D visualizations
function initPowerBIProjects() {
    // Check if THREE is available
    if (typeof THREE === 'undefined') {
        console.warn('THREE.js not loaded, skipping 3D visualizations');
        return;
    }

    Object.keys(projectConfigs).forEach(projectName => {
        const canvas = document.getElementById(`canvas-${projectName}`);
        if (canvas) {
            createPowerBIScene(projectName, canvas);
        }
    });
    
    // Start animation loop
    animatePowerBI();
}

// Create a 3D scene for a project
function createPowerBIScene(projectName, canvas) {
    const config = projectConfigs[projectName];
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: true 
    });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(config.color, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(config.secondaryColor, 0.8, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    // Create visualization based on type
    let group;
    
    switch(config.type) {
        case 'bars':
            group = createBars3D(config);
            break;
        case 'line':
            group = createLineChart3D(config);
            break;
        case 'sphere':
            group = createGlobe3D(config);
            break;
        case 'grid':
            group = createGrid3D(config);
            break;
    }
    
    scene.add(group);
    
    // Camera position
    camera.position.z = 5;
    
    // Store scene data
    powerBIScenes[projectName] = {
        scene,
        camera,
        renderer,
        group,
        config
    };
    
    // Add hover interaction
    const card = canvas.closest('.powerbi-project-card');
    if (card) {
        card.addEventListener('mouseenter', () => {
            powerBIScenes[projectName].isHovered = true;
        });
        card.addEventListener('mouseleave', () => {
            powerBIScenes[projectName].isHovered = false;
        });
    }
}

// Create 3D bar chart
function createBars3D(config) {
    const group = new THREE.Group();
    const barCount = 5;
    const spacing = 0.8;
    const heights = [1.5, 2.5, 2.0, 3.0, 2.2];
    
    for (let i = 0; i < barCount; i++) {
        const geometry = new THREE.BoxGeometry(0.5, heights[i], 0.5);
        
        // Create gradient-like effect by mixing colors
        const t = i / (barCount - 1);
        const barColor = new THREE.Color(config.color).lerp(new THREE.Color(config.accentColor), t);
        
        const material = new THREE.MeshPhongMaterial({ 
            color: barColor,
            shininess: 100,
            specular: 0xffffff,
            emissive: barColor,
            emissiveIntensity: 0.2
        });
        const bar = new THREE.Mesh(geometry, material);
        
        bar.position.x = (i - barCount / 2) * spacing;
        bar.position.y = heights[i] / 2 - 1.5;
        
        // Store original height for animation
        bar.userData.originalHeight = heights[i];
        bar.userData.index = i;
        
        // Add glowing edges
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: config.secondaryColor,
            linewidth: 2,
            transparent: true,
            opacity: 0.8
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        bar.add(wireframe);
        
        // Add top highlight
        const topGeometry = new THREE.PlaneGeometry(0.5, 0.5);
        const topMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const topHighlight = new THREE.Mesh(topGeometry, topMaterial);
        topHighlight.rotation.x = -Math.PI / 2;
        topHighlight.position.y = heights[i] / 2;
        bar.add(topHighlight);
        
        group.add(bar);
    }
    
    return group;
}

// Create 3D line chart
function createLineChart3D(config) {
    const group = new THREE.Group();
    const dataPoints = [
        new THREE.Vector3(-2, -0.5, 0),
        new THREE.Vector3(-1, 0.5, 0),
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(1, 1.2, 0),
        new THREE.Vector3(2, 1.8, 0)
    ];
    
    // Create glowing line
    const curve = new THREE.CatmullRomCurve3(dataPoints);
    const linePoints = curve.getPoints(50);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: config.color,
        linewidth: 4
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    group.add(line);
    
    // Add glow effect to line
    const glowLineMaterial = new THREE.LineBasicMaterial({ 
        color: config.color,
        linewidth: 8,
        transparent: true,
        opacity: 0.3
    });
    const glowLine = new THREE.Line(lineGeometry, glowLineMaterial);
    group.add(glowLine);
    
    // Add spheres at data points with gradient colors
    dataPoints.forEach((point, index) => {
        const t = index / (dataPoints.length - 1);
        const sphereColor = new THREE.Color(config.color).lerp(new THREE.Color(config.accentColor), t);
        
        const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const sphereMaterial = new THREE.MeshPhongMaterial({ 
            color: sphereColor,
            shininess: 100,
            emissive: sphereColor,
            emissiveIntensity: 0.4
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.copy(point);
        
        // Store original position for animation
        sphere.userData.originalY = point.y;
        sphere.userData.index = index;
        
        group.add(sphere);
        
        // Add glow ring around each sphere
        const ringGeometry = new THREE.RingGeometry(0.2, 0.25, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({ 
            color: config.secondaryColor,
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.position.copy(point);
        ring.rotation.x = -Math.PI / 2;
        group.add(ring);
    });
    
    return group;
}

// Create 3D globe with realistic Earth appearance
function createGlobe3D(config) {
    const group = new THREE.Group();
    
    // Main Earth sphere with blue oceans
    const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
        color: config.color, // Blue for oceans
        shininess: 80,
        transparent: false,
        opacity: 1
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);
    
    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.6, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x3B82F6,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    group.add(atmosphere);
    
    // Wireframe latitude/longitude lines
    const wireframeGeometry = new THREE.SphereGeometry(1.52, 24, 24);
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    group.add(wireframe);
    
    // Add data points representing different countries/regions
    const dataLocations = [
        { lat: 40.7128, lon: -74.0060, color: 0xF59E0B, size: 0.08 },  // New York - Orange
        { lat: 51.5074, lon: -0.1278, color: 0xEF4444, size: 0.07 },   // London - Red
        { lat: 35.6762, lon: 139.6503, color: 0x10B981, size: 0.08 },  // Tokyo - Green
        { lat: -33.8688, lon: 151.2093, color: 0x8B5CF6, size: 0.06 }, // Sydney - Purple
        { lat: 1.3521, lon: 103.8198, color: 0xEC4899, size: 0.06 },   // Singapore - Pink
        { lat: 28.6139, lon: 77.2090, color: 0xF59E0B, size: 0.07 },   // Delhi - Orange
        { lat: -23.5505, lon: -46.6333, color: 0x10B981, size: 0.06 }, // São Paulo - Green
        { lat: 55.7558, lon: 37.6173, color: 0x3B82F6, size: 0.06 },   // Moscow - Blue
        { lat: 25.2048, lon: 55.2708, color: 0xF59E0B, size: 0.07 },   // Dubai - Orange
        { lat: 37.7749, lon: -122.4194, color: 0xEC4899, size: 0.07 }, // San Francisco - Pink
        { lat: -1.2921, lon: 36.8219, color: 0xEF4444, size: 0.06 },   // Nairobi - Red
        { lat: 52.5200, lon: 13.4050, color: 0x8B5CF6, size: 0.06 },   // Berlin - Purple
    ];
    
    dataLocations.forEach((location, index) => {
        // Convert lat/lon to 3D coordinates
        const phi = (90 - location.lat) * (Math.PI / 180);
        const theta = (location.lon + 180) * (Math.PI / 180);
        
        const radius = 1.5;
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = (radius * Math.sin(phi) * Math.sin(theta));
        const y = (radius * Math.cos(phi));
        
        // Create glowing marker
        const markerGeometry = new THREE.SphereGeometry(location.size, 16, 16);
        const markerMaterial = new THREE.MeshBasicMaterial({ 
            color: location.color,
            transparent: true,
            opacity: 0.9
        });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.set(x, y, z);
        
        // Store for pulsing animation
        marker.userData.originalScale = location.size;
        marker.userData.index = index;
        marker.userData.baseSize = location.size;
        
        group.add(marker);
        
        // Add glow ring around marker
        const ringGeometry = new THREE.RingGeometry(location.size * 1.5, location.size * 2, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({ 
            color: location.color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.position.set(x, y, z);
        
        // Orient ring to face outward from globe
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        ring.userData.index = index;
        
        group.add(ring);
        
        // Add vertical line from marker
        const lineHeight = 0.3;
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x, y, z),
            new THREE.Vector3(x * 1.2, y * 1.2, z * 1.2)
        ]);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: location.color,
            transparent: true,
            opacity: 0.6,
            linewidth: 2
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
    });
    
    // Add some connecting arcs between major cities
    const connections = [
        [0, 1], // NY to London
        [1, 2], // London to Tokyo
        [2, 4], // Tokyo to Singapore
        [4, 9], // Singapore to SF
        [9, 0], // SF to NY
    ];
    
    connections.forEach(([startIdx, endIdx]) => {
        const start = dataLocations[startIdx];
        const end = dataLocations[endIdx];
        
        // Convert to 3D positions
        const phi1 = (90 - start.lat) * (Math.PI / 180);
        const theta1 = (start.lon + 180) * (Math.PI / 180);
        const phi2 = (90 - end.lat) * (Math.PI / 180);
        const theta2 = (end.lon + 180) * (Math.PI / 180);
        
        const radius = 1.5;
        const startPos = new THREE.Vector3(
            -(radius * Math.sin(phi1) * Math.cos(theta1)),
            (radius * Math.cos(phi1)),
            (radius * Math.sin(phi1) * Math.sin(theta1))
        );
        const endPos = new THREE.Vector3(
            -(radius * Math.sin(phi2) * Math.cos(theta2)),
            (radius * Math.cos(phi2)),
            (radius * Math.sin(phi2) * Math.sin(theta2))
        );
        
        // Create arc
        const arcPoints = [];
        for (let i = 0; i <= 30; i++) {
            const t = i / 30;
            const point = new THREE.Vector3().lerpVectors(startPos, endPos, t);
            point.normalize().multiplyScalar(radius + 0.2 + Math.sin(t * Math.PI) * 0.3);
            arcPoints.push(point);
        }
        
        const arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
        const arcMaterial = new THREE.LineBasicMaterial({ 
            color: 0x10B981,
            transparent: true,
            opacity: 0.3,
            linewidth: 1
        });
        const arc = new THREE.Line(arcGeometry, arcMaterial);
        group.add(arc);
    });
    
    return group;
}

// Create 3D operational dashboard with panels and metrics
function createGrid3D(config) {
    const group = new THREE.Group();
    
    // Dashboard background panel
    const panelGeometry = new THREE.PlaneGeometry(3.5, 2.5);
    const panelMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x1a1a2e,
        side: THREE.DoubleSide,
        shininess: 30
    });
    const panel = new THREE.Mesh(panelGeometry, panelMaterial);
    panel.position.z = -0.5;
    group.add(panel);
    
    // Create dashboard cards/widgets
    const cardConfigs = [
        { x: -1.2, y: 0.7, width: 0.8, height: 0.6, color: config.color, type: 'gauge' },
        { x: 0, y: 0.7, width: 0.8, height: 0.6, color: config.secondaryColor, type: 'bar' },
        { x: 1.2, y: 0.7, width: 0.8, height: 0.6, color: config.accentColor, type: 'line' },
        { x: -0.6, y: -0.2, width: 1.0, height: 0.7, color: 0x10B981, type: 'area' },
        { x: 0.8, y: -0.2, width: 1.0, height: 0.7, color: 0xEF4444, type: 'pie' },
        { x: 0, y: -1.0, width: 2.2, height: 0.4, color: 0x3B82F6, type: 'metric' }
    ];
    
    cardConfigs.forEach((card, index) => {
        // Card background
        const cardGeometry = new THREE.PlaneGeometry(card.width, card.height);
        const cardMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x2d2d44,
            side: THREE.DoubleSide,
            shininess: 50
        });
        const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
        cardMesh.position.set(card.x, card.y, 0);
        group.add(cardMesh);
        
        // Card border
        const borderGeometry = new THREE.EdgesGeometry(cardGeometry);
        const borderMaterial = new THREE.LineBasicMaterial({ 
            color: card.color,
            transparent: true,
            opacity: 0.6
        });
        const border = new THREE.LineSegments(borderGeometry, borderMaterial);
        border.position.set(card.x, card.y, 0.01);
        group.add(border);
        
        // Create different visualizations based on type
        switch(card.type) {
            case 'gauge':
                createGaugeWidget(group, card, index);
                break;
            case 'bar':
                createBarWidget(group, card, index);
                break;
            case 'line':
                createLineWidget(group, card, index);
                break;
            case 'area':
                createAreaWidget(group, card, index);
                break;
            case 'pie':
                createPieWidget(group, card, index);
                break;
            case 'metric':
                createMetricWidget(group, card, index);
                break;
        }
        
        // Add header bar
        const headerGeometry = new THREE.PlaneGeometry(card.width, 0.08);
        const headerMaterial = new THREE.MeshBasicMaterial({ 
            color: card.color,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const header = new THREE.Mesh(headerGeometry, headerMaterial);
        header.position.set(card.x, card.y + card.height/2 - 0.04, 0.02);
        group.add(header);
    });
    
    return group;
}

// Helper function: Create gauge widget
function createGaugeWidget(group, card, index) {
    const radius = card.height * 0.3;
    const arcGeometry = new THREE.RingGeometry(radius * 0.8, radius, 32, 1, 0, Math.PI);
    const arcMaterial = new THREE.MeshBasicMaterial({ 
        color: card.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
    });
    const arc = new THREE.Mesh(arcGeometry, arcMaterial);
    arc.position.set(card.x, card.y - 0.1, 0.03);
    arc.rotation.z = Math.PI / 2;
    arc.userData.index = index;
    arc.userData.type = 'gauge';
    group.add(arc);
    
    // Needle
    const needleGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(radius * 0.7, 0, 0)
    ]);
    const needleMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    const needle = new THREE.Line(needleGeometry, needleMaterial);
    needle.position.set(card.x, card.y - 0.1, 0.04);
    needle.userData.index = index;
    needle.userData.type = 'needle';
    group.add(needle);
}

// Helper function: Create bar widget
function createBarWidget(group, card, index) {
    const barCount = 4;
    const barWidth = (card.width - 0.2) / barCount;
    const heights = [0.3, 0.45, 0.35, 0.5];
    
    for (let i = 0; i < barCount; i++) {
        const barGeometry = new THREE.PlaneGeometry(barWidth * 0.6, heights[i]);
        const barMaterial = new THREE.MeshBasicMaterial({ 
            color: card.color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
        });
        const bar = new THREE.Mesh(barGeometry, barMaterial);
        const xPos = card.x - card.width/2 + barWidth/2 + i * barWidth + 0.1;
        bar.position.set(xPos, card.y - 0.15 + heights[i]/2, 0.03);
        bar.userData.index = index * 10 + i;
        bar.userData.type = 'bar';
        bar.userData.originalHeight = heights[i];
        group.add(bar);
    }
}

// Helper function: Create line widget
function createLineWidget(group, card, index) {
    const points = [
        new THREE.Vector3(card.x - card.width/2 + 0.1, card.y - 0.1, 0.03),
        new THREE.Vector3(card.x - card.width/4, card.y, 0.03),
        new THREE.Vector3(card.x, card.y - 0.05, 0.03),
        new THREE.Vector3(card.x + card.width/4, card.y + 0.1, 0.03),
        new THREE.Vector3(card.x + card.width/2 - 0.1, card.y + 0.05, 0.03)
    ];
    
    const curve = new THREE.CatmullRomCurve3(points);
    const curvePoints = curve.getPoints(50);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: card.color,
        linewidth: 2
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.userData.index = index;
    line.userData.type = 'line';
    group.add(line);
    
    // Add dots
    points.forEach((point, i) => {
        const dotGeometry = new THREE.CircleGeometry(0.03, 16);
        const dotMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            side: THREE.DoubleSide
        });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        dot.position.copy(point);
        dot.position.z = 0.04;
        dot.userData.index = index * 10 + i;
        dot.userData.type = 'dot';
        group.add(dot);
    });
}

// Helper function: Create area widget
function createAreaWidget(group, card, index) {
    const points = [];
    const steps = 20;
    for (let i = 0; i <= steps; i++) {
        const x = card.x - card.width/2 + (i / steps) * card.width;
        const y = card.y - card.height/2 + Math.random() * card.height * 0.6 + 0.1;
        points.push(new THREE.Vector3(x, y, 0.03));
    }
    
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: card.color,
        linewidth: 2
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.userData.index = index;
    line.userData.type = 'area';
    group.add(line);
    
    // Fill area
    const fillPoints = [...points];
    fillPoints.push(new THREE.Vector3(card.x + card.width/2, card.y - card.height/2, 0.03));
    fillPoints.push(new THREE.Vector3(card.x - card.width/2, card.y - card.height/2, 0.03));
    
    const shape = new THREE.Shape();
    shape.moveTo(fillPoints[0].x, fillPoints[0].y);
    fillPoints.forEach(p => shape.lineTo(p.x, p.y));
    
    const fillGeometry = new THREE.ShapeGeometry(shape);
    const fillMaterial = new THREE.MeshBasicMaterial({ 
        color: card.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    const fill = new THREE.Mesh(fillGeometry, fillMaterial);
    fill.position.z = 0.02;
    group.add(fill);
}

// Helper function: Create pie widget
function createPieWidget(group, card, index) {
    const radius = card.height * 0.35;
    const segments = [
        { angle: Math.PI * 0.4, color: 0x8B5CF6 },
        { angle: Math.PI * 0.3, color: 0xEC4899 },
        { angle: Math.PI * 0.5, color: 0xF97316 },
        { angle: Math.PI * 0.8, color: 0x10B981 }
    ];
    
    let startAngle = 0;
    segments.forEach((segment, i) => {
        const geometry = new THREE.CircleGeometry(radius, 32, startAngle, segment.angle);
        const material = new THREE.MeshBasicMaterial({ 
            color: segment.color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
        });
        const slice = new THREE.Mesh(geometry, material);
        slice.position.set(card.x, card.y - 0.05, 0.03);
        slice.userData.index = index * 10 + i;
        slice.userData.type = 'pie';
        group.add(slice);
        
        // Border
        const borderGeometry = new THREE.RingGeometry(radius - 0.01, radius, 32, 1, startAngle, segment.angle);
        const borderMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3
        });
        const border = new THREE.Mesh(borderGeometry, borderMaterial);
        border.position.set(card.x, card.y - 0.05, 0.04);
        group.add(border);
        
        startAngle += segment.angle;
    });
}

// Helper function: Create metric widget
function createMetricWidget(group, card, index) {
    const metrics = [
        { x: -0.7, value: 0.8, color: 0x10B981 },
        { x: -0.2, value: 0.6, color: 0x3B82F6 },
        { x: 0.3, value: 0.9, color: 0xF59E0B },
        { x: 0.8, value: 0.7, color: 0xEC4899 }
    ];
    
    metrics.forEach((metric, i) => {
        // Metric bar
        const barGeometry = new THREE.PlaneGeometry(0.15, 0.2);
        const barMaterial = new THREE.MeshBasicMaterial({ 
            color: metric.color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
        });
        const bar = new THREE.Mesh(barGeometry, barMaterial);
        bar.position.set(card.x + metric.x, card.y - 0.05, 0.03);
        bar.userData.index = index * 10 + i;
        bar.userData.type = 'metric';
        bar.userData.targetScale = metric.value;
        group.add(bar);
        
        // Dot indicator
        const dotGeometry = new THREE.CircleGeometry(0.04, 16);
        const dotMaterial = new THREE.MeshBasicMaterial({ 
            color: metric.color,
            side: THREE.DoubleSide
        });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        dot.position.set(card.x + metric.x, card.y + 0.1, 0.04);
        dot.userData.index = index * 10 + i;
        dot.userData.type = 'metricDot';
        group.add(dot);
    });
}

// Animation loop
function animatePowerBI() {
    requestAnimationFrame(animatePowerBI);
    
    const time = Date.now() * 0.001;
    
    Object.keys(powerBIScenes).forEach(projectName => {
        const sceneData = powerBIScenes[projectName];
        const { scene, camera, renderer, group, config, isHovered } = sceneData;
        
        // Rotate the group
        if (group) {
            const rotationSpeed = isHovered ? 0.02 : 0.01;
            
            switch(config.type) {
                case 'bars':
                    group.rotation.y += rotationSpeed;
                    // Enhanced bounce effect on bars
                    group.children.forEach((child, index) => {
                        if (child.geometry && child.geometry.parameters && child.userData.originalHeight) {
                            const bounceHeight = Math.sin(time * 2 + child.userData.index * 0.5) * 0.15;
                            child.position.y = (child.userData.originalHeight / 2 - 1.5) + bounceHeight;
                            
                            // Pulsing scale effect
                            const scale = 1 + Math.sin(time * 3 + child.userData.index * 0.3) * 0.05;
                            child.scale.x = scale;
                            child.scale.z = scale;
                        }
                    });
                    break;
                    
                case 'line':
                    group.rotation.y += rotationSpeed * 0.5;
                    group.rotation.x = Math.sin(time * 0.5) * 0.15;
                    
                    // Animate data point spheres
                    group.children.forEach((child) => {
                        if (child.geometry && child.geometry.type === 'SphereGeometry' && child.userData.originalY !== undefined) {
                            const float = Math.sin(time * 2 + child.userData.index * 0.5) * 0.1;
                            child.position.y = child.userData.originalY + float;
                            
                            // Pulsing glow
                            const pulse = Math.sin(time * 3 + child.userData.index * 0.7) * 0.2 + 0.8;
                            child.scale.setScalar(pulse);
                        }
                        
                        // Animate rings
                        if (child.geometry && child.geometry.type === 'RingGeometry') {
                            const pulse = Math.sin(time * 2 + child.userData.index * 0.5) * 0.2 + 1;
                            child.scale.setScalar(pulse);
                            child.rotation.z += 0.02;
                        }
                    });
                    break;
                    
                case 'sphere':
                    group.rotation.y += rotationSpeed;
                    group.rotation.x += rotationSpeed * 0.3;
                    
                    // Animate globe markers and rings
                    group.children.forEach((child) => {
                        if (child.geometry && child.geometry.type === 'SphereGeometry' && child.userData.baseSize) {
                            // Pulsing markers
                            const pulse = Math.sin(time * 2 + child.userData.index * 0.3) * 0.3 + 1;
                            child.scale.setScalar(pulse);
                        }
                        
                        if (child.geometry && child.geometry.type === 'RingGeometry' && child.userData.index !== undefined) {
                            // Rotating and pulsing rings
                            const pulse = Math.sin(time * 2.5 + child.userData.index * 0.4) * 0.3 + 1;
                            child.scale.setScalar(pulse);
                            child.rotation.z += 0.01;
                        }
                    });
                    break;
                    
                case 'grid':
                    // Slight rotation for depth
                    group.rotation.y = Math.sin(time * 0.3) * 0.1;
                    
                    // Animate dashboard widgets
                    group.children.forEach((child) => {
                        if (child.userData.type) {
                            switch(child.userData.type) {
                                case 'needle':
                                    // Gauge needle movement
                                    child.rotation.z = Math.sin(time * 1.5) * 0.8 - 0.4;
                                    break;
                                    
                                case 'gauge':
                                    // Gauge pulsing
                                    const gaugePulse = Math.sin(time * 2) * 0.1 + 1;
                                    child.scale.setScalar(gaugePulse);
                                    break;
                                    
                                case 'bar':
                                    // Bars growing/shrinking
                                    const barPulse = Math.sin(time * 2 + child.userData.index * 0.5) * 0.15 + 0.85;
                                    child.scale.y = barPulse;
                                    break;
                                    
                                case 'dot':
                                case 'metricDot':
                                    // Dots pulsing
                                    const dotPulse = Math.sin(time * 3 + child.userData.index * 0.3) * 0.3 + 1;
                                    child.scale.setScalar(dotPulse);
                                    break;
                                    
                                case 'pie':
                                    // Pie slices subtle pulsing
                                    const piePulse = Math.sin(time * 2 + child.userData.index * 0.4) * 0.05 + 1;
                                    child.scale.setScalar(piePulse);
                                    break;
                                    
                                case 'metric':
                                    // Metric bars animating
                                    const metricPulse = Math.sin(time * 1.5 + child.userData.index * 0.6) * 0.15 + 0.85;
                                    child.scale.y = metricPulse;
                                    break;
                            }
                        }
                    });
                    break;
            }
        }
        
        renderer.render(scene, camera);
    });
}

// Handle window resize for 3D canvases
window.addEventListener('resize', () => {
    Object.keys(powerBIScenes).forEach(projectName => {
        const sceneData = powerBIScenes[projectName];
        const canvas = document.getElementById(`canvas-${projectName}`);
        
        if (canvas && sceneData) {
            sceneData.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            sceneData.camera.updateProjectionMatrix();
            sceneData.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        }
    });
});

// Initialize Power BI 3D projects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPowerBIProjects);
} else {
    initPowerBIProjects();
}
