'use strict';

console.log('Hello World');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm,', '3pm', '4pm,', '5pm', '6pm,', '7pm', '8pm,'];

let averageCookiesByLocation = {
  seattle: '6.3',
  tokyo: '1.2',
  dubai: '3.7',
  paris: '2.3',
  lima: '4.6',
};

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],
  avg: 6.3,
  // enter your sudo code:
  // come up with a plan of how to do this!
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function (location) {
    let perHour = [];
    for (let i = 1; i < hours.length + 1; i++){
      let cookies = location * this.getRandomNumberCustomers();
      perHour.push(` Estimated cookies: ${cookies} at ${hours[i]}`);
    }
    return perHour;
  }
};

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],
  avg: 1.2,
  // enter your sudo code:
  // come up with a plan of how to do this!
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function (location) {
    let perHour = [];
    for (let i = 1; i < hours.length + 1; i++){
      let cookies = location * this.getRandomNumberCustomers();
      perHour.push(` Estimated cookies: ${cookies} at ${hours[i]}`);
    }
    return perHour;
  }
};

console.log(tokyo.cookiesPerHour(averageCookiesByLocation.tokyo) + ' cookies per hour');
console.log(seattle.cookiesPerHour(averageCookiesByLocation.seattle) + ' cookies per hour');
console.log(seattle.getRandomNumberCustomers());


// Calculates Cookies per Hour based on random Number of Customers by location
// ###### FIX --- Add a way to remove the decimal or make it just one number after ####
// function cookiesPerHour() {
//   let perHour = [];
//   for (let i = 1; i < hours.length + 1; i++){
//     let cookies = averageCookiesByLocation.seattle * seattle.getRandomNumberCustomers();
//     perHour.push(` Estimated cookies: ${cookies} at ${hours[i]}`);
//   }
//   return perHour;
// }

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

// let cookieFunctions = {
//   cookiesPerHour: function (location) {
//     let perHour = [];
//     for (let i = 1; i < hours.length + 1; i++){
//       let cookies = parseInt(location) * cookieFunctions.getRandomNumberCustomers();
//       console.log(location);
//       // console.log(numCustomers);
//       perHour.push(` Estimated cookies: ${cookies} at ${hours[i]}`);
//     }
//     return perHour;
//   },
//   getRandomNumberCustomers: function () {
//     return Math.floor(Math.random() * (seattle.max - seattle.min + 1) + seattle.min);
//   },
//   // cookiesPerHour: function () {
//   //   let perHour = [];
//   //   for (let i = 1; i < hours.length + 1; i++){
//   //     let cookies = averageCookiesByLocation.seattle * seattle.getRandomNumberCustomers();
//   //     perHour.push(` Estimated cookies: ${cookies} at ${hours[i]}`);
//   //   }
//   //   return perHour;
//   // }
// };
