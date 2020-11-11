console.log("THis is dipesh");

const marks =[34,38,98,80,65,53];
const fruits=['Orange','Mango','Pineapple'];
const mix=['str',44.65,"Dipesh",54];

const arr=new Array(23,87.65,"Dipesh","Mango");
console.log(arr);
console.log(mix);
console.log(fruits);
console.log(marks);

console.log(arr.length);

console.log(Array.isArray(arr));

arr[0]="Dipsika";
console.log(arr);

let arrelement=marks[2];
console.log(arrelement);


let value=marks.indexOf(98);
console.log(value);


//Mutating Array= Modifiying Array
marks.push(91);
console.log(marks);

marks.unshift(90);
console.log(marks);

marks.pop();
console.log(marks);

marks.shift();
console.log(marks);

marks.splice(3,1);
console.log(marks);

let marks2=[1,2,3,4];
mark=marks.concat(marks2);
console.log(mark);


//object
let myobj={
    name:'Dipesh',
    age: 20,
    marks: [1,2,3,4],
    isActive: true

};
console.log(myobj);
console.log(myobj.name);
console.log(myobj['name']);

console.log(myobj.age);
console.log(myobj['marks']);

