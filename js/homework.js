// // #1
// Цикл, який рахує суму чисел 1 + 2 + 3 ... + 100
const sum = function(num) {
  if (num === 0) {
    return num;
  } else {
    return (num += sum(num - 1));
  }
};

console.log(sum(100));

// #2 Tamagochi object
const tamagochi = {
  name: "Splinfao",
  health: 100,
  happiness: 100,
  hunger: 0,
  sleep: 0,
  play: 100,

  eat: function () {
    return this.hunger;
  },

  walk: function () {
    return this.happiness;
  },

  chill: function () {
    return this.sleep;
  },

  drink: function () {
    return this.hunger;
  },

  escape: function () {
    return this.happiness;
  },

  die: function () {
    return this.health;
  },
};

console.log(tamagochi);

// #3 sum function

function sum(a) {
  const secondSum = function (b) {
    const thirdSum = function (c) {
      return a + b + c;
    };
    return thirdSum;
  };
  return secondSum;
}
console.log(sum(1)(2)(3));

// #4 calculate function

const Obj = {
  sum: 0,
  calculate: function (a) {
    this.sum += a;
    return this;
  },
  add: function (b) {
    this.sum += b;
    return this;
  },
  multiply: function (c) {
    this.sum *= c;
    return this;
  },
  result: function () {
    return this.sum;
  },
};

console.log(Obj.calculate(3).add(2).multiply(2).result());

// #5 My methods

// forEach
const arrForE = [2, 4, 6];
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const callback = function (a) {
  console.log(a);
};

arrForE.myForEach(callback);

// myMap
const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  let mapArr = [];
  for (let i = 0; i < this.length; i++) {
    mapArr.push(callback(this[i]));
  }
  return mapArr;
};

const newArr = arr.myMap((num) => num ** 2);
console.log(newArr);

// myFilter
const arrFilter = [1, 2, 3, 4, 5, 7];

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    if (result) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const newFilterArr = arrFilter.myFilter((num) => num > 5);
console.log(newFilterArr);

// mySort
const arrSort = ["b", "c", "a", 3, 1];

Array.prototype.sortArray = function () {
  let sort = 0;
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[i]) {
        sort = this[j];
        this[j] = this[i];
        this[i] = sort;
      }
    }
  }
  return this;
};

console.log(arrSort.sortArray());

// myFind
const array1 = [5, 12, 8, 130, 44];

Array.prototype.myFind = function (callback) {
  let findArr = [];
  for (let i = 0; i < this.length; i++) {
    findArr.push(callback(this[i]));
  }
  return findArr;
};

const found = array1.find((e) => e > 10);
console.log(found);
