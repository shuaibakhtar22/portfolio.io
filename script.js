const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}





const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer','Web Designer','UI/UX Designer'],
    typeSpeed: 80,
    backspeed:80,
    backDelay:1200,
    loop:true,
  });
