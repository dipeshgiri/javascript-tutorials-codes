console.log("This is Oop Project");
//object literal for creating objects
let car = {
  name: "Maruti",
  topspeed: 89,
  run: function () {
    console.log("Car is Running");
  },
};

//creating a constructor for car
function generalcar(givenname, speed) {
  this.gname = givenname;
  this.gtopspeed = speed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}
generalcar.prototype.getname=function()
{
    return this.gname;
}
generalcar.prototype.setname=function(newname)
{
    this.gname=newname;
}
car1 = new generalcar("Nisaan", 80);
console.log(car1.getname());
