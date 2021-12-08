//attribute
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [
  "i want to sleep",
  1,
  { A: "test", B: "test1" },
  [1, 2, 3, 4, 5],
  () => "test3",
  (parameter) => parameter,
];

const Reversefun = (model) => {
  return model.reverse();
};

console.log(`------------------primitive array---------------------`);
console.log(`------------------default---------------------`);
console.log("default : " + array1);
console.log(`------------------Reverse---------------------`);
console.log("array use Reverse :" + array1);
console.log("Reverse is same array? "); 
console.log( array1 === Reversefun(array1));
console.log(`---------------------------------------`);
console.log(
  `------------------array has string,int,object,array,function(notparamrter) and function(paramrter) ---------------------`
);
console.log(`------------------default---------------------`);
console.log("default : " + array2);
console.log(`------------------Reverse---------------------`);
console.log("array use Reverse :" + array2);
console.log("Reverse is same array? ");
console.log( array2 === Reversefun(array2));

