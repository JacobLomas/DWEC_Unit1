var n=parseInt(prompt("Introduce un numero:"));
switch(true){
    case n%2==0:
        alert(n+" es múltiplo de 2");
        break;
    case n%3==0:
        alert(n+" es múltiplo de 3");
        break;
    case n%5==0:
        alert(n+" es múltiplo de 5");
        break;
}