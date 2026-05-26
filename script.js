document.addEventListener('DOMContentLoaded', () => {

  // ===== TRANSLATIONS =====
  const translations = {
    es: {
      navHome: 'Home',
      navAbout: 'Sobre mi',
      navServices: 'Soluciones',
      navContact: 'Contacto',
      contactBtn: 'Contáctame',
      saveContact: 'Guardar contacto',
      aboutMe: 'Sobre mí',
      homeTitle: 'Hola, soy <span>Sebastian Sánchez</span>',
      homeRole: 'Gerente <span>Comercial</span>',
      homeDesc: 'En Sistemas Litográficos tenemos las soluciones que necesitas para tu próximo proyecto',
      aboutTitle: 'Gerente <span>Comercial</span> con visión estratégica',
      aboutDesc: 'Dirijo la operación con una visión estratégica centrada en eficiencia, sostenibilidad y excelencia en impresión litográfica junto al mundo digital.',
      empresaTitle: 'Nuestra <span>Empresa</span>',
      empresaNosotros: 'Nosotros',
      empresaNosotrosDesc: 'Somos una empresa con más de 20 años transformando ideas en impresiones de alto impacto, con diseños enfocados en la innovación, calidad y usando siempre la tecnología de vanguardia.',
      empresaEco: 'Comprometidos con el medio ambiente',
      empresaEcoDesc: 'Diseñamos e imprimimos con responsabilidad ambiental, usando materiales y procesos sostenibles.',
      empresaProd: 'Producimos',
      empresaProdDesc: 'Desde agendas, libros y revistas hasta empaques personalizados, material corporativo, publicidad exterior y soluciones POP. Creamos lo que tu marca necesita para destacar.',
      serviciosTitle: 'Soluciones',
      serviceNames: ['Editorial', 'Publicidad', 'Corporativo', 'Empaques', 'Publicidad Exterior', 'Material P.O.P'],
      serviceDescs: [
        'Transformamos ideas en publicaciones memorables. Ideal para libros, revistas y más',
        'Diseños impactantes que venden. Dale presencia a tu marca con piezas promocionales.',
        'Impulsa tu identidad visual con artículos que comunican profesionalismo.',
        'Crea una experiencia de marca desde el primer contacto. Empaques que destacan.',
        'Atrae miradas con formatos grandes y resistentes. Ideal para calles y eventos.',
        'Destaca en el punto de venta con piezas creativas y funcionales.'
      ],
      otrosTitle: 'Soluciones Digitales',
      nfc: 'Sistemas NFC',
      nfcDesc: 'Conoce nuestras tarjetas de presentación web personalizadas.',
      digital: 'Sistemas Digitales',
      digitalDesc: 'Ofrecemos una amplia gama de servicios diseñados para abordar cualquier desafío de marketing que tu empresa pueda enfrentar.',
      verMas: 'Ver más',
      clientesTitle: 'Nuestros <span>Clientes</span>',
      contactTitle: 'Contacta<span>me</span>',
      formNombre: 'Tu nombre',
      formEmail: 'Tu email',
      formTelefono: 'Teléfono',
      formMensaje: 'Cuéntame sobre tu proyecto...',
      formEnviar: 'Enviar mensaje',
      copyright: '&copy; 2026 Sistemas Litográficos · Todos los derechos reservados',
      badge: 'Disponible para proyectos',
      contactDesc: '¿Listo para darle vida a tu próximo proyecto? Escríbeme y recibe una propuesta personalizada.'
    },
    en: {
      navHome: 'Home',
      navAbout: 'About me',
      navServices: 'Solutions',
      navContact: 'Contact',
      contactBtn: 'Contact me',
      saveContact: 'Save contact',
      aboutMe: 'About me',
      homeTitle: 'Hi, I\'m <span>Sebastian Sánchez</span>',
      homeRole: 'Commercial <span>Manager</span>',
      homeDesc: 'At Sistemas Litográficos we have the solutions you need for your next project',
      aboutTitle: 'Commercial <span>Manager</span> with strategic vision',
      aboutDesc: 'I lead operations with a strategic vision focused on efficiency, sustainability, and excellence in lithographic printing alongside the digital world.',
      empresaTitle: 'Our <span>Company</span>',
      empresaNosotros: 'About us',
      empresaNosotrosDesc: 'We are a company with more than 20 years transforming ideas into high-impact prints, with designs focused on innovation, quality, and always using cutting-edge technology.',
      empresaEco: 'Committed to the environment',
      empresaEcoDesc: 'We design and print with environmental responsibility, using sustainable materials and processes.',
      empresaProd: 'We produce',
      empresaProdDesc: 'From planners, books, and magazines to custom packaging, corporate material, outdoor advertising, and POP solutions. We create what your brand needs to stand out.',
      serviciosTitle: 'Solutions',
      serviceNames: ['Editorial', 'Advertising', 'Corporate', 'Packaging', 'Outdoor Advertising', 'P.O.P Material'],
      serviceDescs: [
        'We turn ideas into memorable publications. Perfect for books, magazines, and more.',
        'Impactful designs that sell. Give your brand presence with promotional pieces.',
        'Boost your visual identity with items that communicate professionalism.',
        'Create a brand experience from the first contact. Packaging that stands out.',
        'Attract attention with large, durable formats. Perfect for streets and events.',
        'Stand out at the point of sale with creative and functional pieces.'
      ],
      otrosTitle: 'Digital Solutions',
      nfc: 'NFC Systems',
      nfcDesc: 'Discover our personalized web business cards.',
      digital: 'Digital Systems',
      digitalDesc: 'We offer a wide range of services designed to address any marketing challenge your company may face.',
      verMas: 'See more',
      clientesTitle: 'Our <span>Clients</span>',
      contactTitle: 'Contact<span>me</span>',
      formNombre: 'Your name',
      formEmail: 'Your email',
      formTelefono: 'Phone',
      formMensaje: 'Tell me about your project...',
      formEnviar: 'Send message',
      copyright: '&copy; 2026 Sistemas Litográficos · All rights reserved',
      badge: 'Available for projects',
      contactDesc: 'Ready to bring your next project to life? Write to me and receive a personalized proposal.'
    }
  };

  let currentLang = 'es';
  const langBtn = document.getElementById('lang-toggle');

  function setLang(lang) {
    const t = translations[lang];

    // Navbar
    const navLinks = document.querySelectorAll('.navbar a');
    const navKeys = ['navHome', 'navAbout', 'navServices', 'navContact'];
    navLinks.forEach((link, i) => { if (navKeys[i]) link.textContent = t[navKeys[i]]; });

    // Header buttons
    document.querySelectorAll('.gradient-btn').forEach(b => b.textContent = t.contactBtn);

    // Buttons
    const saveBtn = document.getElementById('btn-contacto');
    if (saveBtn) saveBtn.textContent = t.saveContact;
    const aboutBtn = document.getElementById('btn-sobreMi');
    if (aboutBtn) aboutBtn.textContent = t.aboutMe;

    // Hero
    const homeTitle = document.querySelector('.home-content h1');
    if (homeTitle) homeTitle.innerHTML = t.homeTitle;
    const homeRole = document.querySelector('.home-content h3');
    if (homeRole) homeRole.innerHTML = t.homeRole;
    const homeDesc = document.querySelector('.home-content > p');
    if (homeDesc) homeDesc.textContent = t.homeDesc;
    const badgeEl = document.querySelector('.badge');
    if (badgeEl) {
      const dot = badgeEl.querySelector('.badge-dot');
      badgeEl.textContent = t.badge;
      if (dot) badgeEl.prepend(dot);
    }

    // About
    const aboutTitle = document.querySelector('.about-content h2');
    if (aboutTitle) aboutTitle.innerHTML = t.aboutTitle;
    const aboutDesc = document.querySelector('.about-content > p');
    if (aboutDesc) aboutDesc.textContent = t.aboutDesc;
    const aboutBtn2 = document.querySelector('.about-content .btn');
    if (aboutBtn2) aboutBtn2.textContent = t.contactBtn;

    // Empresa
    const empresaTitle = document.querySelector('.projects .heading');
    if (empresaTitle) empresaTitle.innerHTML = t.empresaTitle;
    const cards = document.querySelectorAll('.projects-box .project-card');
    const cardKeys = [
      ['empresaNosotros', 'empresaNosotrosDesc'],
      ['empresaEco', 'empresaEcoDesc'],
      ['empresaProd', 'empresaProdDesc']
    ];
    cards.forEach((card, i) => {
      if (cardKeys[i]) {
        card.querySelector('h3').textContent = t[cardKeys[i][0]];
        card.querySelector('p').textContent = t[cardKeys[i][1]];
      }
    });

    // Servicios
    const sTitle = document.querySelector('.services .heading');
    if (sTitle) sTitle.textContent = t.serviciosTitle;
    document.querySelectorAll('.service-box').forEach((box, i) => {
      box.querySelectorAll('h4').forEach(h4 => h4.textContent = t.serviceNames[i] || '');
      const backP = box.querySelector('.service-back p');
      if (backP) backP.textContent = t.serviceDescs[i] || '';
    });

    // Soluciones digitales
    const otrosTitle = document.querySelector('.other-services .heading');
    if (otrosTitle) otrosTitle.textContent = t.otrosTitle;
    const otrosCards = document.querySelectorAll('.other-service-card');
    if (otrosCards[0]) {
      otrosCards[0].querySelector('h3').textContent = t.nfc;
      otrosCards[0].querySelector('p').textContent = t.nfcDesc;
      otrosCards[0].querySelector('.btn').textContent = t.verMas;
    }
    if (otrosCards[1]) {
      otrosCards[1].querySelector('h3').textContent = t.digital;
      otrosCards[1].querySelector('p').textContent = t.digitalDesc;
      otrosCards[1].querySelector('.btn').textContent = t.verMas;
    }

    // Clientes
    const clientesTitle = document.querySelector('.clientes .heading');
    if (clientesTitle) clientesTitle.innerHTML = t.clientesTitle;

    // Contacto
    const contactTitle = document.querySelector('.contact .heading');
    if (contactTitle) contactTitle.innerHTML = t.contactTitle;
    const contactDesc = document.querySelector('.contact-info > p');
    if (contactDesc) contactDesc.textContent = t.contactDesc;

    // Formulario
    const fields = {
      'input[name="name"]': t.formNombre,
      'input[name="email"]': t.formEmail,
      'input[name="phone"]': t.formTelefono,
      'textarea[name="message"]': t.formMensaje
    };
    Object.entries(fields).forEach(([sel, val]) => {
      const el = document.querySelector(sel);
      if (el) el.placeholder = val;
    });
    const submitBtn = document.querySelector('input[type="submit"].btn');
    if (submitBtn) submitBtn.value = t.formEnviar;

    // Footer
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.innerHTML = t.copyright;

    if (langBtn) langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    currentLang = lang;
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const next = currentLang === 'es' ? 'en' : 'es';
      setLang(next);
      localStorage.setItem('lang', next);
    });
    setLang('es');
  }

  // ===== MENU TOGGLE =====
  const menuIcon = document.querySelector('#menu-icon');
  const navbar   = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    });
  }

  // ===== HEADER SCROLL CLASS =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header && header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ===== ACTIVE NAV ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar a');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => navObserver.observe(s));

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ===== STATS COUNTER =====
  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(n => statObserver.observe(n));

  function animateCounter(el, target) {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const id = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(id); }
      el.textContent = current;
    }, 22);
  }

  // ===== VCF DOWNLOAD =====
  const downloadLink = document.getElementById('downloadContact');
  if (downloadLink) {
    const vcardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Sebastian Sanchez',
      'N:Sebastian;Sanchez;;;',
      'ORG:Sistemas litográficos',
      'TEL;TYPE=work:+57 311 6111687',
      'EMAIL:contacto@sistemaslitograficos.com',
      'URL:https://www.sistemaslitograficos.com.co',
      'URL:https://sebastian-sanchez.netlify.app/',
      'X-SOCIALPROFILE;type=Instagram:https://www.instagram.com/sistemaslitograficossas/',
      'X-SOCIALPROFILE;type=Instagram:https://www.instagram.com/cuatrotorres/',
      'END:VCARD'
    ].join('\n');
    const blob = new Blob([vcardData], { type: 'text/vcard' });
    downloadLink.href = URL.createObjectURL(blob);
  }

  // ===== SCROLL BUTTONS =====
  document.getElementById('btn-contacto')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btn-sobreMi')?.addEventListener('click', () => {
    document.getElementById('sobreMi')?.scrollIntoView({ behavior: 'smooth' });
  });

  // ===== CONTACT FORM =====
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw34uUnVRknwP2eil759X1mfyeeGbEVNcQv4X-JVMfWKk_NyLI9EF6D__JOB6lCnSrk/exec';
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name    = (fd.get('name')    || '').toString().trim();
      const email   = (fd.get('email')   || '').toString().trim();
      const phone   = (fd.get('phone')   || '').toString().trim();
      const message = (fd.get('message') || '').toString().trim();

      const assembled = `Hola, mi nombre es ${name || 'N/A'}, mis datos son ${email || 'N/A'} y ${phone || 'N/A'}\n${message}`;
      window.open(`https://api.whatsapp.com/send?phone=573116111687&text=${encodeURIComponent(assembled)}`, '_blank', 'noopener');

      if (APPS_SCRIPT_URL.startsWith('http')) {
        const payload = new URLSearchParams({ name, email, phone, message, origin: location.origin, page: location.href, userAgent: navigator.userAgent });
        fetch(APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: payload })
          .catch(err => console.warn('Apps Script error:', err));
      }

      if (downloadLink) downloadLink.click();
      contactForm.reset();
    });
  }

  // ===== CAROUSEL — duplicate items for seamless CSS infinite scroll =====
  const track = document.querySelector('.carousel-track');
  if (track) {
    const original = Array.from(track.querySelectorAll('.carousel-item'));
    original.forEach(item => track.appendChild(item.cloneNode(true)));
  }

  // ===== BACK TO TOP =====
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
