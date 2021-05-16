'use strict';

const seattleTable = document.querySelector('table');
const headTableId = document.getElementById('headTable');
const footTableId = document.getElementById('footTable');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm,', '3pm', '4pm,', '5pm', '6pm,', '7pm'];

let shopArray = [];
function Shop (shopName, min, max, avg) {
  this.shopName = shopName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.perHourArray = [];
  this.cookies = 0;
  shopArray.push(this);
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
  for (let i = 0; i < hours.length; i++){
    this.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
    this.perHourArray.push(this.cookies);
    // console.log(this.cookies);
    this.dailyTotal += this.cookies;
  }
  console.log(this.dailyTotal + ' total amount');
  return this.perHourArray;
};

Shop.prototype.headerRender = function () {
  hours.unshift('');
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    console.log(hours + ' this.perHourArray');
    headTableId.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  headTableId.appendChild(td);
};

Shop.prototype.render = function () {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.shopName;
  tr.appendChild(td);
  for (let i = 0; i < this.perHourArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.perHourArray[i];
    tr.appendChild(td);
    this.dailyTotal += this.perHourArray[i];
  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  seattleTable.appendChild(tr);
};

Shop.prototype.footerRender = function () {
  hours.unshift('');
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = 'footer data';
    console.log(hours + ' this.perHourArray');
    footTableId.appendChild(td);
  }
};

function renderAll() {
  for(let i = 0; i < shopArray.length; i++){
    shopArray[i].calcCookiesPerHourArray();
    shopArray[i].render();
  }
  seattle.headerRender();
  seattle.footerRender();
}
renderAll();
