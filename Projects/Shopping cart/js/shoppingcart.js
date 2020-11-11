totalamt();
function increasenumber(data,amt)
{
    let no=parseInt(document.getElementById(data).value);
    let price=parseInt(document.getElementById(amt).innerHTML);
    no=no+1;
    if(no>5)
    {
        document.getElementById(data).style.background='red';
        document.getElementById(data).style.color='#fff';
        alert("Max Quantity That can be bought at a time is 5");
    }
    else
    {
    document.getElementById(data).value=no;
    price=price+200000;
    document.getElementById(amt).innerHTML=price;
    totalamt();
    }
}
function decreasenumber(data,amt)
{
    let no=parseInt(document.getElementById(data).value);
    let price=parseInt(document.getElementById(amt).innerHTML);
    no=no-1;
    if(no<1)
    {
        alert("Enter the Quantity Greater than 1 or equal to 1");
        document.getElementById(data).value=1;
    }
    else
    {
        document.getElementById(data).style.background='#fff';
        document.getElementById(data).style.color='#000';
        document.getElementById(data).value=no;
        price=price-200000;
        document.getElementById(amt).innerHTML=price;
        totalamt();
    }
}
function totalamt()
{
    let firstproduct=parseInt(document.getElementById('itmval').innerHTML);
    let secondproduct=parseInt(document.getElementById('itmval1').innerHTML);
    let total=firstproduct+secondproduct;
    let totalamtwithvat=total+1000;
    document.getElementById('shippingcharge').innerHTML=1000;
    document.getElementById('totamt').innerHTML=total;
    document.getElementById('total_cart_amt').innerHTML=totalamtwithvat;
}
function discountapply()
{
    let enterdata=document.getElementById('discount_code1').value;
    let data=parseInt(document.getElementById('total_cart_amt').innerHTML);
    let discode="DIP123";
    if(enterdata==discode)
    {
        alert("Congratulation! You Got The 10% Discount");
        data=data-10/100*data;
        document.getElementById('total_cart_amt').innerHTML=data;
        console.log(data);
    }
    else
    {
        alert("Sorry! Your Code Is Invalid");
    }
}