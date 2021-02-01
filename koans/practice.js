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


function Person(firstname, lastname)
{
  var fullName = firstname + " " + lastname;

  this.getFirstName = function () { return firstname; };
  this.getLastName = function () { return lastname; };
  this.getFullName = function () { return fullName; };
}

var aPerson = new Person ("John", "Smith");

aPerson.firstname = "Penny";
aPerson.lastname = "Andrews";
aPerson.fullName = "Penny Andrews";

aPerson.getFullName = function () {
  return aPerson.lastname + ", " + aPerson.firstname;
};

console.log(aPerson.firstname);
console.log(aPerson.getFirstName());
console.log((aPerson.getFullName()));