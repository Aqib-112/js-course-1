
const score = 400
 console.log(score);

const balance = new Number(100)
 console.log(balance);

 //convert to string

 console.log(balance.toString().length);
 //.fixed(2) give 400.00  // for after fracion
 console.log(balance.toFixed(1));

const otherNumber = 123.8966

// .toprecision give the value according to our input like for 4 it give 123.9 (4 digit value)

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// give commas according to country standard

 console.log(hundreds.toLocaleString('en-PK'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// give absolute value like negative value convert in positive
 console.log(Math.abs(-4));
 // round off the number 
 console.log(Math.round(4.6));
 // round off the number to top number
 console.log(Math.ceil(4.2));
 // rpund off the number to lower value
 console.log(Math.floor(4.9));
 // give the minimum value from array
 console.log(Math.min(4, 3, 6, 8));
 // give the maximum value from the array
 console.log(Math.max(4, 3, 6, 8));

 // .random give the value from 0 to 1
console.log(Math.random());

console.log((Math.random()*10) + 1);
// give round off to lower value
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
