'use strict';

console.log('Hello World');
const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm,', '3pm', '4pm,', '5pm', '6pm,', '7pm', '8pm'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  perHour: [],
  avg: 6.3,
  cookies: 0,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
    let totalCookies = 1;
    for (let i = 0; i < hours.length; i++){
      seattle.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
      // console.log(seattle.cookies);
      // console.log(totalCookies + 'total cookies before');
      totalCookies = totalCookies + seattle.cookies;
      // console.log(totalCookies + 'total cookies after');
      seattle.perHour.push(seattle.cookies);
      seattle.dailyTotal = seattle.dailyTotal + seattle.cookies;
    }
    // console.log(seattle.dailyTotal + ' total amount');
    // console.log(seattle.perHour + ' per Hour array');
    return seattle.perHour;
  },
  displayToSales: function () {
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `Estimated cookies: ${seattle.calcCookiesPerHour()[i]} at ${hours[i]}`;
      seattleList.appendChild(li);
    }
    seattleList.append(`Total cookies: ${seattle.dailyTotal} for 1 day at ${seattle.name}`);
    // console.log(seattle.dailyTotal + ' seattle total amount');
  },
};

// seattle.calcCookiesPerHour();
seattle.displayToSales();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  dailyTotal: 0,
  perHour: [],
  avg: 1.2,
  cookies: 0,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
    for (let i = 0; i < hours.length; i++){
      tokyo.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
      tokyo.perHour.push(tokyo.cookies);
      tokyo.dailyTotal = tokyo.dailyTotal + tokyo.cookies;
    }
    return tokyo.perHour;
  },
  displayToSales: function () {
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `Estimated cookies: ${tokyo.calcCookiesPerHour()[i]} at ${hours[i]}`;
      tokyoList.appendChild(li);
    }
    tokyoList.append(`Total cookies: ${tokyo.dailyTotal} for 1 day at ${tokyo.name}`);
    // console.log(tokyo.dailyTotal + ' tokyo total amount');
  },
};
// tokyo.calcCookiesPerHour();
tokyo.displayToSales();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  dailyTotal: 0,
  perHour: [],
  avg: 3.7,
  cookies: 0,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
    for (let i = 0; i < hours.length; i++){
      dubai.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
      dubai.perHour.push(dubai.cookies);
      dubai.dailyTotal = dubai.dailyTotal + dubai.cookies;
    }
    return dubai.perHour;
  },
  displayToSales: function () {
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `Estimated cookies: ${dubai.calcCookiesPerHour()[i]} at ${hours[i]}`;
      dubaiList.appendChild(li);
    }
    dubaiList.append(`Total cookies: ${dubai.dailyTotal} for 1 day at ${dubai.name}`);
    // console.log(dubai.dailyTotal + ' dubai total amount');
  },
};
// dubai.calcCookiesPerHour();
dubai.displayToSales();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  dailyTotal: 0,
  perHour: [],
  avg: 2.3,
  cookies: 0,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
    for (let i = 0; i < hours.length; i++){
      paris.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
      paris.perHour.push(paris.cookies);
      paris.dailyTotal = paris.dailyTotal + paris.cookies;
    }
    return paris.perHour;
  },
  displayToSales: function () {
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `Estimated cookies: ${paris.calcCookiesPerHour()[i]} at ${hours[i]}`;
      // Change where appending to at each location
      parisList.appendChild(li);
    }
    parisList.append(`Total cookies: ${paris.dailyTotal} for 1 day at ${paris.name}`);
    // console.log(paris.dailyTotal + ' paris total amount');
  },
};
// paris.calcCookiesPerHour();
paris.displayToSales();

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  dailyTotal: 0,
  perHour: [],
  avg: 4.6,
  cookies: 0,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
    for (let i = 0; i < hours.length; i++){
      lima.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
      lima.perHour.push(lima.cookies);
      lima.dailyTotal = lima.dailyTotal + lima.cookies;
    }
    return lima.perHour;
  },
  displayToSales: function () {
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `Estimated cookies: ${lima.calcCookiesPerHour()[i]} at ${hours[i]}`;
      limaList.appendChild(li);
    }
    limaList.append(`Total cookies: ${lima.dailyTotal} for 1 day at ${lima.name}`);
    // console.log(lima.dailyTotal + ' lima total amount');
  },
};
lima.calcCookiesPerHour();
lima.displayToSales();

// console.log(tokyo.cookiesPerHour(averageCookiesByLocation.tokyo) + ' cookies per hour');
// console.log(seattle.calcCookiesPerHour() + ' cookies per hour');
// console.log(tokyo.calcCookiesPerHour() + ' cookies per hour');
// console.log(dubai.calcCookiesPerHour() + ' cookies per hour');
// console.log(paris.calcCookiesPerHour() + ' cookies per hour');
// console.log(lima.calcCookiesPerHour() + ' cookies per hour');
// console.log(seattle.cookiesPerHour(averageCookiesByLocation.seattle));




















// seattle.cookiesPerHour(averageCookiesByLocation.seattle, seattle.getRandomNumberCustomers);


// ##### FIX when calling, not running through for loop #####

// Create Object Literals for each shop Location

// 5 Stores: Seattle, Tokyo, Dubai, Paris, Lima

// Per store location
// 1. Store the min/max customers, create and array that holds the average cookies per customer
// 1a. store them in object properties
// 2. Create a method(function) that generates the random number of customers
// 3. Create a function that stores the amount of cookiers per hour, per location, per average cookies bought, with the random number of customers
// 4. Create an Array for each location, use objects and properties
// 5. Display the values in a an unordered list in the brower for Pat to see
// 6. Calculate the hourly total of cookies sold, print out the list, for each location


// Extra:
// Make sure each location has its own jS object
// Be able to update per location, add/remove locations




// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   dailyTotal: 0,
//   perHour: [],
//   avg: 6.3,
//   cookies: 0,
//   // enter your sudo code:
//   getRandomNumberCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     // Creating a for loop to find cookies per hour, placing into an array and list on sales.html
//     for (let i = 0; i < hours.length; i++){
//       seattle.cookies = Math.ceil(this.avg * this.getRandomNumberCustomers());
//       seattle.perHour.push(`Estimated cookies: ${seattle.cookies} at ${hours[i]}`);
//       seattle.dailyTotal = seattle.dailyTotal + seattle.cookies;
//       //creates a list to place all the cookie numbers
//       let li = document.createElement('li');
//       li.textContent = `Estimated cookies: ${cookies} at ${hours[i]}`;
//       // Change where appending to at each location
//       seattleList.appendChild(li);
//     }
//     // Appending the last line, total cookies & change locations for each location
//     seattleList.append(`Total cookies: ${seattle.dailyTotal} for 1 day at ${seattle.name}`);
//     console.log(seattle.dailyTotal + ' total amount');
//     // return seattle.perHour;
//   },
//   displayToSales: function () {
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `Estimated cookies: ${seattle.cookies} at ${hours[i]}`;
//       // Change where appending to at each location
//       seattleList.appendChild(li);
//     }
//     seattleList.append(`Total cookies: ${seattle.dailyTotal} for 1 day at ${seattle.name}`);
//     console.log(seattle.dailyTotal + ' total amount');
//     return seattle.perHour;
//   },
// };
// seattle.calcCookiesPerHour();















// cookiesToArray: function () {
//   for (let i = 0; i < hours.length; i++) {
//     this.avgCookiesPerHourArray.push(this.cookieSales());
//   }
// },
// //function to add up the hourly sales from array
// sumOfSales: function () {
//   for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
//     this.dailyTotal += this.avgCookiesPerHourArray[i];
//   }
// },
// //push sales to DOM
// renderToSales: function () {
//   for (let i = 0; i < hours.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
//     seattleList.appendChild(li);
//   }
//   //push total to DOM
//   let liTotal = document.createElement('li');
//   liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//   seattleList.appendChild(liTotal);
// },

