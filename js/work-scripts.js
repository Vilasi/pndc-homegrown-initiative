// const openJobs = document.querySelector('#open-jobs');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');
const BODY = document.querySelector('body');
const VALUES = document.querySelectorAll('.countingValues h2');
// console.log(VALUES);
// VALUES.classList.add('text-start');

let iterator = 0;

class Iterator {
  constructor(num, id, time) {
    this.num = num;
    this.el = document.querySelector(id);
    this.time = time;
    this.iterator = 0;
    this.interval = setInterval(() => {
      if (this.iterator >= this.num) {
        this.clear();
        this.writeToDom(this.iterator);
      } else if (this.num - this.iterator >= 1000) {
        this.iterator += 500;
        this.writeToDom(this.iterator);
      } else if (this.num - this.iterator > 100) {
        this.iterator += 100;
        this.writeToDom(this.iterator);
      } else {
        this.iterator++;
        this.writeToDom(this.iterator);
      }
    }, this.time);
  }

  clear = () => {
    clearInterval(this.interval);
  };

  writeToDom = (num) => {
    let stringFromNum = num.toString();
    let reversedArray = Array.from(stringFromNum).reverse();
    let arrayFromString = [];
    let iterator = 0;
    for (let i = 0; i < reversedArray.length; i++) {
      if (iterator === 2) {
        arrayFromString.push(reversedArray[i]);
        arrayFromString.push(',');
        iterator = 0;
      } else {
        arrayFromString.push(reversedArray[i]);
        iterator++;
      }
    }
    let stringToPrint = arrayFromString.reverse().join('');
    this.el.textContent = `${stringToPrint}`;
  };
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

// Make new instance of Iterator class on Intersection - making neat counting/iterating DOM effect
if (window.innerWidth > 992) {
  let target = document.querySelector('.countingValues');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Add classList to increase font-size/width
      // console.log(entry);
      const childrenCollection = entry.target.children;
      for (el of childrenCollection) {
        el.children[0].classList.add('numericals');
      }
      if (entry.isIntersecting) {
        setTimeout(() => {
          // constructor(num, id, time); CONSTRUCTOR CALL FOR REFERENCE - LINE 7
          const salary = new Iterator(
            pickNumberRange(57000, 58000, 58500),
            '#one',
            0.01
          );
          const schools = new Iterator(6, '#two', 250);
          const jobOpenings = new Iterator(
            pickNumberRange(2000, 3000, 2395),
            '#three',
            25
          );
        }, 250);
        // observer.unobserve(entry.target);
        observer.disconnect();
      } else {
        const salary = new Iterator('', '#one', 0);
        const schools = new Iterator('', '#two', 0);
        const jobOpenings = new Iterator('', '#three', 0);
      }
    });
  }, options);
  observer.observe(target);
} else {
  document.querySelector('#firstH2').innerHTML =
    '<span class="text-start" id="one" style="font-size: 2.5em; display: block;">$52,569</span> Average Salary';
  // document.querySelector('#one').textContent = '52,569';
  document.querySelector('#two').textContent = '9';
  document.querySelector('#three').textContent = '7,895';
  for (let h2 of VALUES) {
    h2.classList.add('text-start');
    h2.classList.remove('text-center');
    // console.log(h2.children[0].style);
    h2.children[0].style.fontSize = '2.5em';
    h2.children[0].style.display = 'block';
    h2.children[0].classList.add('text-start');
    h2.children[0].classList.add('numericals-mobile');
    h2.children[0].classList.remove('text-end');
    h2.children[0].classList.remove('numericals');
  }
}

// function that generates a number between its first parameter and its second parameter
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Check if another day has passed
function checkDay() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let millisecond = today.getMilliseconds();

  return day + month + year;
}

function pickNumberRange(min, max, hardcodedValue) {
  if (2052 === checkDay()) {
    console.log(true);
    return hardcodedValue;
  } else {
    // console.log(false);
    return randomNum(min, max);
  }
}

// Close mobile nav dropdown on scroll
const mobileNavButton = document.querySelector('#mobile-nav-button');
const navBarCollapseBar = document.querySelector('#navbarSupportedContent');
window.addEventListener('scroll', (e) => {
  // console.log(mobileNavButton.getAttribute('aria-expanded'));
  mobileNavButton.setAttribute('aria-expanded', 'false');
  navBarCollapseBar.classList.remove('show');
});

// Link to College or Job sites
const imageLinks = document.querySelector('#picture-links-section');
const links = {
  pennstate: 'https://shenango.psu.edu/',
  groveCity: 'https://www.gcc.edu/',
  thiel: 'https://www.thiel.edu/',
  lti: 'https://www.laurel.edu/lti-hermitage',
  westminster: 'https://www.westminster.edu/',
  mccc: 'https://www.mercerccc.org/',
  bccc: 'https://www.bc3.edu/',
  indeed: 'https://www.indeed.com/jobs?q=&l=Mercer+County+PA',
};

function setHref(id) {
  switch (id) {
    case 'pennstate':
      window.location.href = links.pennstate;
      break;
    case 'grove-city':
      window.location.href = links.groveCity;
      break;
    case 'thiel':
      window.location.href = links.thiel;
      break;
    case 'LTI':
      window.location.href = links.lti;
      break;
    case 'westminster':
      window.location.href = links.westminster;
      break;
    case 'mccc':
      window.location.href = links.mccc;
      break;
    case 'bc3':
      window.location.href = links.bccc;
      break;
    case 'jobs-image':
      window.location.href = links.indeed;
      break;

    default:
      break;
  }
}

// console.log(imageLinks);
imageLinks.addEventListener('click', (e) => {
  console.log('Click!!!');
  // console.log(e.target.id);
  setHref(e.target.id);
});

const checkBoxes = document.querySelectorAll('input[type="radio"]');
const collegeCheckRadioButtons = document.querySelectorAll('.college-check');
const disabledInputs = document.querySelectorAll('.disabled-inputs');
const disabledInputsLabels = document.querySelectorAll(
  '.disabled-input-labels'
);

for (let input of disabledInputs) {
  input.setAttribute('disabled', '');
}
for (let label of disabledInputsLabels) {
  label.classList.add('text-secondary');
}

collegeCheckRadioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener('input', (e) => {
    // console.log(e);
    e.preventDefault();
    if (e.target.value === 'I have attended college/trade school') {
      for (let input of disabledInputs) {
        input.removeAttribute('disabled');
        input.setAttribute('required', '');
      }
      for (let label of disabledInputsLabels) {
        console.log(label);
        label.classList.remove('text-secondary');
        const asterisk = document.createElement('span');
        asterisk.append(' *');
        asterisk.classList.add('asterisk', 'text-danger');
        if (!label.classList.contains('no-star')) {
          label.append(asterisk);
        }
      }
    } else {
      for (let input of disabledInputs) {
        input.setAttribute('disabled', '');
        input.removeAttribute('required');
      }
      for (let label of disabledInputsLabels) {
        label.classList.add('text-secondary');
        const asterisk = document.querySelectorAll('.asterisk');
        for (let span of asterisk) {
          span.remove();
        }
      }
    }
  });
});

// const submitButton = document.querySelector('#form-submit-button');
//**************  sdfsdf@dfdf.com  *************

const FORM = document.querySelector('form');

// FORM.addEventListener('submit', (e) => {
//   console.log(e);
//   e.preventDefault();
//   e.target.reset();
// });
