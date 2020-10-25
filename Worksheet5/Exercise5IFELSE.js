var ex1=parseFloat(prompt("Introduce la nota del examen 1"));
var ex2=parseFloat(prompt("Introduce la nota del examen 2"));
var t1=parseFloat(prompt("Introduce la nota del trabajo 1"));
var t2=parseFloat(prompt("Introduce la nota del trabajo 2"));
if(ex1<4.5 ||ex2<4.5 || t1<4.5 ||t2<4.5 )
    alert("Suspenso");
else
    if((((t1+t2)/2)*0.75 + ((t1+t2)/2)*0.25)>=5)
        alert("Aprobado");
    else
        alert("Suspenso");


