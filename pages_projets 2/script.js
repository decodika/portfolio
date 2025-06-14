let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='  + id + ']').classList.add('active');
        });
      };
   });
   let header = document.querySelector('header');
     
     header.classList.toggle('sticky' , window.scrollY > 100);


     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};

ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay:200
 });

 ScrollReveal().reveal('.Accueil-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.Services-container,.portfolio-box, .contact form',{ origin: 'bottom' });
 ScrollReveal().reveal('.Accueil-content h1,.apropos-image',{ origin: 'left' });
 ScrollReveal().reveal('.Accueil-content P,.apropos-content',{ origin: 'right' });

 const typed = new Typed('.multi-text', {
    strings: ['UI DESIGNER', 'GRAPHISTE'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
