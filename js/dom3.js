console.log("This is the tutorials of html element selectors");

//DOM SELECTOR
/*
single element selector
multi element selector
*/

//single element selector
let element=document.getElementById('first');
//element=element.className;
//element=element.childNodes;
//element=element.parentNode;
//element.style.color='red';
//element.innerText='Dipesh is an Engineer';
//element.innerHTML=`<b>Dipesh is an Engineer</b>`;
//element.style.color='red';
//console.log(element.innerHTML);
//console.log(element);


//Query Selector
//let sel=document.querySelector('#heading');
//sel=document.querySelector('.child');
//sel=document.querySelector('div');

//console.log(sel);

//Multi Element Selector
let ele=document.getElementsByClassName('child');
//console.log(ele[2]);
//console.log(ele[1]);
//getElementsByTagName;
ele=document.getElementsByClassName('container');
console.log(ele[0].getElementsByClassName('child'));
