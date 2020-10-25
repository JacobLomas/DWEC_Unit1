var edad=parseInt(prompt("Introduce edad"));
var cantidadCalorias=parseFloat(prompt("Introduce la cantidad diaria de calorias consumidas"));
const edadMax = 100;
function calculateSupply(edad, cantidadCalorias){
    let años = edadMax-edad;
    return Math.round(años*cantidadCalorias*365);
}
document.write("Desde tus "+edad+" años hasta tus 100 años consumirás "+calculateSupply(edad, cantidadCalorias)+" kcal");