/* =========================
   Oshi Wicky Portfolio JS
   ========================= */

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // --- Helpers
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  // --- Elements
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");
  const progressBar = $("#progressBar");
  const yearEl = $("#year");

  // ======================
  // Fixed header offset
  // ======================
  function headerOffset() {
    const header = $(".header");
    return header ? header.getBoundingClientRect().height : 0;
  }

  // ======================
  // Mobile menu toggle
  // ======================
  function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link
    $$("#navMenu a").forEach(a => {
      a.addEventListener("click", () => closeMenu());
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!navMenu.classList.contains("open")) return;
      const clickInside = navMenu.contains(e.target) || navToggle.contains(e.target);
      if (!clickInside) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // ======================
  // Smooth scroll with correct offset (important for fixed header)
  // ======================
  function smoothScrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = headerOffset() + 10; // small spacing
    const top = window.pageYOffset + el.getBoundingClientRect().top - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }

  // Intercept in-page anchor clicks (#about, #contact, #top, etc.)
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      if (!id) return;

      e.preventDefault();

      // Special: #top should always go to top reliably
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMenu();
        return;
      }

      smoothScrollToId(id);
      closeMenu();
    });
  });

  // ======================
  // Scroll progress bar
  // ======================
  function updateProgress() {
    if (!progressBar) return;
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${clamp(percent, 0, 100)}%`;
  }

  // ======================
  // Reveal on scroll
  // ======================
  const revealEls = $$(".reveal");
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealIO.observe(el));

  // ======================
  // Scrollspy (ACTIVE link highlight) — FIXED
  // ======================
  const navLinks = $$(".nav-link");
  const sections = ["about","skills","projects","testimonials","experience","contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(a => {
      const isActive = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("active", isActive);
    });
  }

  function updateActiveLink() {
    if (!sections.length) return;

    const offset = headerOffset() + 12;
    const scrollPos = window.scrollY + offset;

    // ✅ If user is near the bottom, force CONTACT active
    const doc = document.documentElement;
    const nearBottom = (window.innerHeight + window.scrollY) >= (doc.scrollHeight - 4);
    if (nearBottom) {
      setActiveLink("contact");
      return;
    }

    // Pick the last section whose top is above current scroll position
    let currentId = sections[0].id;

    for (const sec of sections) {
      const top = sec.offsetTop;
      if (top <= scrollPos) currentId = sec.id;
    }

    setActiveLink(currentId);
  }

  // ======================
  // Copy buttons
  // ======================
  function copyToClipboard(text) {
    if (!text) return;
    navigator.clipboard?.writeText(text).catch(() => {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    });
  }

  const copyEmailBtn = $("#copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      copyToClipboard(copyEmailBtn.dataset.copy);
      copyEmailBtn.textContent = "Copied!";
      setTimeout(() => (copyEmailBtn.textContent = "Copy Email"), 1200);
    });
  }

  $$(".mini-btn[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      copyToClipboard(btn.dataset.copy);
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = old), 1000);
    });
  });

  // ======================
  // Project modal
  // ======================
  const projectModal = $("#projectModal");
  const modalTitle = $("#modalTitle");
  const modalDesc = $("#modalDesc");
  const modalTags = $("#modalTags");

  function openModal(card) {
    if (!projectModal) return;
    const title = card.dataset.title || "Project";
    const desc = card.dataset.desc || "";
    const tags = (card.dataset.tags || "").split(",").map(s => s.trim()).filter(Boolean);

    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modalTags.innerHTML = "";
    tags.forEach(t => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = t;
      modalTags.appendChild(chip);
    });

    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  $$(".openProject").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.closest(".project")));
  });

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      const close = e.target.closest("[data-close='true']");
      if (close) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && projectModal.getAttribute("aria-hidden") === "false") closeModal();
    });
  }

  // ======================
  // Testimonial lightbox
  // ======================
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxCap = $("#lightboxCap");

  function openLightbox(src, cap) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxCap.textContent = cap || "";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  $$(".lightboxBtn").forEach(btn => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.img, btn.dataset.caption));
  });

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      const close = e.target.closest("[data-lb-close='true']");
      if (close) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.getAttribute("aria-hidden") === "false") closeLightbox();
    });
  }

  // ======================
  // Contact form -> mailto draft
  // ======================
  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      const subject = encodeURIComponent(`Portfolio inquiry — ${name || "Client"}`);
      const body = encodeURIComponent(
        `Hi Oshi,\n\n` +
        `${message}\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Thanks,`
      );

      window.location.href = `mailto:Oshi.tharanga@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

  // ======================
  // Year
  // ======================
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ======================
  // Skills filter
  // ======================
  const skillBtns = $$(".seg[data-skill-filter]");
  const skillCards = $$("#skillsGrid .skill");

  function filterSkills(filter) {
    $$(".seg").forEach(b => b.classList.toggle("active", b.dataset.skillFilter === filter));
    skillCards.forEach(card => {
      const show = (filter === "all") || (card.dataset.skill === filter);
      card.style.display = show ? "" : "none";
    });
  }

  skillBtns.forEach(btn => {
    btn.addEventListener("click", () => filterSkills(btn.dataset.skillFilter));
  });

  // ======================
  // Scroll listeners
  // ======================
  window.addEventListener("scroll", () => {
    updateProgress();
    updateActiveLink();
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateActiveLink();
  });

  // Initial run
  updateProgress();
  updateActiveLink();
})();
