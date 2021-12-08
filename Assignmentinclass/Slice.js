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

//function
const sliceNoPar = (model) => {
  return model.slice();
};

const sliceOnePar = (model, start) => {
  return model.slice(start);
};

const sliceTwoPar = (model, start, finish) => {
  return model.slice(start, finish);
};

//
console.log(`------------------primitive array---------------------`);
console.log(`------------------default---------------------`);
console.log("default : " + array1);
console.log(`------------------slice---------------------`);

////Slice has no parameter
console.log(`------------------no parameter ---------------------`);
console.log("array use slice : " + sliceNoPar(array1));
console.log("slice is same array?  "); 
console.log(array1 === sliceNoPar(array1));

//Slice has 1 parameter
console.log(`------------------1 parameter---------------------`);
console.log("array use slice(start = +) : " + sliceOnePar(array1, 1));
console.log("array use slice(start = -) : " + sliceOnePar(array1, -1));
console.log("array use slice(length) : " + sliceOnePar(array1, array1.length));
//Slice has 2 parameter
console.log(`------------------2 parameter---------------------`);
console.log(
  "array use slice(start = +, end = +) : " + sliceTwoPar(array1, 1, 2)
);
console.log(
  "array use slice(start = +,end = -) : " + sliceTwoPar(array1, 1, -2)
);
console.log(
  "array use slice(start = -, end = +) : " + sliceTwoPar(array1, -4, 5)
);
console.log(
  "array use slice(start = -,end = -) : " + sliceTwoPar(array1, -4, -3)
);
console.log(
  "array use slice(length) : " + sliceTwoPar(array1, 1, array1.length)
);

console.log(`---------------------------------------`);
console.log(
  `------------------array has string,int,object,array,function(notparamrter) and function(paramrter) ---------------------`
);
console.log(`------------------default---------------------`);
console.log("default : " + array2);
console.log(`------------------slice---------------------`);

////Slice has no parameter
console.log(`------------------no parameter ---------------------`);
console.log("array use slice : " + sliceNoPar(array2));
console.log("slice is same array? ");
console.log(array2 === sliceNoPar(array2));
//Slice has 1 parameter
console.log(`------------------1 parameter---------------------`);
console.log("array use slice(start = +) : " + sliceOnePar(array2, 1));
console.log("array use slice(start = -) : " + sliceOnePar(array2, -1));
console.log("array use slice(length) : " + sliceOnePar(array2, array2.length));
//Slice has 2 parameter
console.log(`------------------2 parameter---------------------`);
console.log(
  "array use slice(start = +, end = +) : " + sliceTwoPar(array2, 1, 2)
);
console.log(
  "array use slice(start = +,end = -) : " + sliceTwoPar(array2, 1, -2)
);
console.log(
  "array use slice(start = -, end = +) : " + sliceTwoPar(array2, -4, 5)
);
console.log(
  "array use slice(start = -,end = -) : " + sliceTwoPar(array2, -4, -3)
);
console.log(
  "array use slice(length) : " + sliceTwoPar(array2, 1, array2.length)
);