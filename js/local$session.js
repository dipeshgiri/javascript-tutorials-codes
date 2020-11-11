console.log("This is local and session storage in javascript");
let vegetable=['onions','potato','cauliflower'];
//add a key,value inside the local storage 
localStorage.setItem('Name','Harry');
localStorage.setItem('Name-2','Dipesh');
localStorage.setItem('vegetable',JSON.stringify(vegetable));
//localStorage.clear();//clear the entire local storage

//remove a single item from local storage
localStorage.removeItem('Name');
//retrive the item from localstorage
let name=localStorage.getItem('Name-2');
let veg=JSON.parse(localStorage.getItem('vegetable'));
document.body.innerHTML=name;
document.body.innerHTML=veg;


//session storage
let vegetable=['onions','potato','cauliflower'];
//add a key,value inside the local storage 
sessionStorage.setItem('sessionName','Harry');
sessionStorage.setItem('sessionName-2','Dipesh');
sessionStorage.setItem('sessionvegetable',JSON.stringify(vegetable));