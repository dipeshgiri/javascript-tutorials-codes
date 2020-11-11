console.log("Hello World");
let sn=0;
let showtotalamt=0;
let showamt=0;
let showvat=0;
function addrow() {
  let totalamt=document.getElementById('totalamt').value;
  let amt=document.getElementById('amt').value;
  let vat=document.getElementById('vat').value;
  sn=sn+1;
  let html =`          <tr>
  <th scope="row">${sn}</th>
  <td>${totalamt}</td>
  <td>${amt}</td>
  <td>${vat}</td>
</tr>`;
let inputfield=document.querySelector('table');
inputfield.innerHTML+=html;

let caltotalamt=parseFloat(document.getElementById('totalamt').value);
let caltotal=parseFloat(document.getElementById('amt').value);
let calvatamt=parseFloat(document.getElementById('vat').value);

//console.log(showtotalamt);
let calculatedtotalamt=caltotalamt+showtotalamt;
let calculatedamt=caltotal+showamt;
let calculatedvatamt=calvatamt+showvat;

shtotalamt=document.getElementById('anstotamt');
shamt=document.getElementById('ansamt');
shvatamt=document.getElementById('ansvatamt');

shtotalamt.innerHTML=calculatedtotalamt;
shamt.innerHTML=calculatedamt;
shvatamt.innerHTML=calculatedvatamt;

showtotalamt=parseFloat(document.getElementById('anstotamt').innerHTML);
showamt=parseFloat(document.getElementById('ansamt').innerHTML);
showvat=parseFloat(document.getElementById('ansvatamt').innerHTML);


document.getElementById('totalamt').value=0;
document.getElementById('amt').value=0;
document.getElementById('vat').value=0;

}
