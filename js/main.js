// ==========================================================================
// Maple Homes and Enterprises — Interactive App Logic
// ==========================================================================

import { businessData } from './data.js';

// --- Utility Functions ---
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

const formatLakhsCr = (amount) => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  return `₹${(amount / 100000).toFixed(1)} Lakh`;
};

// --- DOM Content Loaded ---
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

  // Initialize Lucide icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// --- 1. Sticky Header ---
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- 2. Mobile Drawer Navigation ---
function initMobileDrawer() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  const toggleDrawer = () => {
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  };

  menuBtn.addEventListener('click', toggleDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// --- 3. Render Stats ---
function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

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

// --- 4. Render Services with Filter ---
function renderServices(filter = 'all') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered =
    filter === 'all'
      ? businessData.services
      : businessData.services.filter((s) => s.category === filter);

  container.innerHTML = filtered
    .map((s) => {
      const waMsg = encodeURIComponent(
        `Hello Maple Homes! I am interested in your service: "${s.title}". Please share details and availability.`
      );
      return `
      <div class="service-card" data-category="${s.category}">
        ${s.badge ? `<span class="service-badge">${s.badge}</span>` : ''}
        <div>
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
        <div style="margin-top: 1rem;">
          <a href="https://wa.me/${businessData.contact.whatsappPhone}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-secondary" style="width: 100%;">
            <i data-lucide="message-circle" style="width: 18px; height: 18px;"></i>
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

// Service Filter buttons
window.filterServices = (category, btn) => {
  document.querySelectorAll('.services-filter-bar .filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  renderServices(category);
};

// --- 5. Render Featured Properties ---
function renderProperties(filter = 'all') {
  const container = document.getElementById('properties-grid');
  if (!container) return;

  const filtered =
    filter === 'all'
      ? businessData.featuredProperties
      : businessData.featuredProperties.filter((p) => p.category === filter);

  container.innerHTML = filtered
    .map((p) => {
      const waMsg = encodeURIComponent(
        `Hello Maple Homes! I am interested in viewing: "${p.title}" at ${p.location} (Quoted: ${p.price}). Please share more details and arrange a visit.`
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
              <i data-lucide="map-pin" style="width: 16px; height: 16px; color: var(--brand-primary);"></i>
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
          <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <a href="https://wa.me/${businessData.contact.whatsappPhone}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="flex: 1; padding: 0.65rem 0.75rem; font-size: 0.825rem;">
              <i data-lucide="message-circle" style="width: 16px; height: 16px;"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:${businessData.contact.primaryPhone}" class="btn btn-secondary" style="padding: 0.65rem 0.85rem; font-size: 0.825rem;" title="Call Us Directly">
              <i data-lucide="phone" style="width: 16px; height: 16px;"></i>
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
  btn.classList.add('active');
  renderProperties(category);
};

// --- 6. Render Why Choose Us ---
function renderWhyUs() {
  const container = document.getElementById('why-grid');
  if (!container) return;

  container.innerHTML = businessData.whyChooseUs
    .map(
      (w) => `
    <div class="why-card">
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
  if (!container) return;

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

// --- 8. Render Testimonials (Verified Justdial Reviews) ---
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = businessData.testimonials
    .map(
      (t) => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${Array(t.rating)
            .fill('<i data-lucide="star" style="fill: #F59E0B; width: 18px; height: 18px;"></i>')
            .join('')}
        </div>
        <p class="testimonial-text">"${t.review}"</p>
      </div>
      <div class="testimonial-author-box">
        <div class="testimonial-avatar">${t.name.charAt(0).toUpperCase()}</div>
        <div>
          <div class="testimonial-author-name">${t.name}</div>
          <div class="testimonial-source">
            <i data-lucide="check-circle" style="width: 14px; height: 14px; color: var(--brand-primary);"></i>
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

    // Update displays
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

// --- 10. Contact Form with WhatsApp Integration ---
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
      `*New Property Enquiry from Website*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🏢 *Requirement:* ${service}\n` +
      `💰 *Budget Range:* ${budget}\n` +
      (message ? `📝 *Message:* ${message}\n\n` : '\n') +
      `Please connect with me with suitable options.`;

    const waUrl = `https://wa.me/${businessData.contact.whatsappPhone}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');

    showToast('Enquiry prepared! Opening WhatsApp now...');
    form.reset();
  });
}

// Toast helper
function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.innerHTML = `
      <i data-lucide="check-circle-2" class="toast-icon"></i>
      <span class="toast-text"></span>
    `;
    document.body.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
  }

  toast.querySelector('.toast-text').textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
