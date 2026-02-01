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
    const modalOverlay = document.getElementById('certificate-modal-overlay');
    const modalContent = document.getElementById('certificate-modal-content');
    const closeButton = document.querySelector('.certificate-modal-close');
    const clickableCerts = document.querySelectorAll('.clickable-cert');
    
    // Detect if path is PDF or image
    function isPDF(path) {
        return path.toLowerCase().endsWith('.pdf');
    }
    
    // Open certificate modal
    function openCertificateModal(certPath) {
        if (!modalOverlay || !modalContent) return;
        
        // Clear previous content
        modalContent.innerHTML = '';
        
        // Create appropriate element based on file type
        if (isPDF(certPath)) {
            // PDF: use iframe
            const iframe = document.createElement('iframe');
            iframe.src = certPath;
            iframe.title = 'Certificate PDF';
            modalContent.appendChild(iframe);
        } else {
            // Image: use img
            const img = document.createElement('img');
            img.src = certPath;
            img.alt = 'Certificate';
            modalContent.appendChild(img);
        }
        
        // Show modal
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Focus close button for accessibility
        if (closeButton) {
            setTimeout(() => closeButton.focus(), 100);
        }
    }
    
    // Close modal
    function closeCertificateModal() {
        if (!modalOverlay) return;
        
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
        modalContent.innerHTML = '';
    }
    
    // Click handlers for all clickable certificates
    clickableCerts.forEach(cert => {
        cert.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const certPath = this.getAttribute('data-cert');
            if (certPath) {
                openCertificateModal(certPath);
            }
        });
        
        // Keyboard support
        cert.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const certPath = this.getAttribute('data-cert');
                if (certPath) {
                    openCertificateModal(certPath);
                }
            }
        });
        
        // Make keyboard accessible
        cert.setAttribute('tabindex', '0');
        cert.setAttribute('role', 'button');
    });
    
    // Close button handler
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeCertificateModal();
        });
    }
    
    // Overlay click (outside content)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeCertificateModal();
            }
        });
    }
    
    // ESC key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeCertificateModal();
        }
    });
})();

// ============================================
// CONTACT FORM - INSTANT EMAIL
// ============================================
(function() {
    const sendBtn = document.getElementById('send-email-btn');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const errorSpan = document.getElementById('contact-error');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';
            
            // Validate message
            if (!message) {
                if (errorSpan) {
                    errorSpan.style.display = 'block';
                    errorSpan.classList.add('visible');
                }
                if (messageInput) {
                    messageInput.focus();
                    messageInput.style.borderColor = '#ef4444';
                }
                return;
            }
            
            // Hide error
            if (errorSpan) {
                errorSpan.style.display = 'none';
                errorSpan.classList.remove('visible');
            }
            if (messageInput) {
                messageInput.style.borderColor = '';
            }
            
            // Build mailto URL
            const toEmail = 'Oshi.tharanga@gmail.com';
            const mailSubject = subject || `[Portfolio] Message from ${name || 'Website Visitor'}`;
            const mailBody = `Name: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message}`;
            
            const mailtoURL = `mailto:${toEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
            
            // Open email client
            window.location.href = mailtoURL;
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

