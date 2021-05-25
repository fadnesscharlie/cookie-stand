'use strict';

const seattleTable = document.querySelector('table');
const headTableId = document.getElementById('headTable');
const footTableId = document.getElementById('footTable');
const myForm = document.getElementById('cookie-form');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Write more sudo code!!!!

let shopArray = [];
function Shop (shopName, min, max, avg) {
  shopArray.push(this);
  this.shopName = shopName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.perHourArray = [];
  this.cookies = 0;
  this.finalTotalText = 0;
  this.render();
  this.finalTotal = function() {
    for(let i = 0; i < shopArray.length; i++){
      //Adding all the totals from all the stores into one final tally
      this.finalTotalText += shopArray[i].dailyTotal;
    }
  };
}

Shop.prototype.getRandomNumberCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Shop.prototype.calcCookiesPerHourArray = function () {
  // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
  for (let i = 0; i < hours.length; i++) {
    this.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
    this.perHourArray.push(this.cookies);
    this.dailyTotal += this.cookies;
  }
};

function headerRender(){
  let td = document.createElement('td');
  td.textContent = 'Locations';
  headTableId.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    headTableId.appendChild(td);
  }
  let td1 = document.createElement('td');
  td1.innerHTML = 'Daily<br>Location<br>Total';
  headTableId.appendChild(td1);
}

Shop.prototype.render = function () {
  this.calcCookiesPerHourArray(); // running function
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.shopName;
  tr.appendChild(td); // appending shop names before rows start
  for (let i = 0; i < this.perHourArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.perHourArray[i];
    tr.appendChild(td); // appending each value into the rows
    this.dailyTotal += this.perHourArray[i]; // Calculating daily totals
  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  seattleTable.appendChild(tr);
};

function footerRender(){
  // // Adding string to first in footer row
  let td1 = document.createElement('td');
  td1.innerHTML = 'Hourly <br>Totals';
  footTableId.appendChild(td1);
  let grantTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    let hourTotal = 0;
    for (let j = 0; j < shopArray.length; j++) {
      console.log('j:' + j);
      hourTotal += shopArray[j].perHourArray[i];
    }
    grantTotal += hourTotal;
    td.textContent = hourTotal; // Appending return value from totalPerHour(shopArray)
    footTableId.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = grantTotal; // Putting final total of everything into last footer slot
  footTableId.appendChild(td);
  console.log('break------------------');
}

headerRender();
new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

footerRender();

// Form stuff
function handleStoreData(event){
  event.preventDefault();

  // Stores the input from the user
  let storeName = event.target.name.value;
  let minimumcustomers = +event.target.storeMin.value;
  let maxcustomers = +event.target.storeMax.value;
  let avgcookiessold = +event.target.storeAvg.value;

  // Places the stored input as a new shop
  new Shop(storeName, minimumcustomers, maxcustomers, avgcookiessold);
  footTableId.innerHTML = '';
  footerRender();
}
myForm.addEventListener('submit', handleStoreData);

console.log(shopArray);
