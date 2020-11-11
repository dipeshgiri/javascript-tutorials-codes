//Ajax stands for asynchronous javascript and xml
console.log("This is Ajax Tutorials");

let fetchBtn=document.getElementById('fetchbtn');
fetchBtn.addEventListener('click',buttonClickHandler);
function buttonClickHandler()
{
    console.log("YOu have Clicked The Button Fetch btn");
    //Instantiate an xhr object 
    const xhr =new XMLHttpRequest();

    //open the object

    //Asycn request is true

    //Get Request

    //xhr.open('GET','dipesh.txt',true);
    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    
    //POST Request

    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');


    //what to do on progress
    xhr.onprogress=function()
    {
        console.log("Task is on Progress");
    }
    //What do when response is ready

    xhr.onload=function()
    {
        if(this.status===200)
        {
        console.log(this.responseText);
    }
    else{
        console.log("some internal error happened");
    }
}

let para={
    "name":"dipesh",
    "salary":"1235",
    "age":"23"
};

    //send the request
    xhr.send(para);
    console.log("We are Done");

}

let popbtn=document.getElementById('popbtn');
popbtn.addEventListener('click',pophandler);

function pophandler()
{
    console.log("You have clicked the pop handler");
    
    const xhr=new XMLHttpRequest();

    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    xhr.onload=function()
    {
        if(this.status===200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for(i=0;i<24;i++)
            {
               // console.log(obj['data'][i].employee_name);
               str+=`<li>${obj['data'][i].employee_name}</li>`;
            }
           list.innerHTML=str;

        }
        else{
            console.log("Internal Error Occured");
        }
    }
    xhr.send();
    console.log("We are Done");
}