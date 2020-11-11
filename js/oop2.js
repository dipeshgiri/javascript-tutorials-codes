console.log("This is OOP");

const proto={

    slogan: function()
    {
        return "This company is Best";
    },
    changename: function(newname)
    {
        this.name=newname;
    }
}

const dipesh=Object.create(proto);
dipesh.name="Dipesh";
dipesh.role="programmer";
dipesh.changename("Dipesh Giri");
//console.log(dipesh);

//proto

const dipesh1=Object.create(proto,
    {
        name:{value:"Dipesh2",writable:true},
        role:{value:"Developer"},
    });
    dipesh1.changename("Dipesh5");
    //console.log(dipesh1);



    function Employee(name,salary,experience)
    {
        this.name=name;
        this.salary=salary;
        this.experience=experience;
    }

    Employee.prototype.slogan=function()
    {
        return `This company is best. regards,${this.name}`;
    }

    let dipeshobj=new Employee("Dipesh",123084,5);
    //console.log(dipeshobj.slogan());

    //Programmeer
    function programmer(name,salary,experience,language)
    {
        Employee.call(this,name,salary,experience);
        this.language=language;
    }

    //Inherit the prototype;
    programmer.prototype=Object.create(Employee.prototype);

    let dipeshpro=new programmer("Dipesh",100000,5,"PHP");
    //console.log(dipeshpro);

    //Exercise

    function flour(material,water)
    {
        this.material=material;
        this.water=water;
    }
    function cake(material,water,size,price)
    {
        flour.call(this,material,water);
        this.size=size;
        this.price=price;
    }
    let vanillae=new cake("Aata","Distilled",120,1000);
    console.log(vanillae);