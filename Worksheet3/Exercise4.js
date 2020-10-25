var radio=parseFloat(prompt("Introduce el radio del circulo"));
function perimetro(radio){
    return Math.round(2*Math.PI*radio);
};
function area(radio){
    return Math.round(Math.PI*Math.pow(radio,2));
};
document.write("The circumference is "+perimetro(radio));
document.write("<br> The area is "+area(radio));
