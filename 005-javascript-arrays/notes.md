const prompt = require('prompt-sync')();
// assigning arrays
let myFancyNumber = 42;
let colors = ['red', 'orange', 45,'burgandy', 'yellow', 'gold'];
let color = ['r', 'e', 'd'];
// console.log(colors);

// if (colors.length > 2) {console.log('hello');}
// adding to the end of an array
// colors.push('green');

// console.log(colors);
// console.log(colors.length);

// const blue = 'red';
colors.push("blue");
colors.push('magenta is the best');
colors.push('teal');

colors.push('aquamarine')
// console.log(colors);

// accessing an element of an array
console.log(colors[0])

colors.push('brown')
console.log(`I love ${colors[0]}`);
``
colors[0] = 'Pedro'

console.log(colors[4])
console.log(colors[9])

// changing an element of an array
colors[2] = 'violet';
colors[5] = 'very gold'

colors[9] = `onyx`;

console.log(colors);
// displaying an array without loops (console.log, join)
let names = [];
let name = prompt('What is your first name? ');
names.push(name);
name = prompt('What is your middle name? ');
names.push(name);
name = prompt('What is your last name? ');
names.push(name);
// names.sort();
console.log(names.join(' '));

// console.log('Agi is in the house');
// console.log(`this is Akeem`);
// console.log('This is Joshua');
// console.log('This is Chuck');
// console.log('This is Maxine');

// names.push(prompt('What is your first name? '));
// names.push(prompt('What is your middle name? '));
// names.push(prompt('What is your last name? '));
// // names.sort();
// console.log(names.join(' '));
// console.log(colors);
// colors.splice(2, 2);
// console.log(colors)