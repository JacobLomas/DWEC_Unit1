var hermanos=parseInt(prompt("¿Cuántos hermanos tienes?"));
var cantidad=parseInt(prompt("Introduce la cantidad"));
if(hermanos>=3)
    alert(cantidad*0.85);
else
    if(hermanos==0)
        alert(cantidad);
    else
        alert(cantidad*0.95);
