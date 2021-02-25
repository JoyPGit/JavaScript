let fs = require('fs');

// fs.readFile('input.js',(err, data)=>{
//     console.log("file data "+data);
// });

console.log("readFile done");

// let buf1 = new Buffer(150);
let buf2 = Buffer.from("Hello BUffer2");
// buf1.write("hello Buffer");
// console.log(buf1.length);
console.log(buf2.length)

console.log("var "+ b);
var b = 10;

// console.log("let "+c);  // throws error
let c = 12; 

// traversing DOM
function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree by using DOM Object Model:
    //    document.getElementsByTagName
    // or by using jQuery:
    //    $('some_tag')
    let arr = document.getElementsByTagName('table');

    let max = 0, count = 0;
    for(let i = 0; i<arr.length; i++){

        let rows = arr[i].getElementsByTagName("tr");
        for(let k = 0; k<rows.length; k++){
            count+= rows[k].cells.length;
        }
        max = Math.max(max, count);
        count = 0;
    }
    return max;
}