let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

// Carrusel de Clientes
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');
let index = 0;
let visible = window.innerWidth < 700 ? 2 : 3;

const totalToClone = Math.min(items.length, visible + 1);
for (let i = 0; i < totalToClone; i++) {
  const clone = items[i].cloneNode(true);
  track.appendChild(clone);
}


function updateCarousel(animate = true) {
  const itemWidth = items[0].offsetWidth + 32; // 32px gap
  if (animate) {
    track.style.transition = 'transform 0.5s ease';
  } else {
    track.style.transition = 'none';
  }
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

/* btnLeft.addEventListener('click', () => {
  if (index > 0) index--;
  updateCarousel();
});
btnRight.addEventListener('click', () => {
  if (index < items.length - visible) index++;
  updateCarousel();
});  */

let autoSlide = setInterval(() => {
  index++;
  updateCarousel();
  // Si llegamos al final de los clones, reseteamos sin animación
  if (index === items.length) {
    setTimeout(() => {
      index = 0;
      updateCarousel(false);
    }, 500); // Espera a que termine la animación
  }
}, 2500);

window.addEventListener('resize', () => {
  visible = window.innerWidth < 700 ? 2 : 3;
  updateCarousel();
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    if (index < items.length - visible) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  }, 2500);
});

updateCarousel();


contacto.addEventListener('click', (e) => {
  e.preventDefault();
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});


sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior:"smooth"
    });
}


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

  const downloadLink = document.getElementById('downloadContact');
  if (downloadLink) {
    downloadLink.href = url;
  }

const contactForm = document.getElementById('contact-form');
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