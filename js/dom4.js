console.log("Traversing in Dom");

let cons=document.querySelector('.container');
console.log(cons.childNodes[5].nodeName);
console.log(cons.childNodes[1].nodeType);
console.log(cons.children);


/*node types
1. element
2. Attribures
3. textnodes
8. comment
9. documents
10. doctype 
*/

let nod=document.querySelector('.container');
console.log(nod.children[0].children);
console.log(nod.firstChild);
console.log(nod.firstElementChild);
console.log(nod.lastChild);
console.log(nod.lastElementChild);
console.log(nod.childElementCount);//count of child elements
console.log(nod.firstElementChild.parentNode);//gives the parent nodes
console.log(nod.firstElementChild.nextSibling);
console.log(nod.firstElementChild.nextElementSibling);