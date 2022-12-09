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

console.log(unorderedList);

// const cardName = document.querySelectorAll('.card-name');
// console.log(cardName);

const unorderedList = document.querySelector('.results__results-cards');
let finalString = '';
for (let i = 0; i < unorderedList.children.length; i++) {
  finalString += `<div class='card m-2' style='width: 18rem'>
  <div class='card-body'>
    <h5 class='card-title'>${
      unorderedList.children[i].querySelector('.card-name a').textContent
    }</h5>
    <p class='card-text'>
      ${
        unorderedList.children[i].querySelector(
          '.facility-card__patient-satisfaction'
        ).textContent
      }
    </p>
  </div>
  <ul class='list-group list-group-flush'>
    <li class='list-group-item'>${
      unorderedList.children[i].querySelector('.location-info-address__address')
        .textContent
    }</li>
    <li class='list-group-item'>${
      unorderedList.children[i].querySelector(
        '.location-info-address__city-state'
      ).textContent
    }</li>
  </ul>
  <div class='card-body d-flex align-items-center'>
    <a
      href='${unorderedList.children[i].querySelector('.card-name a').href}'
      class='card-link'
      >View Information</a
    >
  </div>
</div>`;
}
