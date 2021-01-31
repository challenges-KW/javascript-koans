// var megalomaniac = {
//   mastermind : "Brain",
//   henchman: "Pinky",
//   battleCry: function (noOfBrains) {
//     return "They are " + this.henchman + " and the" +
//       Array(noOfBrains + 1).join(" " + this.mastermind);
//   }
// };
// console.log(megalomaniac.battleCry(4))



var megalomaniac = {
    mastermind: "The Monarch",
    theBomb: true
  };

var hasBomb = "henchwoman" in megalomaniac;

console.log(hasBomb)