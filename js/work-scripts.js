const openJobs = document.querySelector('#open-jobs');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
console.log(openJobs.textContent);

// for (let i = 0; i < 7001; i++) {

//   openJobs.textContent = i;
// }

let iterator = 0;
// while (iterator < 7001) {
//   //   setInterval(() => {
//   //     openJobs.textContent = iterator;
//   //     iterator++;
//   //     console.log(iterator);
//   //   }, 100);
// }
// function printNums(iterator) {
//   openJobs.textContent = iterator;
//   iterator++;
// }

// const intervalTest = setInterval(() => {
//   //   printNums(iterator);
//   openJobs.textContent = iterator;
//   two.textContent = iterator;
//   three.textContent = iterator;
//   iterator++;
//   if (iterator === 1000) {
//     clearInterval(intervalTest);
//   }
// }, 0.001);

for (let i = 0; i < 7001; i++) {
  openJobs.textContent += i;
  two.textContent += i;
  three.textContent += i;
}
