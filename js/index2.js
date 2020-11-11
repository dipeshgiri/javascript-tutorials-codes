console.log("This is dipesh");
//variable in js can be made using var let and const
var name = "Dipesh";
var nums;
nums=48;
var num='48'
console.log(name, nums, num);

//rules for creating js variable
// cannot start with number
// can start with letter numbers and _ $
//are case sensitive
var city="Biratnagar";
console.log(city);
const ownername ='Dipesh';
//ownername='Dipesh Giri';//cannot reintialize the const variable
console.log(ownername);

{
    let city='kathmandu';
    city='birgunj';
    console.log(city);
}
console.log(city);

const arr1=[1,2,3,4,5];
arr1.push(45);
console.log(arr1);