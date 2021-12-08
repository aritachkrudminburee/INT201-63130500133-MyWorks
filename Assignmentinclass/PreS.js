let array1 = [0,1,2,3,4,5];

let array2 = ['s',[0,1,2,3,4,5],{A:1,B:2,C:3},() =>{return null;},(test) =>{return test;}]

//syntax ของ Slice เป็น ชื่อArray.Slice(Start,end)
// Arrayตัวที่1

// console.log(array1) 
// console.log(array1.slice()) 

// Arrayตัวที่2

//console.log(array2.slice(1,5)) 
// console.log(array2) 

// เช็ดว่า Array.slice ใช้ Arrayตัวเดิมไหม

console.log(array1 === array1.slice())