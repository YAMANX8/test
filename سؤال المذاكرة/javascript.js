 var i = document.forms[0];
 i.elements[1].value = 0;
 i.elements[2].value = 500;
 for (var j = 3; j < 7; j++) {
     i.elements[j].value = 200;
 }

 function cal() {
     var sum = 0;
     i.elements[8].value = 1000;
     for (var j = 3; j < 7; j++) {
         if (i.elements[j].checked)
             sum += i.elements[j].value * 1;
     }
     for (var x = 1; x < 3; x++) {
         if (i.elements[x].checked)
             sum += i.elements[x].value * 1;
     }
     sum += i.elements[0].value * 100 + document.forms[0].elements[8].value * 1;

     document.forms[0].elements[8].value = sum;

 }