console.log("Events in Javascipt");

//events in javascript
document.getElementById('heading').addEventListener('click',function(e)
{
    //location.href="google.com";
    //let data=prompt("You have clicked heading");
    let data=e.target;
    data=e.target.className;
    data=e.target.id;
    data=e.offsetX;
    data=e.offsetY;

    console.log(data);
});

//events: click,mouseover,mousehover