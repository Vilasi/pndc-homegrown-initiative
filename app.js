const c = console.log;
const cd = console.dir;
const BUTTONS = document.querySelectorAll('button');

// const workSection = document.querySelector('.diagonal-box-1');

// c(scrollInElems);

// The ScrollIn Animation Effect script
const scrollInElems = document.querySelectorAll('.scrollIn');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      // c(entry.target);
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

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
// });

console.log(BUTTONS);
BUTTONS.forEach((btn) => {
  btn.addEventListener('click', buttonDirectory);
});

// List of pages and other links to attach to buttons
const pages = {
  work: './pages/work.html',
};

// Changes window.location.href on button click to the page specified in the pages object
function buttonDirectory(e) {
  console.log('Clicked!!');
  console.log(e.target.id);

  switch (e.target.id) {
    case 'work-button':
      window.location.href = pages.work;
      break;
    default:
      break;
  }
}
