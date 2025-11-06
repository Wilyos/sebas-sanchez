document.addEventListener('DOMContentLoaded', () => {
  // Traducciones ES/EN
  const translations = {
    es: {
      navHome: 'Home',
      navAbout: 'Sobre mi',
      navServices: 'Soluciones',
      navContact: 'Contacto',
      contactBtn: 'Contáctame',
      saveContact: 'Guardar contacto',
      aboutTitle: 'Sobre <span>Mi</span>',
      aboutDesc: 'Dirijo la operación con una visión estratégica centrada en eficiencia, sostenibilidad y excelencia en impresión litográfica junto al mundo digital.',
      empresaTitle: 'Nuestra <span>Empresa</span>',
      empresaNosotros: 'Nosotros',
      empresaNosotrosDesc: 'Somos una empresa con mas de 20 años transformando ideas en impresiones de alto impacto, con diseños enfocados en la innovación, calidad y usando siempre la tecnología de vanguardia.',
      empresaEco: 'Comprometidos con el medio ambiente',
      empresaEcoDesc: 'Diseñamos e imprimimos con responsabilidad ambiental, usando materiales y procesos sostenibles.',
      empresaProd: 'Producimos',
      empresaProdDesc: 'Desde agendas, libros y revistas hasta empaques personalizados, material corporativo, publicidad exterior y soluciones POP. Creamos lo que tu marca necesita para destacar.',
      serviciosTitle: 'Soluciones',
      editorial: 'Editorial',
      editorialDesc: 'Transformamos ideas en publicaciones memorables. Ideal para libros, revistas y más',
      publicidad: 'Publicidad',
      publicidadDesc: 'Diseños impactantes que venden. Dale presencia a tu marca con piezas promocionales.',
      corporativo: 'Corporativo',
      corporativoDesc: 'Impulsa tu identidad visual con artículos que comunican profesionalismo.',
      empaques: 'Empaques',
      empaquesDesc: 'Crea una experiencia de marca desde el primer contacto. Empaques que destacan.',
      publicidadExt: 'Publicidad Exterior',
      publicidadExtDesc: 'Atrae miradas con formatos grandes y resistentes. Ideal para calles y eventos.',
      pop: 'Material P.O.P',
      popDesc: 'Destaca en el punto de venta con piezas creativas y funcionales.',
      otrosTitle: 'Soluciones Digitales',
      nfc: 'Sistemas NFC',
      nfcDesc: 'Conoce nuestras tarjetas de presentación web personalizadas.',
      digital: 'Sistemas Digitales',
      digitalDesc: 'ofrecemos una amplia gama de servicios diseñados para abordar cualquier desafío de marketing que tu empresa pueda enfrentar.',
      verMas: 'Ver más',
      clientesTitle: 'Nuestros <span>Clientes</span>',
      contactTitle: 'Contacta<span>me</span>',
      formNombre: 'Nombre',
      formEmail: 'Email',
      formTelefono: 'Telefono',
      formMensaje: 'mensaje...',
      formEnviar: 'Enviar',
      copyright: ' &copy; Sistemas Litograficos <br> todos los derechos reservados'
    },
    en: {
      navHome: 'Home',
      navAbout: 'About me',
      navServices: 'Solutions',
      navContact: 'Contact',
      contactBtn: 'Contact me',
      saveContact: 'Save contact',
      aboutTitle: 'About <span>Me</span>',
      aboutDesc: 'I lead operations with a strategic vision focused on efficiency, sustainability, and excellence in lithographic printing alongside the digital world.',
      empresaTitle: 'Our <span>Company</span>',
      empresaNosotros: 'About us',
      empresaNosotrosDesc: 'We are a company with more than 20 years transforming ideas into high-impact prints, with designs focused on innovation, quality, and always using cutting-edge technology.',
      empresaEco: 'Committed to the environment',
      empresaEcoDesc: 'We design and print with environmental responsibility, using sustainable materials and processes.',
      empresaProd: 'We produce',
      empresaProdDesc: 'From planners, books, and magazines to custom packaging, corporate material, outdoor advertising, and POP solutions. We create what your brand needs to stand out.',
      serviciosTitle: 'Solutions',
      editorial: 'Editorial',
      editorialDesc: 'We turn ideas into memorable publications. Perfect for books, magazines, and more.',
      publicidad: 'Advertising',
      publicidadDesc: 'Impactful designs that sell. Give your brand presence with promotional pieces.',
      corporativo: 'Corporate',
      corporativoDesc: 'Boost your visual identity with items that communicate professionalism.',
      empaques: 'Packaging',
      empaquesDesc: 'Create a brand experience from the first contact. Packaging that stands out.',
      publicidadExt: 'Outdoor Advertising',
      publicidadExtDesc: 'Attract attention with large, durable formats. Perfect for streets and events.',
      pop: 'P.O.P Material',
      popDesc: 'Stand out at the point of sale with creative and functional pieces.',
      otrosTitle: 'Digital Solutions',
      nfc: 'NFC Systems',
      nfcDesc: 'Discover our personalized web business cards.',
      digital: 'Digital Systems',
      digitalDesc: 'We offer a wide range of services designed to address any marketing challenge your company may face.',
      verMas: 'See more',
      clientesTitle: 'Our <span>Clients</span>',
      contactTitle: 'Contact<span>me</span>',
      formNombre: 'Name',
      formEmail: 'Email',
      formTelefono: 'Phone',
      formMensaje: 'message...',
      formEnviar: 'Send',
      copyright: ' &copy; Sistemas Litograficos <br> all rights reserved'
    }
  };

  let currentLang = 'es';
  const langBtn = document.getElementById('lang-toggle');

  function setLang(lang) {
    const t = translations[lang];
    // Navbar
    const navLinks = document.querySelectorAll('.navbar a');
    if (navLinks.length >= 4) {
      navLinks[0].textContent = t.navHome;
      navLinks[1].textContent = t.navAbout;
      navLinks[2].textContent = t.navServices;
      navLinks[3].textContent = t.navContact;
    }
    // Botón contacto (header y sección about)
    const contactBtns = document.querySelectorAll('.gradient-btn, .about-content .btn');
    contactBtns.forEach(btn => btn.textContent = t.contactBtn);
    // Botón guardar contacto
    const saveContactBtn = document.getElementById('btn-contacto');
    if (saveContactBtn) saveContactBtn.textContent = t.saveContact;
    // Botón sobre mi
    const sobreMiBtn = document.getElementById('btn-sobreMi');
    if (sobreMiBtn) sobreMiBtn.textContent = t.navAbout;
    // Home
    const homeTitle = document.querySelector('.home-content h1');
    if (homeTitle) homeTitle.innerHTML = lang === 'es' ? 'Hola, soy <span>Sebastian Sánchez</span>' : 'Hi, I am <span>Sebastian Sánchez</span>';
    const homeRole = document.querySelector('.home-content h3');
    if (homeRole) homeRole.innerHTML = lang === 'es' ? 'Gerente <span>Comercial</span>' : 'Commercial <span>Manager</span>';
    const homeDesc = document.querySelector('.home-content p');
    if (homeDesc) homeDesc.textContent = lang === 'es' ? 'En Sistemas Litográficos tenemos las soluciones que necesitas para tu proximo proyecto' : 'At Sistemas Litográficos we have the solutions you need for your next project';
    // About
    const aboutTitle = document.querySelector('.about-content h2');
    if (aboutTitle) aboutTitle.innerHTML = t.aboutTitle;
    const aboutDesc = document.querySelector('.about-content p');
    if (aboutDesc) aboutDesc.textContent = t.aboutDesc;
    // Empresa
    const empresaTitle = document.querySelector('.projects .heading');
    if (empresaTitle) empresaTitle.innerHTML = t.empresaTitle;
    const empresaCards = document.querySelectorAll('.projects-box .project-card');
    if (empresaCards.length >= 3) {
      empresaCards[0].querySelector('h3').textContent = t.empresaNosotros;
      empresaCards[0].querySelector('p').textContent = t.empresaNosotrosDesc;
      empresaCards[1].querySelector('h3').textContent = t.empresaEco;
      empresaCards[1].querySelector('p').textContent = t.empresaEcoDesc;
      empresaCards[2].querySelector('h3').textContent = t.empresaProd;
      empresaCards[2].querySelector('p').textContent = t.empresaProdDesc;
    }
    // Servicios
    const serviciosTitle = document.querySelector('.services .heading');
    if (serviciosTitle) serviciosTitle.textContent = t.serviciosTitle;
    const serviceBoxes = document.querySelectorAll('.service-box');
    if (serviceBoxes.length >= 6) {
      serviceBoxes[0].querySelector('h4').textContent = t.editorial;
      serviceBoxes[0].querySelector('p').textContent = t.editorialDesc;
      serviceBoxes[1].querySelector('h4').textContent = t.publicidad;
      serviceBoxes[1].querySelector('p').textContent = t.publicidadDesc;
      serviceBoxes[2].querySelector('h4').textContent = t.corporativo;
      serviceBoxes[2].querySelector('p').textContent = t.corporativoDesc;
      serviceBoxes[3].querySelector('h4').textContent = t.empaques;
      serviceBoxes[3].querySelector('p').textContent = t.empaquesDesc;
      serviceBoxes[4].querySelector('h4').textContent = t.publicidadExt;
      serviceBoxes[4].querySelector('p').textContent = t.publicidadExtDesc;
      serviceBoxes[5].querySelector('h4').textContent = t.pop;
      serviceBoxes[5].querySelector('p').textContent = t.popDesc;
    }
    // Otros servicios
    const otrosTitle = document.querySelector('.other-services .heading');
    if (otrosTitle) otrosTitle.textContent = t.otrosTitle;
    const otrosCards = document.querySelectorAll('.other-service-card');
    if (otrosCards.length >= 2) {
      otrosCards[0].querySelector('h3').textContent = t.nfc;
      otrosCards[0].querySelector('p').textContent = t.nfcDesc;
      otrosCards[0].querySelector('.btn').textContent = t.verMas;
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
    // Formulario
    const formNombre = document.querySelector('input[name="name"]');
    if (formNombre) formNombre.placeholder = t.formNombre;
    const formEmail = document.querySelector('input[name="email"]');
    if (formEmail) formEmail.placeholder = t.formEmail;
    const formTelefono = document.querySelector('input[name="phone"]');
    if (formTelefono) formTelefono.placeholder = t.formTelefono;
    const formMensaje = document.querySelector('textarea[name="message"]');
    if (formMensaje) formMensaje.placeholder = t.formMensaje;
    const formEnviar = document.querySelector('input[type="submit"].btn');
    if (formEnviar) formEnviar.value = t.formEnviar;
    // Footer
    const copyright = document.querySelector('.footer .copyright');
    if (copyright) copyright.innerHTML = t.copyright;
    // Botón idioma
    if (langBtn) langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    currentLang = lang;
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      setLang(nextLang);
      localStorage.setItem('lang', nextLang);
    });
    const storedLang = localStorage.getItem('lang');
    setLang(storedLang === 'en' ? 'en' : 'es');
  }
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const contacto = document.querySelector('#btn-contacto');
  const sobreMi = document.querySelector('#btn-sobreMi');
  const downloadLink = document.getElementById('downloadContact');
  const contactForm = document.getElementById('contact-form');
  // Pega aquí tu URL de la Web App de Google Apps Script cuando la despliegues
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw34uUnVRknwP2eil759X1mfyeeGbEVNcQv4X-JVMfWKk_NyLI9EF6D__JOB6lCnSrk/exec';

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
  }

  if (contacto) {
    contacto.addEventListener('click', (event) => {
      event.preventDefault();
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (sobreMi) {
    sobreMi.addEventListener('click', () => {
      const aboutSection = document.getElementById('sobreMi');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (downloadLink) {
    const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Sebastian Sanchez
N:Sebastian;Sanchez;;;
ORG:Sistemas litográficos
TEL;TYPE=work:+57 311 6111687
EMAIL:contacto@sistemaslitograficos.com
URL:https://www.sistemaslitograficos.com.co
URL:https://sebastian-sanchez.netlify.app/
X-SOCIALPROFILE;type=Instagram:https://www.instagram.com/sistemaslitograficossas/
X-SOCIALPROFILE;type=Instagram:https://www.instagram.com/cuatrotorres/
END:VCARD
    `.trim();

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const phone = (formData.get('phone') || '').toString().trim();
      const messageBody = (formData.get('message') || '').toString().trim();

      const assembledMessage = `Hola, mi nombre es ${name || 'N/A'}, mis datos son ${email || 'N/A'} y ${phone || 'N/A'}\n${messageBody}`;
      const encodedMessage = encodeURIComponent(assembledMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=573116111687&text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener');

      // Envío en segundo plano a Google Sheets (Apps Script)
      if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.startsWith('http')) {
        const payload = new URLSearchParams({
          name,
          email,
          phone,
          message: messageBody,
          origin: location.origin,
          page: location.href,
          userAgent: navigator.userAgent
        });
        // no-cors para evitar errores de CORS en el navegador (respuesta opaca)
        fetch(APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: payload }).catch((err) => {
          console.warn('No se pudo enviar a Apps Script:', err);
        });
      }

      if (downloadLink) {
        downloadLink.click();
      }

      contactForm.reset();
    });
  }

  const track = document.querySelector('.carousel-track');
  const items = track ? Array.from(track.querySelectorAll('.carousel-item')) : [];

  if (track && items.length) {
    let index = 0;
    let visible = window.innerWidth < 700 ? 2 : 3;
    const originalLength = items.length;
    const totalToClone = Math.min(originalLength, visible + 1);

    for (let i = 0; i < totalToClone; i++) {
      track.appendChild(items[i].cloneNode(true));
    }

    const updateCarousel = (animate = true) => {
      const itemWidth = items[0].offsetWidth + 32; // 32px gap aproximado
      track.style.transition = animate ? 'transform 0.5s ease' : 'none';
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    };

    const startAutoSlide = () => {
      return setInterval(() => {
        index++;
        updateCarousel();
        if (index === originalLength) {
          setTimeout(() => {
            index = 0;
            updateCarousel(false);
          }, 500);
        }
      }, 2500);
    };

    let autoSlide = startAutoSlide();

    track.addEventListener('mouseenter', () => {
      clearInterval(autoSlide);
    });

    track.addEventListener('mouseleave', () => {
      clearInterval(autoSlide);
      autoSlide = startAutoSlide();
    });

    window.addEventListener('resize', () => {
      visible = window.innerWidth < 700 ? 2 : 3;
      updateCarousel(false);
    });

    updateCarousel(false);
  }
});