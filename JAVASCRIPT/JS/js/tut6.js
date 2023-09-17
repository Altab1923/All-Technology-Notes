console.log('We are at tut 6');
const name="Alatb";
const greeting="Good Morning";
console.log(greeting+ ' '+name);


let html;
html="<h1> This is heading</h>"+
       "<p>this is my paragraph</p>";
console.log(html);
html = html.concat('this hjjjjj');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());         
// console.log(html[2]);
// console.log(html.indexOf('headuipling'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('hkkh'));
// console.log(html.substring(0,3));
// console.log(html.split(' '));
// console.log(html.replace('this','it'));

let fruit1='Orange';
let fruit2='Apple';
let myHtml=`Hello ${name}
  <h1>This ios heading</h1>
  <p> You like ${fruit} and ${fruit2}
     `;
     document.body.innerHTML=myHtml;