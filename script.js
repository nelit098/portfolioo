

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
}

//01:17:21//
//scroll sections
let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           // active navbar links
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
        //    active sections for animation on scroll
        sec.classList.add('show-animate');

        }
        else{
            sec.classList.remove('show-animate');  
        }
    });
   //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}


// scroll reveal //
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 400
    });

    ScrollReveal().reveal('.about-content h3, .about-img, .content h3, .heading, .fa-calendar-days', { origin: 'top' });
    ScrollReveal().reveal('.education-column, .skills-content, .courses', { origin: 'bottom' });
    ScrollReveal().reveal('.title, .btns, .content p, .skills h3, .footer-text p', { origin: 'left' });
    ScrollReveal().reveal('.about-content p, .year, .bar, .footer-iconTop', { origin: 'right' });

    var swiper = new Swiper(".course-slider", {
        spaceBetween: 20,
        grabCursor:true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
        breakpoints: {
            540: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
      });
