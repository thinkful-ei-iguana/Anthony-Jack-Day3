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

let decodeKey = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decoder(word) {
  let position = -1;
  for (let i in decodeKey) {
    if (word.charAt(0).toLowerCase() === i) {
      position = decodeKey[i];
    }
  }
  if (position > 0) {
    return word.charAt(position - 1);
  }
  return ' ';
}

function decodeWords(string) {
  let result = '';
  let array = string.split(' ');
  array.forEach(function(element) {
    let char = decoder(element);
    result += char;
  });
  return result;
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8)
];
characters.push(createCharacter('Arwen Undomiel', 'Elfy', 'Half-Elf', 'Rivendell', 99, 99));
let hobbits = characters.filter((i) => i.race === 'Hobbit');
let opCharacters = characters.filter((i) => i.attack > 5);
characters.find(function(i) {
  if (i.nickName === 'aragorn') {
    i.describe();
  }
});

// console.log(hobbits);
// console.log(opCharacters);

function createCharacter(name, nickName, race, origin, attack, defense) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    elvaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      return `Your opponent takes ${x} damage and you recieve ${y} damage`;
    }
  };
}
