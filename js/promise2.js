console.log("This is another tutorials in promise");
let btn = document.getElementById("btn");
const serverdata = `[
    {
        "name":"Dipesh",
        "Profession":"Engineer"
    },

    {
        "name":"Dipsika",
        "profession":"Banker"
    },

    {
        "name":"Jenish",
        "Profession":"Doctor"
    },
    
    {
        "name":"Jiwan",
        "Profession":"Bussiness Man"
    },

    {
        "name":"Dilip",
        "Profession":"Enterpenure"
    }
]`;

function checkdata() {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      if (servercheck()) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
const server = JSON.parse(serverdata);

function servercheck() {   
     let data = document.getElementById("data").value;
     let returndata = 0;
  for (key in server) {
    if (server[key].name == data) {
      returndata = 1;
    }
  }
  return returndata;
}

btn.addEventListener("click", function () {
    checkdata()
      .then(function () {
        let print = document.getElementById("ans");
        let message = `<p>Congratualtion! Data Is Present In The Server</p>`;
        print.innerHTML = message;
      })
      .catch(function () {
        let print = document.getElementById("ans");
        let message = `<p>Sorry! Data Is Not Present In The Server</p>`;
        print.innerHTML = message;
      });
  });