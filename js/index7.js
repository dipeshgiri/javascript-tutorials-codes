console.log("This is Tutorials Of IF else in javascript");
const num=2000;
if(num%2==0){

    console.log("Number is Even");
}
else{

    console.log("Number is odd");
}

const vari=34;
if(typeof vari!=='undefined'){
    console.log("Var is defined");
}
else{
    console.log("Var is undefined");
}

if(num%4==0 && num%100==0 && num%400==0)
{
    console.log("and operator true");
}
else{
    console.log("and operator false");
}
if(num%2==0 || num%100==0)
{
    console.log("or operator true");
}
else{
    console.log("or operator false");
}

//terniary opeartor
console.log(num==45 ? 'Age is 45': 'Age is not 45');

//switch case statement
let age=40;

switch (age){
    case 12:
        console.log("You are Below 18");
        break;

    case 40:
        console.log("You are above 38");
        break;
    
    default:
        console.log("YOu are child");
    
}
