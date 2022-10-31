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
