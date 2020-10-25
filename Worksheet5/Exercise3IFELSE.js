var edad=parseInt(prompt("Introduce tu edad"));
if(edad>=21)
    alert("Universidad");
else
    if(edad>=17)
        alert("Bachillerato");
    else
        if(edad>=12)
            alert("ESO");
        else
            if(edad>=6)
                alert("Primaria");
            else
                alert("Jardín de la infancia");