console.log("We are At index5");
const name="Dipesh";
const greeting="Good Morning";
console.log(greeting + ' '+ name);

let html;
html='<h1> This is Heading</h1>';
html=html.concat('dipesh',' Welcome');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[1]);

console.log(html.indexOf('This'));

console.log(html.lastIndexOf('<'));

console.log(html.charAt(4));

console.log(html.endsWith('Welcome'));

console.log(html.includes('is'));

console.log(html.substring(0,5));

console.log(html.slice(0,4));

console.log(html.split(' '));

console.log(html.split('>'));

console.log(html.replace('This', 'It'));

//Template Literals

let fruit1 ='orange';
let fruit2='mango';
let myhtml =`Hello ${name}
            <h1>This is  Heading</h1>
            <p>You Like ${fruit1} and ${fruit2}</p>
`;
document.body.innerHTML=myhtml;



//Quiz OF Template Literal

let education=" Electronics Communication And Information Engineering";
let skill=" Have Knowledge in C,C++,PHP,laravel,Python(basic),javascript";
let myhtml2=`<p>Hello My Name Is ${name}. I am Currently Pursuing My Bachelor Degree in ${education}. I ${skill}.</p>`;
document.body.innerHTML=myhtml2;