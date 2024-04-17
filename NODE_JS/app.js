// //console.log("Welcome buddy");
// let array1 = [1, 2, 3, 4, 5];
// array1[1] = 20;
// array1[5] = 6; //size can be increased
// //console.log(array1);
// array1[1] = 2;

// let array2 = [7, 8, 9, 10];
// let array3 = new Array(array1, array2);
// console.log(array3);

// function reqListener(req,res){
//     console.log(req);
// } No need for external functions
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();//to stop the event loop
});
server.listen(3000);
