'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return loaf.water / loaf.flour * 100;
  }
};

console.log(loaf.hydration());

let Obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 2,
  quux: 3,
  spam: 4
};

for (let i in Obj) {
  console.log(`${i} ${Obj[i]} `);
}

let food = {
  meals: [ 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper' ]
};
console.log(food.meals[3]);

let one = {
  name: 'Steve',
  jobTitle: 'Jobs'
};
let two = {
  name: 'Mario',
  jobTitle: 'Plumber',
  boss: one
};
let three = {
  name: 'Yoshi',
  jobTitle: 'Dinosaur',
  boss: one
};

let arr = [ one, two, three ];

arr.forEach(function(element) {
  if (element.hasOwnProperty('boss')) {
    console.log(`${element.name} ${element.jobTitle} reports to ${element.boss.name}`);
  } else {
    console.log(`${element.name} ${element.jobTitle} reports to no one`);
  }
});


let decodeKey ={
  a : 2,
  b : 3,
  c : 4,
  d : 5
};

function decoder(word){
  let position = -1;
  for (let i in decodeKey){
    if(word.charAt(0).toLowerCase() === i){
      position = decodeKey[i];
    }
  }
  if(position > 0){
    return word.charAt(position - 1);
  } 
  return ' ';
}

function decodeWords(string){
  let result = '';
  let array = string.split(' ');
  array.forEach(function(element){
    let char = decoder(element);
    result += char;
  });
  return result;
}