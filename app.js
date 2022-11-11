const c = console.log;
const cd = console.dir;

// const workSection = document.querySelector('.diagonal-box-1');

// c(scrollInElems);

const scrollInElems = document.querySelectorAll('.scrollIn');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      c(entry.target);
      entry.target.classList.add('show');
    } else {
      // entry.target.classList.remove('show');
    }
  });
});

scrollInElems.forEach((el) => observer.observe(el));

//get nav
const nav = document.querySelector('.navbar');
const goMercerCounty = document.querySelector('#goMercerCounty');
const mobileNavButton = document.querySelector('#mobile-nav-button');
// nav.style.background = 'rgba(0,0,0,0.5)';
// nav.classList.toggle('transparent-background');
// nav.classList.remove('show');
// goMercerCounty.classList.add('solid-background');
// mobileNavButton.classList.add('solid-background');

// console.log(screen.width);

//hide nav until the user scrolls down
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
});

//In portait orientation, the nav bar is transparent until the user scrolls down
// function isPortrait() {
//   return window.innerHeight > window.innerWidth;
// }
// if (isPortrait()) {
//   nav.classList.toggle('transparent-background');
// } else {
//   nav.classList.remove('transparent-background');
// }
