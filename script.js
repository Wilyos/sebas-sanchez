document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const contacto = document.querySelector('#btn-contacto');
  const sobreMi = document.querySelector('#btn-sobreMi');
  const downloadLink = document.getElementById('downloadContact');
  const contactForm = document.getElementById('contact-form');

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