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

for(let i in Obj){
  console.log(`${i} ${Obj[i]} `);
}