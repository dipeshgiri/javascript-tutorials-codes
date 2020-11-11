console.log("This is exercise");

class library
{
    constructor(book1,book2,book3)
    {
        this.book1=book1;
        this.book2=book2;
        this.book3=book3;
    }
    getlist()
    {
        console.log(`The Book present in the library are: ${this.book1},${this.book2},${this.book3}`);
    }
    issusebook(username,bookname)
    {
        this.username=username;
        this.bookname=bookname;
        console.log(`${this.username} has taken ${this.bookname} book`);
    }
    returnbook(username,bookname)
    {
        this.username=username;
        this.bookname=bookname;
        console.log(`${this.username} has returned ${this.bookname} book`);
    }
}

let dipesh=new library("Javascript","PHP","C++");
dipesh.getlist();
dipesh.issusebook("Dipesh","Javascript");
dipesh.returnbook("Dipesh","Python");