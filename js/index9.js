console.log("this is tutorial of function in javascript");

function greet(name)
{
    console.log(`welcome ${name} We welcome you in the javascript tutorials`);
}
let name='dipesh';
greet(name);

name="john";

greet(name);

function returngreet(name,address)
{
    let data=`welcome ${name}.you are From ${address} We welcome you in javascript function tutorials`;
    return data;
}

name="Benzene";
address="birtamode"
data=returngreet(name,address);
console.log(data);

const func=function(name)
{
    console.log(`Welcome ${name}`);
}

let names='sachin';
func(names);

const myobj={
    name:"Dipesh",
    skill:"Laravel",
    game:function()
    {
        return "GTA";
    }
};

console.log(myobj.game());
console.log(myobj.name);

arr=['Dipesh','mango','laravel'];

arr.forEach(function(elements,index,array)
{
    console.log(elements,index);
});

if(1)
{
    var p=100;
    console.log(p);
}
let i=10;

function ui(name)
{
    let i=1000;
    console.log(i);
    console.log(`This is ${name}`);
}
console.log(ui("Dipesh"), p);