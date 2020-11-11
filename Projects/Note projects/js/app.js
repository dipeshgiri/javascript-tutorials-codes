showNotes();
//if users add a note,add it to the local storage
let Addbtn = document.getElementById("addBtn");
Addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let addtitle = document.getElementById("addtitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let date=new Date();

  let myobj=
  {
    title: addtitle.value,
    text: addtxt.value,
    date: date.toISOString().slice(0,10)
  }
  notesobj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  addtitle.value = "";
  showNotes();
});
//function to show the elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html =
      html +
      `
          <div class="note card mx-2 my-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <h5 class="card-title">${element.date}</h5>
            <p class="card-text">
              ${element.text}
            </p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
          `;
  });
  let notesElm = document.getElementById("notes");
  if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing To Show. "Add a new notes using add notes" `;
  }
}
// function to delete notes
function deleteNote(index) {
  console.log("I am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index,1);//delete the notes
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showNotes();
}

let search=document.getElementById('searchtext');
search.addEventListener("input",function()
{
    let inputval=search.value;
    let notecards=document.getElementsByClassName('note card');
    Array.from(notecards).forEach(function(element)
    {
        let cardtxt=element.getElementsByTagName("P")[0].innerText;
        if(cardtxt.includes(inputval))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

});