// //1.
// function getCourse() {
//   return "INT201 Client Side Programming I";
// }

// //2.
// function echo(text) {
//   return text;
// }

// //3.
// function isKMUTTStudent(student) {
//   if (student.id.length == 13) return true;
//   else return false;
// }

// //4.
// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// //5.
// function greetingSomeOne(name) {
//   const greeting = ["hi", "hello", "hey"];
//   return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
// }

//ans
let getCourseArrow = () => "Int201 Client side Pro";
console.log(getCourseArrow());

//ans 2
let echo01Arrow = (text) => text;
console.log(echo01Arrow("test"));

//ans 3
let isKMUTTStudentArrow = (students) => {
  if (student.id.length == 13) return true;
  else return false;
};
console.log(isKMUTTStudentArrow(s));

//ans 4
let sumArrow = (num1, num2, num3) => num1 + num2 + num3;
console.log(sumArrow(1, 2, 3));

//ans 5
let greetingSomeOneArrow = (name) => {
  const greeting = ["hi", "hello", "hey"];
  return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
};
console.log(greetingSomeOneArrow());

//examples of reduce and map functions

let products = [
  { prodId: 1, price: 10, amount: 2 },

  { prodId: 2, price: 5, amount: 10 },
];

let priceIncludeVat = products.map(
  (product) => product.price + product.price * 0.07
);

console.log(priceIncludeVat);

let totalAmt = products.reduce(
  (total, curProd) => (total += curProd.amount),

  0
);

console.log(totalAmt);
