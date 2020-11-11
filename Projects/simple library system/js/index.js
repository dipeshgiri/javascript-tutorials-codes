console.log("This is Library system");

//constructor
function Book(title, author, type) {
  this.name = title;
  this.author = author;
  this.type = type;
}

//Display Constructor
function display() {}

//Add method to display prototype;
display.prototype.add = function (book) {
  let html = "";
  let tablebody = document.getElementById("tablebody");
  html = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`;
  tablebody.innerHTML += html;
};

display.prototype.clear = function () {
  let libform = document.getElementById("libform");
  libform.reset();
};

//implementing the validate function
display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
display.prototype.show = function (type, dispmessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message: </strong>${dispmessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
};

//Add event submit listner to form
let btn = document.getElementById("libform");
btn.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents the form to reload i.e prevent the default behaviours
  let name = document.getElementById("name").value;
  let author = document.getElementById("authorname").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let comedy = document.getElementById("comedy");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (comedy.checked) {
    type = comedy.value;
  }
  let book = new Book(name, author, type);
  let disp = new display();
  if (disp.validate(book)) {
    disp.add(book);
    disp.clear();
    disp.show("success", " Book Added Succesfully");
  } else {
    //show error to users
    disp.show("danger", " Sorry Book Cannot Be Added");
  }
});
