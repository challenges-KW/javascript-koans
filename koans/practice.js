// // var megalomaniac = {
// //   mastermind : "Brain",
// //   henchman: "Pinky",
// //   battleCry: function (noOfBrains) {
// //     return "They are " + this.henchman + " and the" +
// //       Array(noOfBrains + 1).join(" " + this.mastermind);
// //   }
// // };
// // console.log(megalomaniac.battleCry(4))



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


function nFun () {
  var numbers = [1, 2, 3];
  var odd = (numbers).filter(function (x) { return x % 2 !== 0 });
};

var numbers = [1, 2, 3];
var odd = (numbers).filter(function (x) { return x % 2 !== 0 });

console.log(odd.length);
console.log(numbers.length);
console.log(odd);



function mappingFun () {
  var numbers = [1, 2, 3];
  var numbersPlus1 = (numbers).map(function(x) { return x + 1 });
};


var numbers = [1, 2, 3];
var numbersPlus1 = (numbers).map(function(x) { return x + 1 });

console.log(numbersPlus1);



function redMemo () {
  var numbers = [1, 2, 3];
  var reduction = (numbers).reduce(
          function(memo, x) { return memo + x }, 0);
        };

var reduction = (numbers).reduce(function(memo, x) { return memo + x }, 0);


  console.log(reduction);