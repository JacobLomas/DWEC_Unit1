var a=parseInt(prompt("Introduce un número: "));
var b=parseInt(prompt("Introduce otro número: "));
var operacion=prompt("Introduce la operacion a realizar");
switch(operacion){
    case '+':
        document.write(a+"+"+b+"= "+(a+b));
        break;
    case '-':
        document.write(a+"-"+b+"= "+(a-b));
        break;
    case '/':
        document.write(a+"/"+b+"= "+(a/b));
        break;
    case '*':
        document.write(a+"*"+b+"= "+(a*b));
        break;
}
