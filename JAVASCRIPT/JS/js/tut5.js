//type conversion and type coercion
console.log("welcome to tuts");
let myVar;
// myVar=34;
myVar=String(34);
console.log(myVar,(typeof myVar));

let booleanVar=String(true);
console.log(booleanVar,(typeof myVar));

let date=new Date();
console.log(date,(typeof date));


// let arr=[1,2,3,4,5];
let arr=String([1,2,3,4,5]);
// console.log(arr.length,(typeof arr));

let i=8;
console.log(i);

let stri=Number("3434");
stri=Number("343d4");
stri=Number(true);
stri=Number([1,2,3,4,5,6,66]);
console.log(stri,(typeof stri));

// let number='34';
// let number=parseInt('34');
let number=parseFloat('34.098');
console.log(number,(typeof number));
console.log(number.toFixed(),(typeof number));

// Type coercion
// let mystr="456";
let mystr=Number("456");
let mynum=34;
console.log(mystr+mynum);