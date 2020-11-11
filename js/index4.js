//type conversion and type coersion
console.log("Welcome to index4");
let myvar;
myvar=String(12);
console.log(myvar,(typeof myvar));

let booleanvar= String(true);
console.log(booleanvar,(typeof booleanvar));

let date=String(new Date());
console.log(date,(typeof date));

let i=45;
console.log(i.toString());

let stri=Number("3434d");
let sri=Number([1,2,3,4,5]);
console.log(stri,(typeof stri));

let number=parseInt('34');
let no=parseFloat('34.8980');
console.log(number,(typeof number));
console.log(no.toFixed(2),(typeof no));
console.log(no.toFixed(4),(typeof no));

//type coercion

let mystr ="6898";
let mynum =34;
console.log(mystr + mynum);

