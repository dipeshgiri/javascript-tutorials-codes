console.log("This is tutorials of loop");

//forloop in javascript
for (let i = 0; i < 100; i++) {
  console.log("Dipesh is printed " + i + " Times");
}

//while loops in javascipt
let j = 1;
while (j < 10) {
  console.log("console printed for " + j + " Times");
  j++;
}
/*Do While Loop
let k = 100;
do {
  print(k);
  k++;
} while (k > 100);
*/

//Foreach loop
let arr = [22, "Dipesh", 34, 56, 73];
arr.forEach(function (element) {
  console.log(element);
});

let obj={
    name:"Dipesh",
    age:20,
    education:"Bachelor in Engineering",
    os:"Windows"
};

for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`);
}
