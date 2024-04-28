const path = require('path');

console.log(path.sep);

const filePath = path.join('/node_modules/','braces','index.js');
console.log(filePath);

const baseFolderName = path.basename(filePath);
console.log(baseFolderName);

const absolutePath = path.resolve('/node_modules/','braces','index.js');
console.log(absolutePath);
