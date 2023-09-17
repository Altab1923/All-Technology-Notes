 //1. Ways To print in Javascript
        // console.log("Hello Wrold");
        // alert("me");
        // document.write("This is document write");
        //2. Javascript console API
       //  console.log("Hello Wrold",4+6,"Another log");
       //  console.warn("This is Warning");
       //  console.error("This is an error");

        //3. javascript  variable
        // what are variable:Container to Store data value
        var no1=34;
        var no2=67;
       //  console.log(no1+no2);

       //  4. Data type in JavaScript
       // String
       var str1="This is a string";
       var str2="This is also a string";

       // Objects
       var marks={
              ravi:34,
              shubham:78,
              harry:99.87

       }
       // console.log(marks);

       //Boolean
       var a=true;
       var b=false;
       // console.log(a,b);

       var und;
       // console.log(und);

       var n=null;
       // console.log(n);

       //At a very high level,there are two types in JavaScript
       // 1. Primitives data types:undefined,null,number,string,boolean,symbol
       // 2.Reference data types:Arrays and Objects

       var arr=[1,2,'uygfewglf',4,5];
       // console.log(arr);

       //Operators in JavaScript
//      Arthimatic operator
       var a=34;
       var b=56;
       // console.log("The value of a+b is:",a+b);

       // Asssignment operator
       var c=a;
       c+=3;
       console.log(c);

       //comparsion Operator
       var x=34;
       var y=36;
       // console.log(x==y);
       // console.log(x>=y);


          //Logical Operators AND
       //    console.log(true && true);
       //    console.log(true &&false);

       //Logical not
       // console.log(!false);
       // console.log(!true);

//Function in JavaScript
//DRY=DO NOT REPEAT YOURSELF
       function avg(a,b){
              d= (a+b)/2;
              return d;
       }
  c=avg(4,6);
  c2=avg(2,2);
//   console.log(c,c2);

//Conditional in JavaScript
var age=4;
if(age>8){
       console.log('You are not a kid');
}
//if-else StateMent
// if(age>8){
//        console.log('You are not a kid');
// }
// else{
//        console.log('you are a kid');
// }

//if-else Ladder StateMent
// age=34;
// if(age>2){
//        console.log('You are not a kid');
// }
// else if(age>56){
//        console.log('Bachhe nhi rahe');
// }
// else if(age>12){
//        console.log('You are till now kid');
// }

// else{
//        console.group('bache nehi rahe');
// }
// console.log("End of ladder");
var arr=[1,2,3,4,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//        console.log(arr[i]);
// }
// arr.forEach(function(element){
// console.log("This is foe for loop");
// console.log(element);
// })

// let j=0;
// const ac=0;
// // ac=ac+1;
// console.log(ac);

let j=0;
while(j<arr.length){
       console.log(arr[j]);
}
