const body = document.body;
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const backToTop = document.getElementById('backToTop');
const yearElement = document.getElementById('year');
const typewriterElement = document.getElementById('typewriter');
const form = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const phrases = [
  'Frontend Developer',
  'Diseñadora UX/UI',
  'Profesional tecnológica',
  'Creativa y orientada a resultados'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];
  typewriterElement.textContent = isDeleting
    ? current.slice(0, charIndex--)
    : current.slice(0, charIndex++);

  if (!isDeleting && charIndex > current.length) {
    setTimeout(() => { isDeleting = true; typeLoop(); }, 1200);
    return;
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 70 : 90);
}

if (typewriterElement) {
  typeLoop();
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach((section) => activeSectionObserver.observe(section));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 600);
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  themeToggle.innerHTML = body.classList.contains('dark') ? '☀️' : '🌙';
});

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.classList.add('dark');
}

themeToggle && (themeToggle.innerHTML = body.classList.contains('dark') ? '☀️' : '🌙');

menuToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const target = entry.target;
    const endValue = Number(target.dataset.counter || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(endValue / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= endValue) {
        target.textContent = endValue;
        clearInterval(timer);
      } else {
        target.textContent = current;
      }
    }, 30);
    observer.unobserve(target);
  });
});

counters.forEach((counter) => counterObserver.observe(counter));

const progressBars = document.querySelectorAll('.progress-bar span');
const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.width = entry.target.dataset.width;
    observer.unobserve(entry.target);
  });
});

progressBars.forEach((bar) => progressObserver.observe(bar));

const createRipple = (event) => {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
};

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', createRipple);
});

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

if (dot && ring) {
  body.classList.add('cursor-hidden');
  window.addEventListener('mousemove', (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll('a, button, input, textarea, .project-card, .card, .cert-card, .timeline-card').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });
    element.addEventListener('mouseleave', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

const particlesContainer = document.querySelector('.particles');
if (particlesContainer) {
  for (let i = 0; i < 24; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particlesContainer.appendChild(particle);
  }
}

const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    hero.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'translate3d(0, 0, 0)';
  });
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Mensaje listo para enviar. Pendiente de completar conexión real.';
  form.reset();
});
