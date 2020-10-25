var radio= parseInt(prompt("Introduce el radio del circulo"));
const PI=3.14159265359;
var area=PI*Math.pow(radio, 2);
var perimetro=2*PI*radio;
document.write("Perimetro del circulo = "+perimetro);
document.write("<br>Area del circulo = "+area);

