// class TxtType {
//   constructor(el, scrollingText, period) {
//     this.el = el;
//     this.scrollingText = scrollingText;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
//     this.counter = 0;
//   }
//   tick() {
//     let i = this.loopNum % this.scrollingText.length;
//     let fullTxt = this.scrollingText[i];

//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

//     let delta = 75;

//     if (this.isDeleting) {
//       delta /= 2;
//     }

//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }

//     setTimeout(() => {
//       this.tick();
//     }, delta);
//   }
// }

// window.onload = function () {
//   const domElements = document.getElementsByClassName('typewrite');
//   try {
//     console.log(
//       `"domElements[0].getAttribute('data-type'); : "${domElements[0].getAttribute(
//         'data-type'
//       )}`
//     );
//     console.log(
//       `"domElements[0].getAttribute('data-period'); :"${domElements[0].getAttribute(
//         'data-period'
//       )}`
//     );
//   } catch (error) {
//     console.warn('Error caught');
//   }
//   for (let i = 0; i < domElements.length; i++) {
//     let scrollingText = domElements[i].getAttribute('data-type');
//     let period = domElements[i].getAttribute('data-period');
//     if (scrollingText) {
//       //TxtType(<p class='typewrite'...</p>, JSON.parseArray of things to say'), 2000)
//       new TxtType(domElements[i], JSON.parse(scrollingText), period);
//     }
//   }
//   const css = document.createElement('style');
//   css.type = 'text/css';
//   css.innerHTML =
//     '.typewrite > .wrap { border-right: 0.08em solid #fff; padding-left: 2rem;}';

//   document.body.appendChild(css);
// };

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, {
//     // specify options here
//   });
// });
