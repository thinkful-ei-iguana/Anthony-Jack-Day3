/* eslint-disable no-unused-vars */
'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'Hello';
    }
  };
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentsReport(data) {
  let newArr = [];
  data.forEach(function(i) {
    newArr.push(`${i.name}: ${i.grade}`);
  });
  return newArr;
}

function enrollInSummerSchool(students) {
  students.forEach(function(i) {
    i.status = 'In Summer School';
  });
  return students;
}

const scratchData = [ { id: 22, foo: 'bar' }, { id: 28, foo: 'bizz' }, { id: 19, foo: 'bazz' } ];

function findById(items, idNum) {
  items.forEach(function(i) {
    if (i.id === idNum) {
      return i;
    }
  });
}

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
};

const objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused'
};

const expectedKeys = [ 'id', 'name', 'age', 'city' ];

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  for (let i of expectedKeys) {
    if (Object.keys(object).find((key) => key === i)) {
      return true;
    }
  }
  return false;
}
