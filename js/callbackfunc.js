console.log("This is callback function tutorials");

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

function enrollstudent(student,callback)
{
    setInterval(function() {
        students.push(student);
        console.log("Student have been enrolled");
        callback();
    }, 3000);
}

function getstudent()
{
    setInterval(function() {
        let str="";
        students.forEach(function(student)
        {
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log("Student hav benn fetched");
    }, 1000);
}


let newStudent={name:"Dipesh",subject:"Laravel"}
enrollstudent(newStudent,getstudent);
//getstudent();