//This is important
console.log("ES6 classes Very Important");

class Employee {
  constructor(newname, newexperience, newdivision) {
    this.name = newname;
    this.experience = newexperience;
    this.division = newdivision;
  }
  slogan()
  {
      return `I am ${this.name} and this is my company and best`;
  }
  experienceFrom2000()
  {
      return `${this.name} has the experiene of 20 years`;
  }
  static add(a,b)
  {
      return a+b;
  }
}

dipesh = new Employee("Dipesh Giri", 5, 100);
console.log(dipesh.slogan());
console.log(dipesh.experienceFrom2000());
console.log(Employee.add(34,5));

//inheritance very important
class Programmer extends Employee
{
    constructor(newname,newexperience,newdivision,newlanguage,github)
    {
        super(newname,newexperience,newdivision);//calls employee constructor first
        this.language=newlanguage;
        this.github=github;
    }
     favouritelanguage()
    {
        if(this.language=='PHP')
        {
            return 'PHP';
        }
        else
        {
            return 'javascript';
        }
    }
    static mul(a,b)
    {
        return a*b;
    }
}

rohan=new Programmer('Rohan',10,109,"PHP","rohan123");
console.log(rohan);
console.log(rohan.favouritelanguage());
console.log(Programmer.mul(2,3));