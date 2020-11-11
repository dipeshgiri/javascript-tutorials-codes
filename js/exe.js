console.log("THis is exercise");

let div=document.createElement('div');
let text=document.createTextNode("This is my element click to edit it");
div.appendChild(text);
div.setAttribute('id','elem');
div.setAttribute('style','border:2px solid black; width:154px;margin:34px;padding:23px');
div.setAttribute('class','elm');

let container=document.querySelector('.container');
let first=document.getElementById('first');
//insert the element before first

container.insertBefore(div,first);
 
//add evenet listner to the div 
div.addEventListener('click',function()
{
    let notextarea=document.getElementsByClassName('textarea').length;
    if(notextarea==0)
    {
    let html=elem.innerHTML;
    div.innerHTML='<textarea class="textarea form-control" class="textarea" id="textarea" rows="3">${html}</textarea>';
    }
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function()
    {
        elem.innerHTML=textarea.nodeValue;
    });

});