'use strict';

const seattleTable = document.querySelector('table');
const headTableId = document.getElementById('headTable');
const footTableId = document.getElementById('footTable');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Write more sudo code!!!!

let shopArray = [];
function Shop (shopName, min, max, avg) {
  this.shopName = shopName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.perHourArray = [];
  this.cookies = 0;
  this.finalTotalText = 0;
  shopArray.push(this);
  this.finalTotal = function() {
    for(let i = 0; i < shopArray.length; i++){ 
      //Adding all the totals from all the stores into one final tally
      this.finalTotalText += shopArray[i].dailyTotal;
    }
  };
}

let seattle = new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

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
  return this.perHourArray;
};

Shop.prototype.headerRender = function () {
  hours.unshift('Locations');
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    // console.log(hours + ' this.perHourArray');
    headTableId.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  headTableId.appendChild(td);
};

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

Shop.prototype.footerRender = function (arr) {
  arr.unshift('Hourly Totals'); // Adding string to first in footer row
  for (let i = 0; i < arr.length; i++) {
    let td = document.createElement('td');
    td.innerHTML = arr[i]; // Appending return value from totalPerHour(shopArray)
    footTableId.appendChild(td);
  }
  this.finalTotal();
  let td = document.createElement('td');
  td.textContent = this.finalTotalText; // Putting final total of everything into last footer slot
  footTableId.appendChild(td);
};

function renderAll() { // Calling render methods
  for(let i = 0; i < shopArray.length; i++){
    shopArray[i].render();
  }
  seattle.headerRender();
  seattle.footerRender(totalPerHour(shopArray));
}
renderAll();

// Parameter Arr to put shopArray through this and footer render method
function totalPerHour(arr){ // Creating empty array, filling w/ perHourArray(cookies per hour)
  let totalPerHour = new Array(14).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].perHourArray.length; j++) {
      totalPerHour[j] += arr[i].perHourArray[j];
    }
  }
  return totalPerHour;
}
