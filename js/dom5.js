console.log("Creating removing and replacing elements");
let element=document.createElement('li');
element.className='child';
element.id='name';

element.setAttribute('title','My description');
//element.innerText='Lemon';
//element.innerHTML=`<b>Lemon</b>`;
let text=document.createTextNode('lemon');
element.appendChild(text);

let ul= document.querySelector('ul.list');
ul.appendChild(element);
console.log(ul);
console.log(element);


//replacing an element
let element2=document.createElement('h3');
element2.id='class';
element2.className='classes';

let node=document.createTextNode("THis is hero");
element2.appendChild(node);
console.log(element2);
element.replaceWith(element2);

let id=document.getElementById('cons');
id.replaceChild(element,document.getElementById('first'));
id.removeChild(document.getElementById('second'));


let pr=element2.getAttribute('class');
pr=element2.getAttribute('id');
pr=element2.hasAttribute('href');
element2.removeAttribute('class');
console.log(pr,element2);


//create an heading element with text "Dipesh is good" and create the an a tag outside with href="google.com";


        let element3=document.createElement('h1');
        element3.className='Heading';
        tex=document.createTextNode('Dipesh is Good Boy');
        element3.appendChild(tex);

        let alpha=document.createElement('a');
        alpha.setAttribute('href','https://www.google.com');

        alpha.appendChild(element3);
        document.body.appendChild(alpha);