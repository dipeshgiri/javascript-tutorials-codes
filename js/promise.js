//Promise
//Resolve
//reject
//pending
//promise is object
console.log("This is promise function tutorials");

const students=[
    {
        name:"Dipesh",
        subject:"Javascript"
    },
    {
        name:"Jenish",
        subject:"Machine Learning"
    }
];

function enrollstudent(student)
{
    return new Promise(function(resolve,reject)
    {
        setInterval(function() {
            students.push(student);
            console.log("Student have been enrolled");
            const error=true;
            if(!error)
            {
                resolve();
            }
            else{
                reject();
            }
        }, 3000);

    });
}

function getstudent()
{
    setInterval(function() {
        let str="";
        students.forEach(function(student)
        {
            str+=`<li>${student.name}</li>`
        });
        //document.getElementById('students').innerHTML=str;
        console.log("Student have been fetched");
    }, 1000);
}


let newStudent={name:"Dipesh",subject:"Laravel"}
enrollstudent(newStudent).then(getstudent).catch(function()
{
    console.log("Some Error Occured");
});
//getstudent();