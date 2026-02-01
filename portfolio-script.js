/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

/* ============================================
   CSS VARIABLES - Design System
   ============================================ */
:root {
    /* Colors */
    --color-primary: #87C1FF;
    --color-primary-light: #A8D5FF;
    --color-primary-dark: #6BADEF;
    --color-secondary: #8B5CF6;
    --color-accent: #10B981;
    
    /* Navigation Colors (Navy Theme) */
    --nav-bg: #0B1B3A;
    --nav-text: #FFFFFF;
    --nav-hover: #2D6BFF;
    --nav-hover-bg: rgba(45, 107, 255, 0.15);
    
    /* Updated Text Colors (Darker for better readability) */
    --color-text-primary: #0B1220;
    --color-text-secondary: rgba(11, 18, 32, 0.72);
    --color-text-light: rgba(11, 18, 32, 0.60);
    
    --color-background: #F8FAFC;
    --color-white: #FFFFFF;
    --color-border: #E2E8F0;
    --color-shadow: rgba(0, 0, 0, 0.05);
    --color-shadow-hover: rgba(59, 130, 246, 0.15);
    
    /* Typography */
    --font-display: 'Outfit', 'Poppins', sans-serif;
    --font-body: 'Inter', -apple-system, system-ui, sans-serif;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    --spacing-3xl: 6rem;
    
    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 50%;
    
    /* Shadows */
    --shadow-sm: 0 2px 8px var(--color-shadow);
    --shadow-md: 0 4px 16px var(--color-shadow);
    --shadow-lg: 0 8px 32px var(--color-shadow);
    --shadow-hover: 0 12px 40px var(--color-shadow-hover);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}

/* ============================================
   RESET & BASE STYLES
   ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

body {
    font-family: var(--font-body);
    color: var(--color-text-primary);
    background-color: var(--color-background);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

/* ============================================
   NAVIGATION
   ============================================ */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    box-shadow: 0 2px 12px rgba(11, 27, 58, 0.3);
    z-index: 1000;
    transition: all var(--transition-base);
}

.navbar.scrolled {
    box-shadow: 0 4px 20px rgba(11, 27, 58, 0.4);
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--nav-text);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-lg);
}

.nav-link {
    font-weight: 500;
    color: var(--nav-text);
    transition: all var(--transition-base);
    position: relative;
    padding: 0.5rem 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--nav-hover);
    transition: width var(--transition-base);
}

.nav-link:hover {
    color: var(--nav-text);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    color: var(--nav-text);
    background: var(--nav-hover-bg);
    padding: 0.5rem 1rem;
    border-radius: 6px;
}

.nav-link.active::after {
    width: 100%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    width: 30px;
    height: 24px;
}

.nav-toggle span {
    display: block;
    width: 100%;
    height: 3px;
    background: var(--nav-text);
    border-radius: 2px;
    transition: all var(--transition-base);
}

.nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
}

.nav-toggle.active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
    position: relative;
    margin-top: 80px;
}

.hero-container {
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    align-items: center;
}

.hero-content {
    animation: fadeInLeft 0.8s ease-out;
}

.hero-greeting {
    font-size: 1.25rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.hero-title {
    font-family: var(--font-display);
    font-size: 4.5rem;
    font-weight: 800;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.1;
}

.hero-subtitle {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
}

.hero-description {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-xl);
    max-width: 600px;
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.btn {
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-md);
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 600;
    transition: all var(--transition-base);
    display: inline-block;
}

.btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px);
}

.hero-visual {
    animation: fadeInRight 0.8s ease-out;
}

.hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.hero-image {
    width: 100%;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
}

.scroll-indicator {
    position: absolute;
    bottom: var(--spacing-xl);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--color-text-light);
    animation: bounce 2s infinite;
}

.scroll-indicator svg {
    width: 24px;
    height: 24px;
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
}

/* ============================================
   ABOUT SECTION
   ============================================ */
.about-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
}

.about-content {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: var(--spacing-3xl);
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-lg);
    position: relative;
    overflow: hidden;
}

.about-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%);
}

.profile-card {
    background: linear-gradient(135deg, #E8F4FF 0%, #D4E9FF 100%);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
    position: relative;
    overflow: hidden;
    animation: fadeInUp 0.6s ease-out;
}

.profile-image-wrapper {
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: var(--radius-full);
    overflow: hidden;
    border: 6px solid var(--color-white);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-base);
}

.profile-image-wrapper:hover {
    transform: scale(1.05);
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    justify-content: center;
    width: 100%;
}

.skill-tag {
    background: var(--color-white);
    color: var(--color-primary);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: var(--font-display);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-fast);
}

.skill-tag:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px);
}

.cta-text {
    text-align: center;
    margin-top: var(--spacing-sm);
    padding-top: var(--spacing-md);
    border-top: 2px solid rgba(59, 130, 246, 0.2);
    width: 100%;
}

.highlight {
    color: var(--color-primary);
    font-weight: 600;
    position: relative;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-primary);
    border-radius: 2px;
}

.about-right {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    animation: fadeInRight 0.6s ease-out;
}

.section-title {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.wave-emoji {
    font-size: 2.5rem;
    display: inline-block;
    animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(14deg); }
    20%, 40% { transform: rotate(-8deg); }
}

.intro-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
}

.intro-text strong {
    color: var(--color-text-primary);
    font-weight: 600;
}

.strengths-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.strength-item {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: var(--color-background);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-primary);
    transition: all var(--transition-base);
}

.strength-item:hover {
    transform: translateX(8px);
    background: var(--color-white);
    box-shadow: var(--shadow-md);
}

.strength-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
}

.strength-icon svg {
    width: 24px;
    height: 24px;
}

.strength-content h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
}

.strength-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

/* ============================================
   PROJECTS SECTION
   ============================================ */
.projects-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%);
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.section-subtitle {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
}

.filter-tabs {
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-2xl);
    flex-wrap: wrap;
}

.filter-tab {
    background: var(--color-white);
    border: 2px solid var(--color-border);
    color: var(--color-text-secondary);
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 600;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-base);
}

.filter-tab:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
}

.filter-tab.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-white);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: var(--spacing-xl);
}

.project-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.project-card:hover::before {
    transform: scaleX(1);
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
}

.project-card.hidden {
    display: none;
}

.project-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    margin-bottom: var(--spacing-md);
    transition: all var(--transition-base);
}

.project-card:hover .project-icon {
    transform: scale(1.1) rotate(5deg);
}

.project-icon svg {
    width: 48px;
    height: 48px;
}

.project-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    flex: 1;
}

.project-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1.3;
}

.project-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.meta-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 0.875rem;
    color: var(--color-text-light);
    background: var(--color-background);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
}

.meta-item svg {
    width: 16px;
    height: 16px;
}

.project-description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
}

.project-impact {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    margin: var(--spacing-md) 0;
    padding: var(--spacing-md);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-accent);
}

.impact-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    font-size: 0.95rem;
    color: var(--color-text-secondary);
}

.impact-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
}

.project-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-top: auto;
    padding-top: var(--spacing-md);
}

.skill-badge {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    color: var(--color-white);
    font-size: 0.8rem;
    font-weight: 600;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 20px;
    transition: all var(--transition-fast);
}

.skill-badge:hover {
    transform: translateY(-2px);
}

/* ============================================
   SKILLS SECTION
   ============================================ */
.skills-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: var(--color-white);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
}

.skill-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.skill-card:hover::before {
    transform: scaleX(1);
}

.skill-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
}

.skill-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.skill-icon-badge {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all var(--transition-base);
}

.skill-card:hover .skill-icon-badge {
    transform: scale(1.1) rotate(5deg);
}

.skill-icon {
    width: 28px;
    height: 28px;
    color: var(--color-white);
    stroke-width: 2;
}

.skill-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.3;
    flex: 1;
}

.skill-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.skill-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.skill-subsection-title {
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
}

.skill-list li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    padding-left: var(--spacing-md);
    position: relative;
}

.skill-list li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
}

.skill-tools {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-top: auto;
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);
}

.tool-tag {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    color: var(--color-white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 20px;
    transition: all var(--transition-fast);
    white-space: nowrap;
}

.tool-tag:hover {
    transform: translateY(-2px);
}

/* ============================================
   VALUE SNAPSHOT (Skills Section)
   ============================================ */
.value-snapshot-section {
    margin-bottom: var(--spacing-2xl);
}

.value-snapshot-label {
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-text-light);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
    margin-bottom: var(--spacing-md);
}

.value-snapshot-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.value-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
}

.value-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.value-card:hover::before {
    transform: scaleX(1);
}

.value-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
}

.value-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all var(--transition-base);
}

.value-card:hover .value-icon {
    transform: scale(1.05) rotate(3deg);
}

.value-icon svg {
    width: 22px;
    height: 22px;
    color: var(--color-white);
    stroke-width: 2;
}

.value-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.value-metric {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-primary);
    line-height: 1;
}

.value-text {
    font-size: 0.875rem;
    line-height: 1.4;
    color: var(--color-text-secondary);
    margin: 0;
}

/* ============================================
   HOW I WORK SECTION
   ============================================ */
.how-i-work-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%);
}

.how-i-work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
}

.work-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.work-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.work-card:hover::before {
    transform: scaleX(1);
}

.work-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
}

.work-card-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
    transition: all var(--transition-base);
}

.work-card:hover .work-card-icon {
    transform: scale(1.1) rotate(5deg);
}

.work-card-icon svg {
    width: 30px;
    height: 30px;
    color: var(--color-white);
    stroke-width: 2;
}

.work-card-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1.3;
    margin-bottom: var(--spacing-md);
}

.work-card-preview {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    flex: 1;
    /* Text truncation with fallback */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* Fallback for older browsers */
    max-height: 4.8em;
}

.work-card-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-top: auto;
}

.work-chip {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    color: var(--color-white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 20px;
    transition: all var(--transition-fast);
    white-space: nowrap;
}

.work-chip:hover {
    transform: translateY(-2px);
}

/* Modal Styles */
.work-modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(11, 18, 32, 0.8);
    backdrop-filter: blur(4px);
    z-index: 9999;
    overflow-y: auto;
    padding: var(--spacing-xl);
    animation: fadeIn 0.3s ease;
}

.work-modal-overlay.active {
    display: flex;
    align-items: center;
    justify-content: center;
}

.work-modal {
    display: none;
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    max-width: 700px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
    animation: slideUp 0.3s ease;
    margin: auto;
}

.work-modal.active {
    display: block;
}

.work-modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    width: 40px;
    height: 40px;
    background: var(--color-background);
    border: none;
    border-radius: var(--radius-full);
    font-size: 1.5rem;
    color: var(--color-text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    line-height: 1;
}

.work-modal-close:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: rotate(90deg);
}

.work-modal-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
}

.work-modal-icon svg {
    width: 36px;
    height: 36px;
    color: var(--color-white);
    stroke-width: 2;
}

.work-modal-title {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1.3;
    margin-bottom: var(--spacing-lg);
}

.work-modal-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.work-modal-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0;
}

/* Modal Animations */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Prevent body scroll when modal open */
body.modal-open {
    overflow: hidden;
}

/* ============================================
   TESTIMONIALS SECTION
   ============================================ */
.testimonials-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: var(--color-white);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
}

.testimonial-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-sm);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.testimonial-card:hover::before {
    transform: scaleX(1);
}

.testimonial-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
}

.testimonial-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
}

/* Testimonial Modal */
.testimonial-modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(11, 18, 32, 0.92);
    backdrop-filter: blur(8px);
    z-index: 10000;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xl);
    animation: fadeIn 0.3s ease;
}

.testimonial-modal-overlay.active {
    display: flex;
}

.testimonial-modal-close {
    position: fixed;
    top: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 48px;
    height: 48px;
    background: var(--color-white);
    border: none;
    border-radius: var(--radius-full);
    font-size: 2rem;
    color: var(--color-text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    line-height: 1;
    z-index: 10001;
    box-shadow: var(--shadow-lg);
}

.testimonial-modal-close:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: rotate(90deg) scale(1.1);
}

.testimonial-modal-image {
    max-width: 90vw;
    max-height: 85vh;
    width: auto;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
    animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* ============================================
   CERTIFICATE MODAL & CLICKABLE ITEMS
   ============================================ */
.clickable-cert {
    cursor: pointer;
    color: var(--color-primary);
    font-weight: 600;
    transition: all var(--transition-fast);
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
}

.clickable-cert:hover {
    color: var(--color-primary-dark);
    text-decoration-style: solid;
}

.cert-badge.clickable-cert {
    text-decoration: none;
    position: relative;
}

.cert-badge.clickable-cert::after {
    content: '📄';
    margin-left: 0.25rem;
    font-size: 0.85em;
    opacity: 0.7;
}

.cert-badge.clickable-cert:hover {
    transform: translateY(-2px) scale(1.02);
}

/* Education Item Interactive */
.edu-item-interactive {
    position: relative;
}

.edu-item-arrow {
    position: absolute;
    right: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    color: var(--color-primary);
    opacity: 0.6;
    transition: all var(--transition-base);
}

.edu-item-interactive:hover .edu-item-arrow {
    opacity: 1;
    transform: translateY(-50%) translateX(4px);
}

.edu-item-arrow svg {
    width: 100%;
    height: 100%;
}

/* Certificate Modal */
.certificate-modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(11, 18, 32, 0.92);
    backdrop-filter: blur(8px);
    z-index: 10000;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xl);
    animation: fadeIn 0.3s ease;
    overflow-y: auto;
}

.certificate-modal-overlay.active {
    display: flex;
}

.certificate-modal-close {
    position: fixed;
    top: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 48px;
    height: 48px;
    background: var(--color-white);
    border: none;
    border-radius: var(--radius-full);
    font-size: 2rem;
    color: var(--color-text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    line-height: 1;
    z-index: 10001;
    box-shadow: var(--shadow-lg);
}

.certificate-modal-close:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: rotate(90deg) scale(1.1);
}

.certificate-modal-content {
    max-width: 90vw;
    max-height: 85vh;
    background: var(--color-white);
    border-radius: var(--radius-xl);
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
    animation: zoomIn 0.3s ease;
    overflow: hidden;
}

.certificate-modal-content img {
    display: block;
    max-width: 100%;
    max-height: 85vh;
    width: auto;
    height: auto;
    margin: 0 auto;
}

.certificate-modal-content iframe,
.certificate-modal-content embed {
    display: block;
    width: 90vw;
    height: 85vh;
    border: none;
    border-radius: var(--radius-xl);
}


/* ============================================
   CONTACT SECTION
   ============================================ */
.contact-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    margin-top: var(--spacing-2xl);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.contact-item {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.contact-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}

.contact-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    flex-shrink: 0;
}

.contact-icon svg {
    width: 24px;
    height: 24px;
}

.contact-details h4 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
}

.contact-details a {
    color: var(--color-primary);
    transition: color var(--transition-fast);
}

.contact-details a:hover {
    color: var(--color-primary-dark);
}

.contact-cta {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--spacing-lg);
}

.contact-cta p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
}

.contact-note {
    font-size: 0.9rem;
    color: var(--color-text-light);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    width: 100%;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text-primary);
    transition: all var(--transition-fast);
    background: var(--color-white);
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(135, 193, 255, 0.1);
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
}

.form-error {
    display: none;
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: -0.5rem;
}

.form-error.visible {
    display: block;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
    background: var(--color-text-primary);
    color: var(--color-white);
    padding: var(--spacing-xl) var(--spacing-md);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-social {
    display: flex;
    gap: var(--spacing-md);
}

.social-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    transition: all var(--transition-base);
}

.social-icon:hover {
    background: var(--color-primary);
    transform: translateY(-2px);
}

.social-icon svg {
    width: 20px;
    height: 20px;
}

/* ============================================
   SOCIAL SIDEBAR (Fixed)
   ============================================ */
.social-sidebar {
    position: fixed;
    right: var(--spacing-lg);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    z-index: 100;
}

.social-link {
    width: 48px;
    height: 48px;
    background: var(--color-white);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.social-link:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateX(-8px) scale(1.1);
}

.social-link svg {
    width: 20px;
    height: 20px;
}

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */
.back-to-top {
    position: fixed;
    bottom: var(--spacing-xl);
    right: var(--spacing-xl);
    width: 56px;
    height: 56px;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    z-index: 999;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: var(--color-primary-dark);
    transform: translateY(-4px);
}

.back-to-top svg {
    width: 24px;
    height: 24px;
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
    
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .value-snapshot-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .how-i-work-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .social-sidebar {
        display: none;
    }
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: var(--nav-bg);
        flex-direction: column;
        padding: var(--spacing-lg);
        box-shadow: 0 4px 20px rgba(11, 27, 58, 0.6);
        transform: translateX(-100%);
        transition: transform var(--transition-base);
    }
    
    .nav-menu.active {
        transform: translateX(0);
    }
    
    .nav-toggle {
        display: flex;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .value-snapshot-grid {
        grid-template-columns: 1fr;
    }
    
    .how-i-work-grid {
        grid-template-columns: 1fr;
    }
    
    .work-modal {
        padding: var(--spacing-lg);
    }
    
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
    
    .testimonial-modal-close {
        width: 40px;
        height: 40px;
        top: var(--spacing-md);
        right: var(--spacing-md);
    }
    
    .certificate-modal-close {
        width: 40px;
        height: 40px;
        top: var(--spacing-md);
        right: var(--spacing-md);
    }
    
    .certificate-modal-content iframe,
    .certificate-modal-content embed {
        width: 95vw;
        height: 80vh;
    }
    
    .footer-content {
        flex-direction: column;
        gap: var(--spacing-md);
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .section-title {
        font-size: 1.75rem;
    }
    
    .filter-tabs {
        flex-direction: column;
    }
    
    .filter-tab {
        width: 100%;
    }
}

/* ============================================
   ACCESSIBILITY
   ============================================ */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

a:focus-visible,
button:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
}

/* ============================================
   PROFESSIONAL DEVELOPMENT SECTION
   ============================================ */
.professional-dev-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8f 50%, #3b6ba8 100%);
    color: var(--color-white);
    position: relative;
    overflow: hidden;
}

.professional-dev-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.prof-dev-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    position: relative;
    z-index: 1;
}

/* Left Column */
.prof-dev-left {
    animation: fadeInLeft 0.8s ease-out;
}

.prof-dev-left .section-title {
    color: var(--color-white);
    font-size: 2.5rem;
    margin-bottom: var(--spacing-md);
}

.prof-dev-intro {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: var(--spacing-2xl);
}

.journey-section {
    margin-top: var(--spacing-xl);
}

.journey-title {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: var(--spacing-lg);
}

.journey-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.journey-item {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    border-left: 4px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    transition: all var(--transition-base);
}

.journey-item:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(8px);
    border-left-color: var(--color-white);
}

.journey-icon {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    transition: all var(--transition-base);
}

.journey-item:hover .journey-icon {
    transform: scale(1.1) rotate(5deg);
}

.journey-icon svg {
    width: 40px;
    height: 40px;
}

.journey-content h4 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: var(--spacing-xs);
}

.journey-content p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
}

/* Right Column */
.prof-dev-right {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    animation: fadeInRight 0.8s ease-out;
}

.profile-visual {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.dev-profile-image {
    width: 100%;
    border-radius: var(--radius-xl);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 6px solid rgba(255, 255, 255, 0.2);
}

.profile-icons {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.floating-icon {
    position: absolute;
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #87C1FF;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    animation: float 3s ease-in-out infinite;
}

.floating-icon svg {
    width: 28px;
    height: 28px;
}

.icon-1 {
    top: 10%;
    right: -5%;
    animation-delay: 0s;
}

.icon-2 {
    bottom: 20%;
    right: -8%;
    animation-delay: 1s;
}

.icon-3 {
    top: 50%;
    left: -8%;
    animation-delay: 2s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
}

/* Outcomes Card */
.outcomes-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    color: var(--color-text-primary);
}

.outcomes-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-md);
    border-bottom: 2px solid var(--color-border);
}

.outcomes-header svg {
    width: 32px;
    height: 32px;
    color: #FDB813;
}

.outcomes-header h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.outcomes-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.outcomes-list li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
}

.outcome-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 2px;
}

.outcome-text strong {
    color: var(--color-text-primary);
    font-weight: 600;
}

.strategic-prep {
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-lg);
    border-top: 2px solid var(--color-border);
}

.prep-text {
    font-size: 1rem;
    font-style: italic;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

.prep-badges {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.prep-badge {
    background: linear-gradient(135deg, #87C1FF 0%, #A8D5FF 100%);
    color: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: var(--font-display);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    transition: all var(--transition-fast);
}

.prep-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

/* Responsive Design for Professional Development */
@media (max-width: 1024px) {
    .prof-dev-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }
    
    .profile-visual {
        max-width: 350px;
    }
}

@media (max-width: 768px) {
    .prof-dev-left .section-title {
        font-size: 2rem;
    }
    
    .journey-title {
        font-size: 1.5rem;
    }
    
    .journey-item {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .profile-visual {
        max-width: 100%;
    }
    
    .floating-icon {
        width: 48px;
        height: 48px;
    }
    
    .floating-icon svg {
        width: 24px;
        height: 24px;
    }
}

@media (max-width: 480px) {
    .prof-dev-left .section-title {
        font-size: 1.75rem;
    }
    
    .outcomes-header h3 {
        font-size: 1.25rem;
    }
    
    .prep-badges {
        flex-direction: column;
    }
    
    .prep-badge {
        width: 100%;
        text-align: center;
    }
}



/* ============================================
   EDUCATION & CERTIFICATIONS SECTION - LIGHT THEME
   ============================================ */
.education-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%);
    color: var(--color-text-primary);
    position: relative;
    overflow: hidden;
}

.education-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
    pointer-events: none;
}

.education-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    position: relative;
    z-index: 1;
}

/* Education Column */
.education-column,
.certifications-column {
    animation: fadeInUp 0.8s ease-out;
}

.edu-header,
.cert-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.edu-icon,
.cert-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    box-shadow: var(--shadow-md);
}

.edu-icon svg,
.cert-icon svg {
    width: 40px;
    height: 40px;
}

.edu-header h2,
.cert-header h2 {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.edu-content-card,
.cert-content-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-lg);
    color: var(--color-text-primary);
    border: 2px solid var(--color-border);
}

.edu-section-title,
.cert-section-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-sm);
    border-bottom: 3px solid var(--color-primary);
}

/* Education Items */
.edu-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.edu-item {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: var(--color-background);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-primary);
    transition: all var(--transition-base);
}

.edu-item:hover {
    transform: translateX(8px);
    background: var(--color-white);
    box-shadow: var(--shadow-md);
    border-left-width: 6px;
}

.degree-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.degree-info h4 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
    line-height: 1.4;
}

.institution {
    font-size: 1rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.edu-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.detail-separator {
    color: var(--color-text-light);
}

.detail-item {
    display: inline-flex;
    align-items: center;
}

/* Certifications Badges */
.cert-badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
}

.cert-badge {
    background: linear-gradient(135deg, #87C1FF 0%, #A8D5FF 100%);
    color: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    font-family: var(--font-display);
    text-align: center;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    transition: all var(--transition-fast);
    cursor: default;
}

.cert-badge:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

/* Certification Highlight */
.cert-highlight {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    border-left: 4px solid #FDB813;
    position: relative;
    overflow: hidden;
}

.cert-highlight-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
}

.highlight-icon {
    font-size: 1.5rem;
}

.highlight-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    font-style: italic;
}

.highlight-text {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

.cert-visual {
    display: flex;
    justify-content: center;
    margin-top: var(--spacing-md);
}

.cert-visual svg {
    width: 150px;
    height: 150px;
    animation: float 3s ease-in-out infinite;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .education-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }
}

@media (max-width: 768px) {
    .edu-header h2,
    .cert-header h2 {
        font-size: 1.75rem;
    }
    
    .cert-badges-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    
    .edu-item {
        flex-direction: column;
    }
    
    .degree-icon {
        font-size: 1.75rem;
    }
}

@media (max-width: 480px) {
    .edu-header,
    .cert-header {
        flex-direction: column;
        text-align: center;
    }
    
    .cert-badges-grid {
        grid-template-columns: 1fr;
    }
    
    .edu-details {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .detail-separator {
        display: none;
    }
}


/* End of Education & Certifications Section */

/* ============================================
   HOW I WORK SECTION
   ============================================ */
.how-i-work-section {
    padding: var(--spacing-3xl) var(--spacing-md);
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
    position: relative;
}

.how-i-work-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
}

.how-i-work-header .header-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #87C1FF 0%, #A8D5FF 100%);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    box-shadow: 0 4px 12px rgba(135, 193, 255, 0.3);
}

.how-i-work-header .header-icon svg {
    width: 28px;
    height: 28px;
}

.how-i-work-header .section-title {
    font-size: 2.5rem;
    margin: 0;
}

.how-i-work-subtitle {
    text-align: center;
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-3xl);
}

.work-approach-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}

/* Work Cards */
.work-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    border: 2px solid var(--color-border);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.work-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(135, 193, 255, 0.2);
    border-color: #87C1FF;
}

.work-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(135, 193, 255, 0.1) 0%, rgba(168, 213, 255, 0.1) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #87C1FF;
    margin-bottom: var(--spacing-md);
    transition: all var(--transition-base);
}

.work-card:hover .work-icon {
    transform: scale(1.1);
    background: linear-gradient(135deg, #87C1FF 0%, #A8D5FF 100%);
    color: var(--color-white);
}

.work-icon svg {
    width: 48px;
    height: 48px;
}

.work-title {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
    line-height: 1.3;
}

.work-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #87C1FF 0%, #A8D5FF 100%);
    border-radius: 2px;
    margin: 0 auto var(--spacing-md) auto;
}

.work-description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
    text-align: left;
}

.work-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    justify-content: center;
    margin-bottom: var(--spacing-lg);
    width: 100%;
}

.work-tag {
    background: rgba(135, 193, 255, 0.1);
    color: #87C1FF;
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: var(--font-display);
    border: 1px solid rgba(135, 193, 255, 0.3);
    transition: all var(--transition-fast);
}

.work-tag:hover {
    background: #87C1FF;
    color: var(--color-white);
    transform: translateY(-2px);
}

.read-more-btn {
    background: transparent;
    color: #87C1FF;
    border: 2px solid #87C1FF;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-md);
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-base);
    margin-top: auto;
}

.read-more-btn:hover {
    background: #87C1FF;
    color: var(--color-white);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(135, 193, 255, 0.3);
}

/* Modal Styles (for Read Full Story) */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background: var(--color-white);
    margin: 5% auto;
    padding: var(--spacing-2xl);
    border-radius: var(--radius-xl);
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: var(--shadow-lg);
    animation: slideInDown 0.4s ease;
    position: relative;
}

.modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    font-size: 2rem;
    color: var(--color-text-light);
    cursor: pointer;
    transition: color var(--transition-fast);
}

.modal-close:hover {
    color: var(--color-text-primary);
}

.modal-title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-lg);
}

.modal-body {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
}

.modal-body p {
    margin-bottom: var(--spacing-md);
}

@keyframes slideInDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .work-approach-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

@media (max-width: 768px) {
    .how-i-work-header .section-title {
        font-size: 2rem;
    }
    
    .how-i-work-subtitle {
        font-size: 1rem;
    }
    
    .work-card {
        padding: var(--spacing-lg);
    }
    
    .modal-content {
        margin: 10% var(--spacing-md);
        padding: var(--spacing-xl);
    }
}

@media (max-width: 480px) {
    .how-i-work-header {
        flex-direction: column;
    }
    
    .work-title {
        font-size: 1.2rem;
    }
    
    .work-tags {
        flex-direction: column;
    }
    
    .work-tag {
        width: 100%;
        text-align: center;
    }
}

/* ============================================
   PROFESSIONAL EXPERIENCE SECTION
   ============================================ */
.experience-section {
    padding: var(--spacing-3xl) 0;
    background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8f 50%, #3b6ba8 100%);
    color: var(--color-white);
    position: relative;
    overflow: hidden;
}

.experience-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(135, 193, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(135, 193, 255, 0.08) 0%, transparent 50%);
    pointer-events: none;
}

.container-wide {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    position: relative;
    z-index: 1;
}

.experience-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
}

.experience-header .section-title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 700;
    color: #E8D4B0;
    margin-bottom: var(--spacing-sm);
}

.experience-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
}

/* ============================================
   TIMELINE + IMPACT LAYOUT
   ============================================ */
.experience-layout {
    display: grid;
    grid-template-columns: 25% 75%;
    gap: var(--spacing-3xl);
}

/* ============================================
   TIMELINE TRACK (Left 25%)
   ============================================ */
.timeline-track {
    position: relative;
    padding-left: var(--spacing-lg);
}

.timeline-track::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #87C1FF 0%, rgba(135, 193, 255, 0.3) 100%);
}

.timeline-item {
    position: relative;
    margin-bottom: var(--spacing-3xl);
    padding-left: var(--spacing-lg);
}

.timeline-dot {
    position: absolute;
    left: -10px;
    top: 8px;
    width: 20px;
    height: 20px;
    background: #87C1FF;
    border: 4px solid #1A1F2E;
    border-radius: var(--radius-full);
    box-shadow: 0 0 0 4px rgba(135, 193, 255, 0.2);
    transition: all var(--transition-base);
}

.timeline-item:hover .timeline-dot {
    transform: scale(1.3);
    box-shadow: 0 0 0 8px rgba(135, 193, 255, 0.3);
}

.timeline-period {
    font-size: 0.95rem;
    font-weight: 600;
    color: #87C1FF;
    margin-bottom: var(--spacing-xs);
    letter-spacing: 0.5px;
}

.timeline-role {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: var(--spacing-xs);
    line-height: 1.3;
}

.timeline-org {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-sm);
}

.role-badges {
    display: flex;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
}

.role-badge {
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--font-display);
}

.badge-ba {
    background: rgba(139, 92, 246, 0.8);
    color: var(--color-white);
}

.badge-bi {
    background: rgba(59, 130, 246, 0.8);
    color: var(--color-white);
}

.badge-qa {
    background: rgba(100, 116, 139, 0.8);
    color: var(--color-white);
}

/* ============================================
   IMPACT CANVAS (Right 75%)
   ============================================ */
.impact-canvas {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
}

.impact-block {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all var(--transition-base);
}

.impact-block:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(135, 193, 255, 0.3);
    transform: translateX(8px);
}

.impact-role-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
}

.impact-role-header .impact-badge {
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    flex-shrink: 0;
}

.impact-role-header h3 {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-white);
}

.impact-location {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-lg);
}

.impact-location a {
    color: #87C1FF;
    text-decoration: underline;
    transition: color var(--transition-fast);
}

.impact-location a:hover {
    color: #A8D5FF;
}

/* Impact Cards */
.impact-card {
    background: rgba(255, 255, 255, 0.03);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
    border-left: 3px solid #87C1FF;
}

.impact-card:last-child {
    margin-bottom: 0;
}

.impact-card-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: #87C1FF;
    margin-bottom: var(--spacing-sm);
}

.impact-card p {
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
}

.impact-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.impact-card li {
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    padding-left: var(--spacing-lg);
    margin-bottom: var(--spacing-sm);
    position: relative;
}

.impact-card li:last-child {
    margin-bottom: 0;
}

.impact-card li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #87C1FF;
    font-size: 1.5rem;
    line-height: 1;
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */
@media (max-width: 1024px) {
    .experience-layout {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }

/* ============================================
   EXPERIENCE SECTION - MODERN BUTTON STYLES
   ============================================ */

/* Reset any conflicting styles */
.experience-section .impact-block {
    display: none;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}

.experience-section .impact-block.active {
    display: block;
    opacity: 1;
}

/* Timeline Item Interaction */
.timeline-item {
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    opacity: 0.5;
}

.timeline-item:hover {
    opacity: 0.75;
}

.timeline-item.active {
    opacity: 1;
}


.timeline-item.active .timeline-dot {
    background: #87C1FF;
    box-shadow: 0 0 0 8px rgba(135, 193, 255, 0.3);
    transform: scale(1.3);
}

/* Modern Double Arrow Button */
.timeline-arrow {
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #87C1FF 0%, #6BADEF 100%);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
    box-shadow: 0 4px 12px rgba(135, 193, 255, 0.3);
    overflow: hidden;
    z-index: 10;
}

.timeline-arrow::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.timeline-arrow:hover::before {
    left: 100%;
}

.timeline-arrow:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(135, 193, 255, 0.5);
}

.timeline-arrow:active {
    transform: translateY(-50%) scale(0.95);
}

/* Arrow SVG Icons */
.timeline-arrow svg {
    width: 16px;
    height: 16px;
    color: white;
    margin: 0 -4px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.timeline-arrow svg:first-child {
    animation: arrowPulse1 1.5s ease-in-out infinite;
}

.timeline-arrow svg:last-child {
    animation: arrowPulse2 1.5s ease-in-out infinite;
    animation-delay: 0.15s;
}

@keyframes arrowPulse1 {
    0%, 100% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        transform: translateX(3px);
        opacity: 0.7;
    }
}

@keyframes arrowPulse2 {
    0%, 100% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        transform: translateX(3px);
        opacity: 0.7;
    }
}

/* Active state button */
.timeline-item.active .timeline-arrow {
    background: linear-gradient(135deg, #6BADEF 0%, #4A90E2 100%);
    box-shadow: 0 6px 20px rgba(135, 193, 255, 0.6);
    animation: buttonGlow 2s ease-in-out infinite;
}

@keyframes buttonGlow {
    0%, 100% {
        box-shadow: 0 6px 20px rgba(135, 193, 255, 0.6);
    }
    50% {
        box-shadow: 0 6px 30px rgba(135, 193, 255, 0.8);
    }
}

/* Ripple effect on click */
.timeline-arrow::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.timeline-arrow:active::after {
    width: 100px;
    height: 100px;
}

/* Responsive */
@media (max-width: 1024px) {
    .timeline-arrow {
        position: static;
        transform: none;
        margin-top: var(--spacing-sm);
        align-self: flex-end;
    }
    
    .timeline-arrow:hover {
        transform: scale(1.1);
    }
    
    .timeline-arrow:active {
        transform: scale(0.95);
    }
    
    .timeline-content {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .timeline-arrow {
        width: 44px;
        height: 44px;
    }
    
    .timeline-arrow svg {
        width: 14px;
        height: 14px;
    }
}


/* ============================================
   EXPERIENCE SECTION - COMPACT VERSION
   ============================================ */

/* Override main section padding */
.experience-section {
    padding: var(--spacing-2xl) 0 !important;
    min-height: auto !important;
}

/* Tighter header spacing */
.experience-header {
    text-align: center;
    margin-bottom: var(--spacing-xl) !important;
}

.experience-header .section-title {
    font-size: 2.5rem !important;
    margin-bottom: var(--spacing-xs) !important;
}

/* ============================================
   EXPERIENCE SECTION - 80% VIEWPORT HEIGHT
   ============================================ */

/* Main section height constraint */
.experience-section {
    padding: var(--spacing-xl) 0 !important;
    max-height: 80vh !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    overflow: hidden !important;
}

/* Compact header */
.experience-header {
    flex-shrink: 0 !important;
    margin-bottom: var(--spacing-md) !important;
    padding: 0 var(--spacing-lg) !important;
}

.experience-header .section-title {
    font-size: 2.25rem !important;
    margin-bottom: 0.25rem !important;
}

.experience-subtitle {
    font-size: 1rem !important;
}

/* Container with scroll */
.container-wide {
    flex: 1 !important;
    overflow-y: auto !important;
    padding: 0 var(--spacing-lg) !important;
    max-height: calc(80vh - 120px) !important;
}

/* Custom scrollbar */
.container-wide::-webkit-scrollbar {
    width: 8px;
}

.container-wide::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}

.container-wide::-webkit-scrollbar-thumb {
    background: rgba(135, 193, 255, 0.3);
    border-radius: 4px;
}

.container-wide::-webkit-scrollbar-thumb:hover {
    background: rgba(135, 193, 255, 0.5);
}

/* Layout remains the same */
.experience-layout {
    display: grid;
    grid-template-columns: 25% 75%;
    gap: var(--spacing-lg) !important;
    height: 100%;
}

/* Timeline - compact */
.timeline-track {
    padding-left: var(--spacing-md) !important;
}

.timeline-item {
    margin-bottom: var(--spacing-md) !important;
    padding-left: var(--spacing-md) !important;
}

.timeline-period {
    font-size: 0.85rem !important;
    margin-bottom: 2px !important;
}

.timeline-role {
    font-size: 1rem !important;
    margin-bottom: 2px !important;
    line-height: 1.2 !important;
}

.timeline-org {
    font-size: 0.8rem !important;
    margin-bottom: 6px !important;
}

.role-badges {
    gap: 3px !important;
}

.role-badge {
    padding: 2px 8px !important;
    font-size: 0.7rem !important;
}

/* Smaller dot */
.timeline-dot {
    width: 14px !important;
    height: 14px !important;
    left: -7px !important;
    top: 5px !important;
    border: 3px solid #1A1F2E !important;
}

/* Smaller button */
.timeline-arrow {
    width: 38px !important;
    height: 38px !important;
    right: -22px !important;
}

.timeline-arrow svg {
    width: 12px !important;
    height: 12px !important;
}

/* Impact canvas - very compact */
.impact-canvas {
    gap: 0 !important;
}

.impact-block {
    padding: var(--spacing-md) !important;
}

.impact-role-header {
    gap: var(--spacing-xs) !important;
    margin-bottom: var(--spacing-xs) !important;
}

.impact-role-header .impact-badge {
    padding: 4px 10px !important;
    font-size: 0.75rem !important;
}

.impact-role-header h3 {
    font-size: 1.35rem !important;
}

.impact-location {
    font-size: 0.9rem !important;
    margin-bottom: var(--spacing-sm) !important;
}

/* Very compact cards */
.impact-card {
    padding: var(--spacing-sm) var(--spacing-md) !important;
    margin-bottom: var(--spacing-xs) !important;
}

.impact-card-title {
    font-size: 0.95rem !important;
    margin-bottom: 6px !important;
}

.impact-card p {
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
}

.impact-card ul {
    margin-top: 6px !important;
}

.impact-card li {
    font-size: 0.9rem !important;
    line-height: 1.4 !important;
    margin-bottom: 6px !important;
    padding-left: var(--spacing-sm) !important;
}

.impact-card li::before {
    font-size: 1rem !important;
}

/* Responsive */
@media (max-height: 800px) {
    .experience-section {
        max-height: 85vh !important;
    }
    
    .container-wide {
        max-height: calc(85vh - 100px) !important;
    }
}

@media (max-width: 1400px) {
    .experience-layout {
        grid-template-columns: 28% 72%;
    }
}

@media (max-width: 1200px) {
    .experience-layout {
        grid-template-columns: 30% 70%;
    }
}

@media (max-width: 1024px) {
    .experience-section {
        max-height: none !important;
        padding: var(--spacing-lg) 0 !important;
    }
    
    .container-wide {
        max-height: none !important;
        overflow-y: visible !important;
    }
    
    .experience-layout {
        grid-template-columns: 1fr;
        gap: var(--spacing-md) !important;
    }
    
    .timeline-track {
        display: flex;
        overflow-x: auto;
        padding-bottom: var(--spacing-xs);
        gap: var(--spacing-sm);
    }
    
    .timeline-item {
        min-width: 180px;
    }
}

@media (max-width: 768px) {
    .experience-header .section-title {
        font-size: 1.85rem !important;
    }
}


/* ============================================
   EXPERIENCE SECTION - IMPROVEMENTS
   ============================================ */

/* Timeline track distributed across full height */
.timeline-track {
    padding-left: var(--spacing-md) !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    height: 100% !important;
    overflow: visible !important;
}

/* Timeline items evenly distributed */
.timeline-item {
    margin-bottom: 0 !important;
    padding-left: var(--spacing-md) !important;
    flex: 1 !important;
    display: flex !important;
    align-items: center !important;
}

/* Timeline dot - enhanced states */
.timeline-dot {
    width: 14px !important;
    height: 14px !important;
    left: -7px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    border: 3px solid #1A1F2E !important;
    background: rgba(135, 193, 255, 0.3) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Hover state - larger dot */
.timeline-item:hover .timeline-dot {
    width: 20px !important;
    height: 20px !important;
    left: -10px !important;
    background: rgba(135, 193, 255, 0.6) !important;
    transform: translateY(-50%) scale(1.2) !important;
    box-shadow: 0 0 0 6px rgba(135, 193, 255, 0.2) !important;
}

/* Active state - KEEP IT LARGE and change color */
.timeline-item.active .timeline-dot {
    width: 22px !important;
    height: 22px !important;
    left: -11px !important;
    background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
    transform: translateY(-50%) scale(1.3) !important;
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0.3) !important;
    border-color: #10B981 !important;
}

/* Active timeline line color change */
.timeline-track::before {
    background: linear-gradient(180deg, 
        rgba(135, 193, 255, 0.6) 0%, 
        rgba(16, 185, 129, 0.4) 50%,
        rgba(135, 193, 255, 0.3) 100%) !important;
}

/* Active timeline content highlight */
.timeline-item.active .timeline-content {
    background: rgba(16, 185, 129, 0.1) !important;
    border: 1px solid rgba(16, 185, 129, 0.3) !important;
}

/* Active arrow button with green accent */
.timeline-item.active .timeline-arrow {
    background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5) !important;
    animation: buttonGlowGreen 2s ease-in-out infinite !important;
}

@keyframes buttonGlowGreen {
    0%, 100% {
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
    }
    50% {
        box-shadow: 0 6px 30px rgba(16, 185, 129, 0.7);
    }
}

/* Timeline period and text colors for active */
.timeline-item.active .timeline-period {
    color: #10B981 !important;
    font-weight: 700 !important;
}

.timeline-item.active .timeline-role {
    color: #ffffff !important;
}

/* Impact badge color for active selection */
.timeline-item.active .impact-badge {
    background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
}

/* Ensure timeline content stays properly sized */
.timeline-content {
    flex: 1;
    transition: all 0.3s ease;
}

/* Fix spacing */
.timeline-period {
    font-size: 0.85rem !important;
    margin-bottom: 2px !important;
}

.timeline-role {
    font-size: 1rem !important;
    margin-bottom: 2px !important;
    line-height: 1.2 !important;
}

.timeline-org {
    font-size: 0.8rem !important;
    margin-bottom: 6px !important;
}


/* ============================================
   LIGHT THEME CONVERSION
   Professional Blue: #3B82F6
   ============================================ */

/* Update color variables */
:root {
    --color-primary: #3B82F6 !important;
    --color-primary-light: #60A5FA !important;
    --color-primary-dark: #2563EB !important;
}

/* DARK NAVIGATION BAR */
.navbar {
    background: linear-gradient(135deg, #1E293B 0%, #334155 100%) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
}

.nav-logo,
.nav-logo .logo-text {
    color: #FFFFFF !important;
}

.nav-link {
    color: rgba(255, 255, 255, 0.85) !important;
}

.nav-link:hover,
.nav-link.active {
    color: #3B82F6 !important;
}

.nav-link::after {
    background: #3B82F6 !important;
}

.nav-toggle span {
    background: #3B82F6 !important;
}

/* CONVERT PROFESSIONAL DEVELOPMENT TO LIGHT */
.professional-dev-section {
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%) !important;
    color: #1E293B !important;
}

.professional-dev-section .section-title {
    color: #1E293B !important;
}

.dev-header h2 {
    color: #1E293B !important;
}

.dev-subtitle {
    color: #64748B !important;
}

.journey-item {
    background: #FFFFFF !important;
    border: 2px solid #E5E7EB !important;
    color: #1E293B !important;
}

.journey-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
    color: #FFFFFF !important;
}

.journey-period {
    color: #3B82F6 !important;
}

.journey-title {
    color: #1E293B !important;
}

.journey-description {
    color: #64748B !important;
}

.dev-profile-section {
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%) !important;
}

.dev-profile-image {
    border-color: #FFFFFF !important;
}

.outcomes-card {
    background: #FFFFFF !important;
    border: 2px solid #E5E7EB !important;
}

.outcomes-icon {
    color: #3B82F6 !important;
}

.outcomes-title {
    color: #1E293B !important;
}

.outcomes-list li {
    color: #1E293B !important;
}

.outcomes-list li::before {
    color: #3B82F6 !important;
}

.preparation-badges .badge {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
    color: #FFFFFF !important;
}

.floating-icon {
    background: rgba(59, 130, 246, 0.15) !important;
    color: #3B82F6 !important;
}

/* CONVERT EXPERIENCE SECTION TO LIGHT */
.experience-section {
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%) !important;
    color: #1E293B !important;
}

.experience-section::before {
    display: none !important;
}

.experience-header .section-title {
    color: #1E293B !important;
}

.experience-subtitle {
    color: #64748B !important;
}

.timeline-track::before {
    background: linear-gradient(180deg, #3B82F6 0%, rgba(59, 130, 246, 0.3) 100%) !important;
}

.timeline-item {
    color: #1E293B !important;
}

.timeline-content {
    background: #FFFFFF !important;
    border: 2px solid #E5E7EB !important;
    color: #1E293B !important;
}

.timeline-item.active .timeline-content {
    background: rgba(16, 185, 129, 0.05) !important;
    border-color: rgba(16, 185, 129, 0.4) !important;
}

.timeline-period {
    color: #3B82F6 !important;
}

.timeline-item.active .timeline-period {
    color: #10B981 !important;
}

.timeline-role {
    color: #1E293B !important;
}

.timeline-org {
    color: #64748B !important;
}

.timeline-dot {
    border-color: #F8FAFC !important;
    background: rgba(59, 130, 246, 0.3) !important;
}

.timeline-item:hover .timeline-dot {
    background: rgba(59, 130, 246, 0.6) !important;
}

.timeline-item.active .timeline-dot {
    background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
    border-color: #10B981 !important;
}

.impact-block {
    background: #FFFFFF !important;
    border: 2px solid #E5E7EB !important;
    color: #1E293B !important;
}

.impact-role-header h3 {
    color: #1E293B !important;
}

.impact-location {
    color: #64748B !important;
}

.impact-location a {
    color: #3B82F6 !important;
}

.impact-card {
    background: #F8FAFC !important;
    border-left-color: #3B82F6 !important;
}

.impact-card-title {
    color: #3B82F6 !important;
}

.impact-card p,
.impact-card li {
    color: #1E293B !important;
}

.impact-card li::before {
    color: #3B82F6 !important;
}

/* UPDATE ALL BLUE COLORS TO PROFESSIONAL MEDIUM BLUE */
.btn-primary,
.cta-button,
.primary-btn {
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%) !important;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%) !important;
}

.btn-secondary {
    color: #3B82F6 !important;
    border-color: #3B82F6 !important;
}

.btn-secondary:hover {
    background: #3B82F6 !important;
}

.filter-tab.active {
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%) !important;
    border-color: #3B82F6 !important;
}

.filter-tab:hover {
    border-color: #3B82F6 !important;
    color: #3B82F6 !important;
}

.skill-tag {
    color: #3B82F6 !important;
    border-color: #3B82F6 !important;
}

.skill-tag:hover {
    background: #3B82F6 !important;
}

.skill-badge {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.project-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.contact-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.strength-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.work-icon {
    color: #3B82F6 !important;
}

.work-card:hover .work-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.work-divider {
    background: linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.work-tag {
    color: #3B82F6 !important;
    border-color: rgba(59, 130, 246, 0.3) !important;
}

.work-tag:hover {
    background: #3B82F6 !important;
}

.read-more-btn {
    color: #3B82F6 !important;
    border-color: #3B82F6 !important;
}

.read-more-btn:hover {
    background: #3B82F6 !important;
}

.how-i-work-header .header-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.edu-icon,
.cert-icon {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
}

.back-to-top {
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%) !important;
}

.social-sidebar .social-link {
    color: #3B82F6 !important;
}

.social-sidebar .social-link:hover {
    background: #3B82F6 !important;
}

.social-icon:hover {
    background: #3B82F6 !important;
}

/* FOOTER - KEEP DARK */
.footer {
    background: linear-gradient(135deg, #1E293B 0%, #334155 100%) !important;
    color: #FFFFFF !important;
}

/* Ensure all scrollbars use new blue */
::-webkit-scrollbar-track {
    background: rgba(59, 130, 246, 0.1) !important;
}

::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.4) !important;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.6) !important;
}

/* ============================================
   SKILLS IN ACTION SECTION
   ============================================ */
.skills-action-section {
    padding: 4rem 2rem;
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
}

.skills-action-header {
    text-align: center;
    margin-bottom: 3rem;
}

.skills-action-header .header-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.skills-action-header .section-title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 0.5rem;
}

.skills-action-header .section-subtitle {
    font-size: 1.125rem;
    color: #64748B;
}

/* Value Snapshot */
.value-snapshot {
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 3rem;
}

.value-snapshot-bottom {
    margin-top: 3rem;
    margin-bottom: 0;
}

.snapshot-title {
    font-family: 'Outfit', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #3B82F6;
    margin-bottom: 1.5rem;
}

.snapshot-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.snapshot-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.snapshot-icon {
    width: 48px;
    height: 48px;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3B82F6;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
}

.snapshot-icon svg {
    width: 24px;
    height: 24px;
}

.snapshot-content {
    flex: 1;
}

.snapshot-percentage {
    font-family: 'Outfit', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #3B82F6;
    line-height: 1;
    margin-bottom: 0.25rem;
}

.snapshot-description {
    font-size: 0.9rem;
    color: #1E293B;
    line-height: 1.4;
}

/* Skills Cards Grid */
.skills-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.skill-card {
    background: #FFFFFF;
    border: 2px solid #E5E7EB;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
}

.skill-card:hover {
    border-color: #3B82F6;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.skill-card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.skill-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.skill-card-icon.blue {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
    color: #FFFFFF;
}

.skill-card-icon svg {
    width: 24px;
    height: 24px;
}

.skill-card-title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #1E293B;
    line-height: 1.3;
    margin: 0;
}

.skill-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.skill-card-body h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 0.75rem;
    margin-top: 1rem;
}

.skill-card-body h4:first-child {
    margin-top: 0;
}

.skill-card-body ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0.5rem 0;
}

.skill-card-body li {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.6;
    padding-left: 1.25rem;
    margin-bottom: 0.5rem;
    position: relative;
}

.skill-card-body li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #3B82F6;
    font-weight: 700;
}

.skill-tools {
    margin-top: auto;
    padding-top: 1rem;
}

.tool-label {
    font-size: 0.8rem;
    color: #64748B;
    font-weight: 600;
    display: block;
    margin-bottom: 0.75rem;
}

.tool-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tool-badge {
    background: #F1F5F9;
    color: #475569;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.2s;
    border: 1px solid #E2E8F0;
}

.tool-badge:hover {
    background: #3B82F6;
    color: #FFFFFF;
    border-color: #3B82F6;
}

/* Responsive */
@media (max-width: 1200px) {
    .skills-cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .snapshot-grid {
        grid-template-columns: 1fr;
    }
    
    .skills-cards-grid {
        grid-template-columns: 1fr;
    }
    
    .skill-card {
        padding: 1.5rem;
    }
}


/* Ensure Skills in Action is NOT constrained to 80vh */
.skills-action-section {
    min-height: auto !important;
    max-height: none !important;
    overflow: visible !important;
}


/* ============================================
   SKILLS IN ACTION - EXACT DESIGN MATCH
   ============================================ */

/* Override previous styles */
.skills-action-header {
    text-align: center;
    margin-bottom: 3rem;
}

.skills-action-header .section-title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
}

.title-icon {
    font-size: 2.5rem;
}

.skills-action-header .section-subtitle {
    font-size: 1.125rem;
    color: #64748B;
}

/* Remove card borders - match the image */
.skill-card {
    background: #FFFFFF;
    border: none !important;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
    transition: all 0.3s;
}

.skill-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
    transform: translateY(-4px);
}

/* Adjust card title spacing */
.skill-card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.skill-card-title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #1E293B;
    line-height: 1.3;
}

/* Tool badges lighter background */
.tool-badge {
    background: #E8EFF8 !important;
    color: #64748B !important;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    border: none !important;
}

.tool-badge:hover {
    background: #D0DFEF !important;
    color: #475569 !important;
}

/* ============================================
   TECHNICAL SKILLS SECTION - FRESH DESIGN
   ============================================ */
.technical-skills-section {
    padding: 5rem 2rem;
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
}

.skills-header {
    text-align: center;
    margin-bottom: 4rem;
}

.skills-header .section-title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.75rem;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 1rem;
}

.skills-header .section-subtitle {
    font-size: 1.25rem;
    color: #64748B;
}

/* Skills Cards Container */
.skills-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 1400px;
    margin: 0 auto;
}

/* Individual Skill Card */
.skill-card {
    background: #FFFFFF;
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.15);
}

/* Card Icon */
.card-icon {
    width: 64px;
    height: 64px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.card-icon.blue {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
    color: #FFFFFF;
}

.card-icon svg {
    width: 32px;
    height: 32px;
}

/* Card Title */
.card-title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1E293B;
    line-height: 1.4;
    margin-bottom: 1.5rem;
}

/* Card Sections */
.card-section {
    margin-bottom: 1.5rem;
}

.card-section h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 0.75rem;
}

.card-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.card-section li {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.7;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
}

.card-section li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #3B82F6;
    font-weight: 700;
    font-size: 1.2rem;
}

.card-section li:last-child {
    margin-bottom: 0;
}

/* Card Tools */
.card-tools {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 2px solid #F1F5F9;
}

.tools-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #64748B;
    margin-bottom: 0.75rem;
}

.tools-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tools-list span {
    background: #F1F5F9;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s;
}

.tools-list span:hover {
    background: #3B82F6;
    color: #FFFFFF;
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1200px) {
    .skills-cards-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .technical-skills-section {
        padding: 3rem 1.5rem;
    }
    
    .skills-header .section-title {
        font-size: 2rem;
    }
    
    .skills-cards-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .skill-card {
        padding: 2rem;
    }
}

/* ============================================
   FIX SKILLS SECTION - ICON SIZE & GRID
   ============================================ */

/* Force 3x2 grid layout */
.skills-cards-container {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 2rem !important;
    max-width: 1400px;
    margin: 0 auto;
}

/* Fix icon size - make smaller */
.skill-card .card-icon {
    width: 56px !important;
    height: 56px !important;
    min-width: 56px;
    min-height: 56px;
    border-radius: 12px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 1.25rem !important;
    flex-shrink: 0;
}

.skill-card .card-icon svg {
    width: 28px !important;
    height: 28px !important;
}

/* Ensure cards stay in grid */
.skill-card {
    background: #FFFFFF !important;
    border-radius: 16px !important;
    padding: 2rem !important;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
    transition: all 0.3s ease !important;
    display: flex !important;
    flex-direction: column !important;
}

/* Card title sizing */
.skill-card .card-title {
    font-family: 'Outfit', sans-serif !important;
    font-size: 1.15rem !important;
    font-weight: 700 !important;
    color: #1E293B !important;
    line-height: 1.4 !important;
    margin-bottom: 1.25rem !important;
}

/* Responsive - maintain 3x2 on larger screens */
@media (min-width: 1024px) {
    .skills-cards-container {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}

@media (max-width: 1023px) and (min-width: 768px) {
    .skills-cards-container {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 767px) {
    .skills-cards-container {
        grid-template-columns: 1fr !important;
    }
    
    .skill-card .card-icon {
        width: 48px !important;
        height: 48px !important;
    }
    
    .skill-card .card-icon svg {
        width: 24px !important;
        height: 24px !important;
    }
}

