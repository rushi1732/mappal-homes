// ==========================================================================
// Maple Homes & Enterprises — Ultra-Luxury Interactive App Logic
// ==========================================================================

const businessData = window.businessData || {};

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

  // Initialize Lucide icons
  if (window.lucide) {
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
      return `
      <div class="service-card" data-category="${s.category}">
        ${s.badge ? `<span class="service-badge">${s.badge}</span>` : ''}
        <div>
          <div class="service-card-number">${stageNumber}</div>
          <div class="service-icon-box">
            <i data-lucide="${s.icon}"></i>
          </div>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-subtitle">${s.subtitle}</p>
          <p class="service-desc">${s.description}</p>
          <ul class="service-features-list">
            ${s.features
              .map(
                (f) => `
              <li class="service-feature-item">
                <i data-lucide="check" class="service-feature-check"></i>
                <span>${f}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
        <div>
          <a href="https://wa.me/${businessData.contact.whatsappPhone}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-secondary" style="width: 100%;">
            <i data-lucide="message-circle" style="width: 16px; height: 16px; color: var(--color-teal);"></i>
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    `;
    })
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
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
              <i data-lucide="map-pin" style="width: 15px; height: 15px; color: var(--color-teal);"></i>
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
              <i data-lucide="message-circle" style="width: 16px; height: 16px;"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:${businessData.contact.primaryPhone}" class="btn btn-secondary" style="padding: 0.75rem 1rem;" title="Call Us Directly">
              <i data-lucide="phone" style="width: 16px; height: 16px; color: var(--color-teal);"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
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
      (w, index) => `
    <div class="why-card">
      <div class="why-card-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="why-icon-box">
        <i data-lucide="${w.icon}"></i>
      </div>
      <h3 class="why-card-title">${w.title}</h3>
      <p class="why-card-desc">${w.description}</p>
    </div>
  `
    )
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
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
          ${Array(t.rating)
            .fill('<i data-lucide="star" style="fill: #C6A56B; color: #C6A56B; width: 17px; height: 17px;"></i>')
            .join('')}
        </div>
        <p class="testimonial-text">"${t.review}"</p>
      </div>
      <div class="testimonial-author-box">
        <div class="testimonial-avatar">${t.name.charAt(0).toUpperCase()}</div>
        <div>
          <div class="testimonial-author-name">${t.name}</div>
          <div class="testimonial-source">
            <i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: var(--color-teal);"></i>
            <span>${t.source} • ${t.date}</span>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
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
    // Map to properties filter
    const targetFilter = (chosenCat === 'all') ? 'all' : chosenCat;
    
    // Find corresponding filter button in properties section
    const propBtns = document.querySelectorAll('.properties-filter-bar .filter-btn');
    propBtns.forEach((b) => {
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(targetFilter)) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    renderProperties(targetFilter);

    // Smooth scroll to properties section
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
