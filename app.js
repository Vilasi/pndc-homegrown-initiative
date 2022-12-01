const c = console.log;
const cd = console.dir;
const BUTTONS = document.querySelectorAll('button');
const emailForm = document.querySelector('#enter-email-for-updates');
const formInput = document.querySelector('#email-input');

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
const navBarCollapseBar = document.querySelector('#navbarSupportedContent');
// Hides the
// window.addEventListener('load', (e) => {
//   console.log(e);
//   console.log(window.scrollY);
//   if (window.scrollY === 0 && window.screen.availWidth < 992) {
//     nav.style.top = '-100px';
//     // nav.style.opacity = 0;
//   } else {
//     nav.style.top = '0';
//     // nav.style.opacity = 1;
//   }
// });
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-100px';
    console.log(nav);
    mobileNavButton.setAttribute('aria-expanded', 'false');
    navBarCollapseBar.classList.remove('show');
  }
  prevScrollpos = currentScrollPos;
};

/**
 *
 * SAVING THE BELOW FOR POTENTIAL USE LATER
 * THIS CODE ADDS EVENT LISTENERS TO ANY BUTTONS ON THE PAGE
 * THEN, DEPENDING ON THE ID, FIRES A WINDOW.LOCATION.HREF TO MAKE THE BUTTON ACT AS A <a> TAG
 */
// console.log(BUTTONS);
// BUTTONS.forEach((btn) => {
//   btn.addEventListener('click', buttonDirectory);
// });

// // List of pages and other links to attach to buttons
// const pages = {
//   work: './pages/work.html',
//   // work: 'https://www.indeed.com/jobs?q=&l=Mercer+County+PA',
// };

// // Changes window.location.href on button click to the page specified in the pages object
// function buttonDirectory(e) {
//   console.log('Clicked!!');
//   console.log(e.target.id);

//   switch (e.target.id) {
//     case 'work-button':
//       window.location.href = pages.work;

//       break;
//     default:
//       break;
//   }
// }

console.log(window.innerWidth);
if (window.innerWidth < 624) {
  const tourBtn = document.querySelector('#tour-btn');
  console.log(tourBtn);
  tourBtn.href = '';
  tourBtn.addEventListener('click', (e) => {
    window.scrollBy({
      top: 650,
      left: 0,
      behavior: 'smooth',
    });
    // window.preventDefault();
    e.preventDefault();
  });
}

window.addEventListener('load', (e) => {
  formInput.value = '';
});

emailForm.addEventListener('submit', (e) => {
  // const formInput = document.querySelector('#email-input');
  console.log(e);
  e.preventDefault();
  formInput.value = 'Thank You!';
  // formInput.placeHolder = 'Im a pippy ';
  setTimeout(() => {
    formInput.value = '';
  }, 2500);
});
