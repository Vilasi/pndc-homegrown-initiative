const c = console.log;
const cd = console.dir;

const workSection = document.querySelector('.diagonal-box-1');

const scrollInElems = document.querySelectorAll('.scrollIn');
// c(scrollInElems);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      c(entry.target);
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

scrollInElems.forEach((el) => observer.observe(el));

// const tourBtn = document.querySelector('#tour-btn');
// tourBtn.addEventListener('click', (e) => {
//   const bounds = workSection.getBoundingClientRect();
//   //   scrollIntoView(true, { behavior: 'smooth', block: 'start' });
//   c(bounds.top);
//   window.scrollTo(0, bounds.top);
//   //   window.scrollY(bounds.top);
// });

// c(workSection.getBoundingClientRect());
