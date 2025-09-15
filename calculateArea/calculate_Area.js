let length;
let width;
let area = 0;
let vlr1;
let vlr2;
let vlr3;
let vlrtotal;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
}

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;


 function calculateGrocery() {
    vlr1 = parseInt(document.getElementById('vlr1').value);
    vlr2 = parseInt(document.getElementById('vlr2').value);
    vlr3 = parseInt(document.getElementById('vlr3').value);

   let vlrtotal = vlr1 + vlr2 + vlr3;
   }

   document.getElementById('result2').innerText = `The total amount is :$ ${vlrtotal}`;   