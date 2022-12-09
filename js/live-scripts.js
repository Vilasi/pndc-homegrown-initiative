// function printSelect(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(
//       `<option value="${arr[i].toLowerCase()}">${arr[i]}</option>`
//     );
//   }
// }

const FORM = document.querySelector('form');

FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInputs = makeRequest(e.target.children);
  //   Example Output: [ "jezebel ", "ca", "clark-pa", "45000" ]
  window.location.href = `https://www.bestplaces.net/cost-of-living/${userInputs[0]}-${userInputs[1]}/${userInputs[2]}/${userInputs[3]}`;
});

function makeRequest(children) {
  const valueArray = [];
  for (let child of children) {
    for (let el of child.children) {
      if (el.classList.contains('userInput')) {
        valueArray.push(el.value);
      }
    }
  }

  valueArray[0] = lowerCase(valueArray[0]);
  valueArray[0] = replaceWhiteSpace(valueArray[0]);

  return valueArray;
}

function lowerCase(str) {
  return str.toLowerCase();
}

function replaceWhiteSpace(str) {
  return str.replace(/ /g, '-');
}

// The Final Card Creation

// `<div class="card m-2" style="width: 18rem">
//   <div class="card-body">
//     <h5 class="card-title">Grove City Medical Center</h5>
//     <p class="card-text">
//       66<span>%</span> of patients would definitely recommend.
//     </p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">631 N Broad Street Ext</li>
//     <li class="list-group-item">Grove City, PA 16127</li>
//   </ul>
//   <div class="card-body d-flex align-items-center">
//     <a
//       href="https://www.healthgrades.com/hospital-directory/pennsylvania-pa/grove-city-medical-center-hgsta96ae6a6390266"
//       class="card-link"
//       >View Information</a
//     >
//   </div>
// </div>`

// console.log(unorderedList);

// const cardName = document.querySelectorAll('.card-name');
// console.log(cardName);

// Saving this for potential future use.
// Grabs info on local area hospitals when ran in the console.
// const unorderedList = document.querySelector('.results__results-cards');
// let finalString = '';
// for (let i = 0; i < unorderedList.children.length; i++) {
//   finalString += `<div class='card m-2' style='width: 18rem'>
//   <div class='card-body'>
//     <h5 class='card-title'>${
//       unorderedList.children[i].querySelector('.card-name a').textContent
//     }</h5>
//     <p class='card-text'>
//       ${
//         unorderedList.children[i].querySelector(
//           '.facility-card__patient-satisfaction'
//         ).textContent
//       }
//     </p>
//   </div>
//   <ul class='list-group list-group-flush'>
//     <li class='list-group-item'>${
//       unorderedList.children[i].querySelector('.location-info-address__address')
//         .textContent
//     }</li>
//     <li class='list-group-item'>${
//       unorderedList.children[i].querySelector(
//         '.location-info-address__city-state'
//       ).textContent
//     }</li>
//   </ul>
//   <div class='card-body d-flex align-items-center'>
//     <a
//       href='${unorderedList.children[i].querySelector('.card-name a').href}'
//       class='card-link'
//       >View Information</a
//     >
//   </div>
// </div>`;
// }

const schoolsCards = [
  {
    name: 'Greenville Area School District',
    address1: '9 Donation Rd',
    address2: 'Greenville, PA',
    href: 'http://www.greenville.k12.pa.us/',
  },
  {
    name: 'Hermitage School District',
    address1: '411 N Hermitage Road',
    address2: 'Hermitage, PA',
    href: 'https://hermitagesd.net/',
  },
  {
    name: 'Reynolds School District',
    address1: '531 Reynolds Rd',
    address2: 'Greenville, PA',
    href: 'https://www.reynolds.k12.pa.us/',
  },
  {
    name: 'Lakeview School District',
    address1: '2482 Mercer St',
    address2: 'Stoneboro, PA',
    href: 'https://www.lakeview.k12.pa.us/',
  },
  {
    name: 'Sharpsville Area School District',
    address1: '1 Blue Devil Way',
    address2: 'Sharpsville, PA 16150',
    href: 'https://www.sharpsville.k12.pa.us/',
  },
  {
    name: 'Farrell Area School District',
    address1: '1600 Roemer Blvd',
    address2: 'Farrell, PA 16121',
    href: 'https://www.farrellareaschools.com/',
  },
  {
    name: 'Grove City Area School District',
    address1: '511 Highland Ave',
    address2: 'Grove City',
    href: 'https://www.grovecity.k12.pa.us/domain/50',
  },
  {
    name: 'Jamestown Area School District',
    address1: '204 Shenango Street',
    address2: 'Jamestown, Pa 16134',
    href: 'https://www.jamestown.k12.pa.us/',
  },
  {
    name: 'Mercer Area School District',
    address1: 'Mercer',
    address2: 'PA',
    href: 'https://www.mercer.k12.pa.us/',
  },
  {
    name: 'Sharon City School District',
    address1: '215 Forker Blvd',
    address2: 'Sharon',
    href: 'https://www.sharon.k12.pa.us/',
  },
  {
    name: 'West Middlesex Area School ',
    address1: '3591 Sharon Rd',
    address2: 'West Middlesex, PA 16159',
    href: 'https://wmasd.k12.pa.us/',
  },
];

let schoolsHTML = '';
for (let i = 0; i < schoolsCards.length; i++) {
  schoolsHTML += `<div class='card m-2' style='width: 18rem'>
  <div class='card-body'>
    <h5 class='card-title'>${schoolsCards[i].name}</h5>
    
  </div>
  <ul class='list-group list-group-flush'>
    <li class='list-group-item'>${schoolsCards[i].address1}</li>
    <li class='list-group-item'>
      ${schoolsCards[i].address2}
    </li>
  </ul>
  <div class='card-body d-flex align-items-center'>
    <a href='${schoolsCards[i].href}' class='card-link'
      >View School's Website</a
    >
  </div>
</div>`;
}
