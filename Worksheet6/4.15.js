var n=parseInt(prompt("Introduce el numero a adivinar (Jugador 1):"));
var acierto=false;
while(acierto==false){
    let n2=parseInt(prompt("Intenta adivinar el número:"));
    if(n2==n){
        acierto=true;
        alert("Has acertado");
    }else if(n2<n)
            alert("El número es más grande");
        else
            alert("El número es más pequeño");
}