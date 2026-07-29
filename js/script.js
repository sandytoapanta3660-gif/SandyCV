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
const langToggle = document.querySelector('.lang-toggle');
const langOptions = Array.from(document.querySelectorAll('.lang-option'));
const langMenu = document.querySelector('.lang-menu');
const translations = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Educación',
    skills: 'Habilidades',
    certifications: 'Certificaciones',
    projects: 'Proyectos',
    contact: 'Contacto',
    heroEyebrow: 'Portafolio profesional',
    heroDescription: 'Profesional joven, creativa y orientada a la tecnología, con enfoque en experiencias digitales modernas, elegantes y funcionales. <!-- COMPLETAR AQUÍ -->',
    heroDownload: 'Descargar CV',
    heroContact: 'Contactarme',
    heroProjects: 'Ver proyectos',
    aboutLabel: 'Sobre mí',
    aboutTitle: 'Una propuesta profesional elegante y estratégica',
    aboutDescriptionHeading: 'Descripción profesional',
    aboutDescriptionText: 'Soy una profesional en constante evolución, con interés en el diseño, el desarrollo web y la creación de experiencias digitales que combinan estética, usabilidad y tecnología. <!-- COMPLETAR AQUÍ -->',
    aboutInfoHeading: 'Información clave',
    goalLabel: 'Objetivo profesional:',
    goalText: 'Construir experiencias digitales de alto impacto y valor. <!-- COMPLETAR AQUÍ -->',
    profileLabel: 'Perfil profesional:',
    profileText: 'Enfoque en la mejora continua, la comunicación clara y la ejecución creativa. <!-- COMPLETAR AQUÍ -->',
    strengthsLabel: 'Fortalezas:',
    strengthsText: 'Proactividad, organización, aprendizaje rápido y pensamiento visual. <!-- COMPLETAR AQUÍ -->',
    valuesLabel: 'Valores:',
    valuesText: 'Responsabilidad, honestidad, disciplina y excelencia. <!-- COMPLETAR AQUÍ -->',
    interestsLabel: 'Intereses:',
    interestsText: 'UX/UI, desarrollo frontend, análisis de datos y diseño de productos. <!-- COMPLETAR AQUÍ -->',
    contactLabel: 'Contacto',
    contactTitle: 'Conectemos y construyamos algo valioso',
    contactInfoHeading: 'Información de contacto',
    emailLabel: 'Correo:',
    phoneLabel: 'Teléfono:',
    locationLabel: 'Ubicación:',
    whatsappLabel: 'WhatsApp:',
    pendingText: 'Pendiente de completar',
    formTitle: 'Envíame un mensaje',
    nameLabel: 'Nombre',
    messageLabel: 'Mensaje',
    sendButton: 'Enviar',
    footerRights: 'Todos los derechos reservados.'
  },
  en: {
    home: 'Home',
    about: 'About me',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
    heroEyebrow: 'Professional portfolio',
    heroDescription: 'Young and creative professional focused on technology, with an emphasis on modern, elegant and functional digital experiences. <!-- COMPLETAR AQUÍ -->',
    heroDownload: 'Download CV',
    heroContact: 'Contact me',
    heroProjects: 'View projects',
    aboutLabel: 'About me',
    aboutTitle: 'An elegant and strategic professional proposal',
    aboutDescriptionHeading: 'Professional description',
    aboutDescriptionText: 'I am a professional in constant evolution, interested in web design, development and creating digital experiences that combine aesthetics, usability and technology. <!-- COMPLETAR AQUÍ -->',
    aboutInfoHeading: 'Key information',
    goalLabel: 'Professional goal:',
    goalText: 'Build high-impact, high-value digital experiences. <!-- COMPLETAR AQUÍ -->',
    profileLabel: 'Professional profile:',
    profileText: 'Focus on continuous improvement, clear communication and creative execution. <!-- COMPLETAR AQUÍ -->',
    strengthsLabel: 'Strengths:',
    strengthsText: 'Proactivity, organization, fast learning and visual thinking. <!-- COMPLETAR AQUÍ -->',
    valuesLabel: 'Values:',
    valuesText: 'Responsibility, honesty, discipline and excellence. <!-- COMPLETAR AQUÍ -->',
    interestsLabel: 'Interests:',
    interestsText: 'UX/UI, frontend development, data analysis and product design. <!-- COMPLETAR AQUÍ -->',
    contactLabel: 'Contact',
    contactTitle: 'Let’s connect and build something valuable',
    contactInfoHeading: 'Contact information',
    emailLabel: 'Email:',
    phoneLabel: 'Phone:',
    locationLabel: 'Location:',
    whatsappLabel: 'WhatsApp:',
    pendingText: 'Pending to complete',
    formTitle: 'Send me a message',
    nameLabel: 'Name',
    messageLabel: 'Message',
    sendButton: 'Send',
    footerRights: 'All rights reserved.'
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    education: 'Éducation',
    skills: 'Compétences',
    certifications: 'Certifications',
    projects: 'Projets',
    contact: 'Contact',
    heroEyebrow: 'Portfolio professionnel',
    heroDescription: 'Professionnelle jeune et créative, orientée technologie, avec un intérêt pour des expériences numériques modernes, élégantes et fonctionnelles. <!-- COMPLETAR AQUÍ -->',
    heroDownload: 'Télécharger le CV',
    heroContact: 'Me contacter',
    heroProjects: 'Voir les projets',
    aboutLabel: 'À propos',
    aboutTitle: 'Une proposition professionnelle élégante et stratégique',
    aboutDescriptionHeading: 'Description professionnelle',
    aboutDescriptionText: 'Je suis une professionnelle en constante évolution, intéressée par le design web, le développement et la création d’expériences numériques alliant esthétique, utilisabilité et technologie. <!-- COMPLETAR AQUÍ -->',
    aboutInfoHeading: 'Informations clés',
    goalLabel: 'Objectif professionnel :',
    goalText: 'Créer des expériences numériques à fort impact et à forte valeur. <!-- COMPLETAR AQUÍ -->',
    profileLabel: 'Profil professionnel :',
    profileText: 'Accent mis sur l’amélioration continue, la communication claire et l’exécution créative. <!-- COMPLETAR AQUÍ -->',
    strengthsLabel: 'Points forts :',
    strengthsText: 'Proactivité, organisation, apprentissage rapide et pensée visuelle. <!-- COMPLETAR AQUÍ -->',
    valuesLabel: 'Valeurs :',
    valuesText: 'Responsabilité, honnêteté, discipline et excellence. <!-- COMPLETAR AQUÍ -->',
    interestsLabel: 'Intérêts :',
    interestsText: 'UX/UI, développement frontend, analyse de données et design de produits. <!-- COMPLETAR AQUÍ -->',
    contactLabel: 'Contact',
    contactTitle: 'Connectons-nous et construisons quelque chose de précieux',
    contactInfoHeading: 'Informations de contact',
    emailLabel: 'Courriel :',
    phoneLabel: 'Téléphone :',
    locationLabel: 'Localisation :',
    whatsappLabel: 'WhatsApp :',
    pendingText: 'À compléter',
    formTitle: 'Envoyez-moi un message',
    nameLabel: 'Nom',
    messageLabel: 'Message',
    sendButton: 'Envoyer',
    footerRights: 'Tous droits réservés.'
  }
};
let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  langToggle.textContent = currentLang.toUpperCase();
  langOptions.forEach((option) => {
    option.classList.toggle('active', option.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

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

langToggle?.addEventListener('click', () => {
  langMenu.classList.toggle('open');
});

langOptions.forEach((option) => {
  option.addEventListener('click', () => {
    setLanguage(option.dataset.lang);
    langMenu.classList.remove('open');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.lang-switcher')) {
    langMenu.classList.remove('open');
  }
});

menuToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

applyTranslations();

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
