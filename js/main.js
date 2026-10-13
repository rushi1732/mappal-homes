// ==========================================================================
// Maple Homes & Enterprises — Ultra-Luxury Interactive App Logic
// ==========================================================================

const businessData = window.businessData || {};

// Standalone Inline SVG Icons (Zero External Dependency, 100% Reliable Offline)
const svgIcons = {
  star: `<svg width="17" height="17" viewBox="0 0 24 24" fill="#C6A56B" stroke="#C6A56B" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  mapPin: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#087F79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  phone: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  check: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#087F79" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  checkCircle: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#087F79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  "building-2": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="8" y1="6" x2="8.01" y2="6"></line><line x1="16" y1="6" x2="16.01" y2="6"></line><line x1="16" y1="10" x2="16.01" y2="10"></line><line x1="16" y1="14" x2="16.01" y2="14"></line><line x1="16" y1="18" x2="16.01" y2="18"></line></svg>`,
  key: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-1.5 1.5L16 7l-2-2m-1.5 1.5L11 8l-2-2m-1.5 1.5L6 9l-2-2"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>`,
  "trending-up": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
  banknote: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`,
  "shield-check": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
  building: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="8" y1="6" x2="8.01" y2="6"></line><line x1="16" y1="6" x2="16.01" y2="6"></line><line x1="16" y1="10" x2="16.01" y2="10"></line><line x1="16" y1="14" x2="16.01" y2="14"></line><line x1="16" y1="18" x2="16.01" y2="18"></line></svg>`,
  percent: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`,
  landmark: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>`
};

// --- Utility Formatters ---
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

const formatLakhsCr = (amount) => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Crore`;
  }
  return `₹${(amount / 100000).toFixed(1)} Lakh`;
};

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  renderStats();
  renderServices('all');
  renderProperties('all');
  renderWhyUs();
  renderGallery();
  renderTestimonials();
  initCalculator();
  initContactForm();
  initLightbox();
  initDiscoverySearch();
  initScrollSpy();

  // Initialize Lucide icons if loaded
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});

// --- 1. Sticky Header ---
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --- 2. Mobile Drawer Navigation ---
function initMobileDrawer() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- 3. Render Stats ---
function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container || !businessData.stats) return;

  container.innerHTML = businessData.stats
    .map(
      (s) => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-desc">${s.desc}</div>
    </div>
  `
    )
    .join('');
}

// --- 4. Render Services with Filter & Architectural Numbers ---
function renderServices(filter = 'all') {
  const container = document.getElementById('services-grid');
  if (!container || !businessData.services) return;

  const filtered =
    filter === 'all'
      ? businessData.services
      : businessData.services.filter((s) => s.category === filter);

  container.innerHTML = filtered
    .map((s, index) => {
      const stageNumber = String(index + 1).padStart(2, '0');
      const waMsg = encodeURIComponent(
        `Hello Maple Homes! I am interested in your service: "${s.title}". Please share details and consultation availability.`
      );
      const iconMarkup = svgIcons[s.icon] || svgIcons.building;
      return `
      <div class="service-card" data-category="${s.category}">
        ${s.badge ? `<span class="service-badge">${s.badge}</span>` : ''}
        <div>
          <div class="service-card-number">${stageNumber}</div>
          <div class="service-icon-box">
            ${iconMarkup}
          </div>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-subtitle">${s.subtitle}</p>
          <p class="service-desc">${s.description}</p>
          <ul class="service-features-list">
            ${s.features
              .map(
                (f) => `
              <li class="service-feature-item">
                <span class="service-feature-check">${svgIcons.check}</span>
                <span>${f}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
        <div>
          <a href="https://wa.me/${businessData.contact.whatsappPhone}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-secondary" style="width: 100%;">
            ${svgIcons.whatsapp}
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    `;
    })
    .join('');
}

window.filterServices = (category, btn) => {
  document.querySelectorAll('.services-filter-bar .filter-btn').forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderServices(category);
};

// --- 5. Render Featured Properties ---
function renderProperties(filter = 'all') {
  const container = document.getElementById('properties-grid');
  if (!container || !businessData.featuredProperties) return;

  const filtered =
    filter === 'all'
      ? businessData.featuredProperties
      : businessData.featuredProperties.filter((p) => p.category === filter);

  container.innerHTML = filtered
    .map((p) => {
      const waMsg = encodeURIComponent(
        `Hello Maple Homes! I am interested in viewing: "${p.title}" at ${p.location} (Quoted: ${p.price}). Please share more details and arrange a site visit.`
      );
      return `
      <div class="property-card" data-category="${p.category}">
        <div class="property-image-wrap">
          <img src="${p.image}" alt="${p.title}" class="property-img" loading="lazy">
          <span class="property-badge-type">${p.type}</span>
          <span class="property-badge-status">${p.possession}</span>
        </div>
        <div class="property-body">
          <div>
            <div class="property-price-box">
              <div class="property-price">${p.price}</div>
              <div class="property-price-sub">${p.priceSub}</div>
            </div>
            <h3 class="property-title">${p.title}</h3>
            <div class="property-location">
              ${svgIcons.mapPin}
              <span>${p.location}</span>
            </div>
            <div class="property-specs">
              <span><strong>Carpet:</strong> ${p.carpet}</span>
              <span><strong>Status:</strong> ${p.possession}</span>
            </div>
            <div class="property-tags">
              ${p.tags.map((t) => `<span class="prop-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="property-actions">
            <a href="https://wa.me/${businessData.contact.whatsappPhone}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="flex: 1; padding: 0.75rem 1rem; font-size: 0.85rem;">
              ${svgIcons.whatsapp}
              <span>WhatsApp</span>
            </a>
            <a href="tel:${businessData.contact.primaryPhone}" class="btn btn-secondary" style="padding: 0.75rem 1rem;" title="Call Us Directly">
              ${svgIcons.phone}
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join('');
}

window.filterProperties = (category, btn) => {
  document.querySelectorAll('.properties-filter-bar .filter-btn').forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProperties(category);
};

// --- 6. Render Why Choose Us with Large Stage Numbers ---
function renderWhyUs() {
  const container = document.getElementById('why-grid');
  if (!container || !businessData.whyChooseUs) return;

  container.innerHTML = businessData.whyChooseUs
    .map(
      (w, index) => {
        const iconMarkup = svgIcons[w.icon] || svgIcons.building;
        return `
    <div class="why-card">
      <div class="why-card-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="why-icon-box">
        ${iconMarkup}
      </div>
      <h3 class="why-card-title">${w.title}</h3>
      <p class="why-card-desc">${w.description}</p>
    </div>
  `;
      }
    )
    .join('');
}

// --- 7. Render Curated Gallery ---
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || !businessData.gallery) return;

  container.innerHTML = businessData.gallery
    .map(
      (item, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-category-pill">${item.category}</span>
        <h4 class="gallery-item-title">${item.title}</h4>
        <span class="gallery-item-sub">${item.caption}</span>
      </div>
    </div>
  `
    )
    .join('');
}

// Lightbox Logic
let currentLightboxIdx = 0;
window.openLightbox = (idx) => {
  currentLightboxIdx = idx;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');

  const item = businessData.gallery[idx];
  if (!item) return;

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  caption.textContent = item.caption;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.querySelector('.lightbox-close-btn');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// --- 8. Render Verified Justdial Reviews ---
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container || !businessData.testimonials) return;

  container.innerHTML = businessData.testimonials
    .map(
      (t) => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${Array(t.rating).fill(svgIcons.star).join('')}
        </div>
        <p class="testimonial-text">"${t.review}"</p>
      </div>
      <div class="testimonial-author-box">
        <div class="testimonial-avatar">${t.name.charAt(0).toUpperCase()}</div>
        <div>
          <div class="testimonial-author-name">${t.name}</div>
          <div class="testimonial-source">
            ${svgIcons.checkCircle}
            <span>${t.source} • ${t.date}</span>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

// --- 9. Interactive EMI Calculator ---
function initCalculator() {
  const amountSlider = document.getElementById('calc-amount');
  const rateSlider = document.getElementById('calc-rate');
  const tenureSlider = document.getElementById('calc-tenure');

  const amountDisplay = document.getElementById('calc-amount-val');
  const rateDisplay = document.getElementById('calc-rate-val');
  const tenureDisplay = document.getElementById('calc-tenure-val');

  const emiDisplay = document.getElementById('calc-emi-val');
  const principalDisplay = document.getElementById('calc-principal-val');
  const interestDisplay = document.getElementById('calc-interest-val');
  const totalDisplay = document.getElementById('calc-total-val');

  if (!amountSlider || !rateSlider || !tenureSlider) return;

  const calculate = () => {
    const P = parseFloat(amountSlider.value);
    const annualRate = parseFloat(rateSlider.value);
    const tenureYears = parseFloat(tenureSlider.value);

    // Update value badge labels
    amountDisplay.textContent = formatLakhsCr(P);
    rateDisplay.textContent = `${annualRate}% p.a.`;
    tenureDisplay.textContent = `${tenureYears} Years (${tenureYears * 12} Mos)`;

    // Monthly interest rate
    const r = annualRate / 12 / 100;
    const n = tenureYears * 12;

    // EMI Formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    emiDisplay.textContent = formatINR(Math.round(emi));
    principalDisplay.textContent = formatINR(P);
    interestDisplay.textContent = formatINR(Math.round(totalInterest));
    totalDisplay.textContent = formatINR(Math.round(totalPayment));
  };

  amountSlider.addEventListener('input', calculate);
  rateSlider.addEventListener('input', calculate);
  tenureSlider.addEventListener('input', calculate);

  calculate();
}

// --- 10. Contact Consultation Form with WhatsApp Integration ---
function initContactForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const service = document.getElementById('form-service').value;
    const budget = document.getElementById('form-budget').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !phone) {
      showToast('Please enter your Name and Mobile Number.');
      return;
    }

    const waText = 
      `*New Property Consultation Request*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🏢 *Requirement:* ${service}\n` +
      `💰 *Budget:* ${budget}\n` +
      (message ? `📝 *Preferences:* ${message}\n\n` : '\n') +
      `Please connect with suitable verified options from Melody Tower office.`;

    const waUrl = `https://wa.me/${businessData.contact.whatsappPhone}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    showToast('Consultation request prepared! Connecting to WhatsApp...');
    form.reset();
  });
}

// --- 11. Quick Discovery Search Bar Logic ---
function initDiscoverySearch() {
  const btn = document.getElementById('btn-discovery-search');
  const catSelect = document.getElementById('search-category');

  if (!btn || !catSelect) return;

  btn.addEventListener('click', () => {
    const chosenCat = catSelect.value;
    const targetFilter = (chosenCat === 'all') ? 'all' : chosenCat;
    
    const propBtns = document.querySelectorAll('.properties-filter-bar .filter-btn');
    propBtns.forEach((b) => {
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(targetFilter)) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    renderProperties(targetFilter);

    const propSection = document.getElementById('properties');
    if (propSection) {
      propSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// --- 12. Active Nav Link on Scroll (ScrollSpy) ---
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// Toast helper
function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--color-navy);
      color: #FFF;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--color-gold);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 9999;
      font-size: 0.95rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 4000);
}
