const BUTTONS = document.querySelectorAll('button');
const emailForm = document.querySelector('#enter-email-for-updates');
const formInput = document.querySelector('#email-input');
const slideButtons = document.querySelectorAll('.btn-background-slide');
const sections = document.querySelectorAll('section');

console.log(slideButtons);

//* The ScrollIn Animation Effect script
const scrollInElems = document.querySelectorAll('.scrollIn');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
    }
  });
});

scrollInElems.forEach((el) => observer.observe(el));

//* get nav
const nav = document.querySelector('.navbar');
const goMercerCounty = document.querySelector('#goMercerCounty');
const mobileNavButton = document.querySelector('#mobile-nav-button');
const navBarCollapseBar = document.querySelector('#navbarSupportedContent');

let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-100px';
    mobileNavButton.setAttribute('aria-expanded', 'false');
    navBarCollapseBar.classList.remove('show');
  }
  prevScrollpos = currentScrollPos;
};

console.log(window.innerWidth);
if (window.innerWidth < 624) {
  const tourBtn = document.querySelector('#tour-btn');
  tourBtn.href = '';
  tourBtn.addEventListener('click', (e) => {
    window.scrollBy({
      top: 650,
      left: 0,
      behavior: 'smooth',
    });

    e.preventDefault();
  });
}

window.addEventListener('load', (e) => {
  formInput.value = '';
});

emailForm.addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  formInput.value = 'Thank You!';
  // formInput.placeHolder = 'Im a pippy '; :) - Hello future devs looking at the code <3
  setTimeout(() => {
    formInput.value = '';
  }, 2500);
});

//* This corrects the buttons and other content inside <section> tags getting cutoff on short screen sizes.
if (window.innerHeight < '650') {
  for (let section of sections) {
    if (section.id !== 'windy-road') {
      section.classList.add('forced-height');
    }
  }
} else {
  for (let section of sections) {
    if (section.id !== 'windy-road') {
      section.classList.remove('forced-height');
    }
  }
}

window.addEventListener('resize', () => {
  if (window.innerHeight < '650') {
    for (let section of sections) {
      if (section.id !== 'windy-road') {
        section.classList.add('forced-height');
      }
    }
  } else {
    for (let section of sections) {
      if (section.id !== 'windy-road') {
        section.classList.remove('forced-height');
      }
    }
  }
});
