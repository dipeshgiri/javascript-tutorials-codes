console.log("This is Asynchronous Programming Tuts");
setTimeout(()=>
{
for(let index=0;index<4500;index++)
{
    const element=index;
    console.log("This is index number"+ index);
}
},100);
console.log('done printing');