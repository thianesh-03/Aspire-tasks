//console.log("Welcome buddy");
let array1 = [1, 2, 3, 4, 5];
array1[1] = 20;
array1[5] = 6; //size can be increased
//console.log(array1);
array1[1] = 2;

let array2 = [7, 8, 9, 10];
let array3 = new Array(array1, array2);
console.log(array3);