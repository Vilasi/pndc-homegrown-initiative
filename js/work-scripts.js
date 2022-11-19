const openJobs = document.querySelector('#open-jobs');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

let iterator = 0;

// const intervalTest = setInterval(() => {
//   //   printNums(iterator);
//   openJobs.textContent = iterator;
//   two.textContent = iterator;
//   three.textContent = iterator;

//   iterator++;
//   if (iterator === 7000) {
//     clearInterval(intervalTest);
//   }
// }, 0.01);

class Iterator {
  constructor(num, id, time) {
    this.num = num;
    // this.title = title;
    this.el = document.querySelector(id);
    this.time = time;
    // this.time = time;
    this.iterator = 0;
    this.interval = setInterval(() => {
      console.log('I am the interval');
      // console.log(this.iterator);
      // this.iterator++;
      // console.log(this.num);
      // console.log(this.iterator);
      if (this.iterator >= this.num) {
        this.clear();
        // this.el.textContent = `${this.iterator} ${this.title}`;
        this.writeToDom();
      } else if (this.num - this.iterator >= 1000) {
        this.iterator += 500;
        this.writeToDom();
        // this.el.textContent = `${this.iterator} ${this.title}`;
      } else if (this.num - this.iterator > 100) {
        this.iterator += 100;
        this.writeToDom();
        // this.el.textContent = `${this.iterator} ${this.title}`;
      } else {
        this.iterator++;
        this.writeToDom();
        // this.el.textContent = `${this.iterator} ${this.title}`;
      }
    }, this.time);
  }

  clear = () => {
    console.log('Interval clear was successful');
    clearInterval(this.interval);
  };

  writeToDom = () => {
    this.el.textContent = `${this.iterator}`;
  };
}
// const salary = new Iterator(45000, '#one', 0.01);
// const schools = new Iterator(9, '#two', 250);
// const jobOpenings = new Iterator(7829, '#three', 35);
// test.test();

let target = document.querySelector('#countingValues');
console.log(target);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const salary = new Iterator(45000, '#one', 0.01);
      const schools = new Iterator(9, '#two', 250);
      const jobOpenings = new Iterator(7829, '#three', 35);
      // setTimeout(() => {
      // }, 1000);
    }
  });
  console.log(entry);
});

observer.observe(target);
// for (const el of target) {
// }
// observer.observe(target);
