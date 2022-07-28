const prompt = require('prompt-sync')();

const song = prompt('pick a song. Baby got back or feels like a woman.');

const genre = prompt('Pick a genre. Country-Pop or HipHop-R&B.')
const age = prompt ('What is your high school graduation year?')
const numberAge = parseInt(age)


if(numberAge <= 2007 && genre === 'Country-Pop') {
 console.log('Your baby mama is Britney Spears');
}
else if(song === 'Baby got back' || genre === 'HipHop-R&B') {
    console.log('Your baby mama is Aaliyah');
   }
else {
    console.log ('Your baby mama is Taylor Swift');
}

// console.log('pick a song. Baby got back" or "feels like a woman');


// const age = prompt('What is your age?');

// const numberAge = parseInt(age);

// console.log(typeof numberAge);

// if(numberAge >= 21); { console.log('You may enter the website');}
     
// else { console.log('you may not enter the website')}
//console.log(`Your age is ${age}`);
// What is your age
// consloe.log('Pick a song');

// f (string = '/"Baby got back/"'); {console.log('RB or HipHop')}