let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


contacto.onclick = () => {
    document.getElementById("contacto").scrollIntoView({
        behavior:"smooth"
    });
}


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
  downloadLink.href = url;