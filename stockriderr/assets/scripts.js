/* ============================================
   STOCK RIDER ACADEMY — Scripts
   ============================================ */

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// ============ MOBILE MENU ============
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.add('open');
      menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenu.classList.remove('open');
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  document.addEventListener('click', (e) => {
    if (menuOpen && !navbar.contains(e.target)) {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
}

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('revealed'), idx * 70);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

// ============ TESTIMONIAL SLIDER ============
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;
let autoSlideInterval;

function initSlider() {
  if (!slides.length) return;
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => { goToSlide(i); resetAutoSlide(); });
      dotsContainer.appendChild(dot);
    });
  }
  goToSlide(0);
  startAutoSlide();
}

function goToSlide(n) {
  slides.forEach((s) => s.classList.remove('active'));
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];
  dots.forEach((d) => d.classList.remove('active'));
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function slideTestimonial(dir) {
  goToSlide(currentSlide + dir);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

window.slideTestimonial = slideTestimonial;
initSlider();

// ============ LIGHTBOX ============
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lightbox || !img) return;
  img.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// ============ STATS COUNTER ============
function animateCounter(el, target, duration) {
  duration = duration || 1800;
  const step = target / (duration / 16);
  let current = 0;
  const update = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current < target) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number[data-target]');
if (statNumbers.length) {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target, 10);
          animateCounter(entry.target, target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNumbers.forEach((el) => statObserver.observe(el));
}

// ============ FAQ ============
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = body.style.display === 'block';

  document.querySelectorAll('.faq-body').forEach((b) => (b.style.display = 'none'));
  document.querySelectorAll('.faq-icon').forEach((i) => i.classList.remove('rotated'));

  if (!isOpen) {
    body.style.display = 'block';
    icon.classList.add('rotated');
  }
}
window.toggleFaq = toggleFaq;

// ============ CONTACT FORM ============
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;
  form.style.display = 'none';
  success.style.display = 'block';
}
window.handleFormSubmit = handleFormSubmit;

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
