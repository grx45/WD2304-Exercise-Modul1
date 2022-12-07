// area of rectangle and perimeter
let P = 3;
let L = 2;
let area = P * L;
let perimeter = 2 * (P+L)
console.log(area);
console.log(perimeter);
//------------------------
let radius = 6;
let pi = 3.14;
let cdiameter = 2 * radius;
let ccircumference = 2 + pi * radius;
let carea = pi * (area** 2);

console.log(carea);

//-------------------------------------
let angle1 = 45
let angle2 = 90

resulting = 180 - angle1 - angle2;
console.log(resulting + " angle")

// date - date

let today = new Date("2022-11-29"); // 29 nov
let past = new Date("2022-10-18");

let diff = Math.abs(today - past); //biar absolute number
console.log(diff);
let dateconverter = Math.round(diff / (1000*3600 * 24));
console.log("difference in days is " + dateconverter + " days");

//--------------------------------------------------------------------------------------
//date convert
let days= 1858;
const daystoYconverter = 365;
const daystoMconverter = 30;

// hrusnya pke math.Abs
//krena gk bener klo to precision gk kena roundup

let years = days / daystoYconverter;
years = years.toPrecision(1);
let months = (days % daystoYconverter) / daystoMconverter;
months = months.toPrecision(1);
console.log(months);
let day = months % 30;
day = day.toPrecision(1);
console.log(years + " years " + months + " months " + day + " days");

