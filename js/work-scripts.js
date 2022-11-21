// const openJobs = document.querySelector('#open-jobs');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');

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

// Make new instance of Iterator class on Intersection - making neat counting/iterating DOM effect
let target = document.querySelector('#countingValues');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Add classList to increase font-size/width
    const childrenCollection = entry.target.children;
    for (el of childrenCollection) {
      console.log(el.children[0].classList);
      el.children[0].classList.add('numericals');
    }
    if (entry.isIntersecting) {
      setTimeout(() => {
        const salary = new Iterator(
          pickNumberRange(56000, 59000, 58500),
          '#one',
          0.01
        );
        const schools = new Iterator(9, '#two', 250);
        const jobOpenings = new Iterator(
          pickNumberRange(7600, 8050, 7829),
          '#three',
          25
        );
      }, 250);
    } else {
      const salary = new Iterator('', '#one', 0);
      const schools = new Iterator('', '#two', 0);
      const jobOpenings = new Iterator('', '#three', 0);
    }
  });
});
observer.observe(target);

// generate a random number between 7500 and 8500

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
  if (2052 !== checkDay()) {
    console.log(true);
    return hardcodedValue;
  } else {
    return randomNum(min, max);
  }
}
