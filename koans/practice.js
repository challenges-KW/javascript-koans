// // var megalomaniac = {
// //   mastermind : "Brain",
// //   henchman: "Pinky",
// //   battleCry: function (noOfBrains) {
// //     return "They are " + this.henchman + " and the" +
// //       Array(noOfBrains + 1).join(" " + this.mastermind);
// //   }
// // };
// // console.log(megalomaniac.battleCry(4))

const { on } = require("events");
const { maxHeaderSize } = require("http");



// var megalomaniac = {
//     mastermind: "The Monarch",
//     theBomb: true
//   };

// var hasBomb = "henchwoman" in megalomaniac;

// console.log(hasBomb)


// function Person(firstname, lastname)
// {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// var aPerson = new Person ("John", "Smith");
// aPerson.firstname = "Alan";

// console.log(aPerson.firstname);


// function Person(firstname, lastname)
// {
//   var fullName = firstname + " " + lastname;

//   this.getFirstName = function () { return firstname; };
//   this.getLastName = function () { return lastname; };
//   this.getFullName = function () { return fullName; };
// }

// var aPerson = new Person ("John", "Smith");

// aPerson.firstname = "Penny";
// aPerson.lastname = "Andrews";
// aPerson.fullName = "Penny Andrews";

// aPerson.getFullName = function () {
//   return aPerson.lastname + ", " + aPerson.firstname;
// };

// console.log(aPerson.firstname);
// console.log(aPerson.getFirstName());
// console.log((aPerson.getFullName()));


// function nFun () {
//   var numbers = [1, 2, 3];
//   var odd = (numbers).filter(function (x) { return x % 2 !== 0 });
// };

// var numbers = [1, 2, 3];
// var odd = (numbers).filter(function (x) { return x % 2 !== 0 });

// console.log(odd.length);
// console.log(numbers.length);
// console.log(odd);



// function mappingFun () {
//   var numbers = [1, 2, 3];
//   var numbersPlus1 = (numbers).map(function(x) { return x + 1 });
// };


// var numbers = [1, 2, 3];
// var numbersPlus1 = (numbers).map(function(x) { return x + 1 });

// console.log(numbersPlus1);


// function redMemo () {
//   var numbers = [1, 2, 3];
//   var reduction = (numbers).reduce(
//           function(memo, x) { return memo + x }, 0);
//         };

// var reduction = (numbers).reduce(function(memo, x) { return memo + x }, 0);


//   console.log(reduction);





// function usingForEach () {
//   
  var numbers = [1,2,3];
  var msg = "";
  var isEven = function (item) {
    msg += (item % 2) === 0;
  };

  (numbers).forEach(isEven);

  // expect(msg).toEqual("FILL IN");
  // expect(numbers).toEqual(["Fill IN"]);

// console.log(numbers);




  // var onlyEven = [2,4,6];
  // var mixedBag = [2,4,5,6];

  // var isEven = function(x) { return x % 2 === 0 };

  // // expect(_(onlyEven).all(isEven)).toBe(FILL_ME_IN);
  // // expect(_(mixedBag).all(isEven)).toBe(FILL_ME_IN);

  // console.log(onlyEven.every(isEven));
  // console.log(mixedBag.every(isEven));



  //   var onlyEven = [2,4,6];
  //   var mixedBag = [2,4,5,6];

  //   var isEven = function(x) { return x % 2 === 0 };

  //   // expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);
  //   // expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);


  // console.log(onlyEven.some(isEven));
  // console.log(mixedBag.some(isEven));


//   it("should use range to generate an array", function() {
//     expect(_.range(3)).toEqual(FILL_ME_IN);
//     expect(_.range(1, 4)).toEqual(FILL_ME_IN);
//     expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
// });




// console.log(Array.from({length: 3}, (x, i) => i));
// console.log(Array.from(Array(3).keys()));


// var array = [];
// for (var i = 1; i <= 4; i++) {
//   console.log(array.push(i));
// }


//  var arrays = [[1, 2], [3, 4] ];

//  var merged = [].concat.apply([], arrays);

//  console.log(merged);


//  let result = [[0, 1], 2]


var reducer = (accumulator, currentValue) => accumulator + currentValue;

var result = ([ [0, 1], 2 ])
var step = result.flat().map(x => x + 1);

console.log(step.reduce(reducer));