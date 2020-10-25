function suma(...numerosArray){
    let total=0;
    for(numero of numerosArray)
        total+=numero;

    return total;
};
var miArray = [1,2,"tres",4,5,6];
console.log(suma(...miArray));




function addOnlyNums(...numerosArray){
    let total=0;
    for(numero of numerosArray)
        if(!isNaN(numero))
            total+=numero;

    return total;
};
var miArray = [1,2,"tres",4,5,6];
console.log(addOnlyNums(...miArray));



function countTheArgs(...numerosArray){
    return numerosArray.length;
};
var miArray = [1,2,"tres",4,5,6];
console.log(countTheArgs(...miArray));




function combineTwoArrays (array1, array2){
    return array1.concat(array2);
};
var array1 = [1,2,"tres",4,5,6];
var array2=[7,8,"nueve",10];
console.log(combineTwoArrays (array1, array2));


function sumEveryOther(...valores){
    let interruptor=true;
    let suma=0;
    for(n of valores){
        if(interruptor){
            suma+=n;
            interruptor=false;
        }else
            interruptor=true;
    }
    return suma;
}
console.log(sumEveryOther(5, 6, 3, 4, 1));

function onlyUniques(...valores){
    let array = [];
    for (let i = 0; i <= valores.length-1; i++) {
        if (!array.includes(valores[i])) {
            array.push(valores[i]);
        }        
    }
    return array;
}
console.log(onlyUniques('cat', 'cat', 'dog', 'pig'));


function combineAllArrays(...array2){
    return array2;
};
var array1 = [1,2,"tres",4,5,6];
var array2=[7,8,"nueve",10];
var array3=[11,12,"trece","catorce",15];
console.log(combineAllArrays(...array1, ...array2, ...array3));

function squareAndSum(...arg){
    let total=0;
    for(n of arg)
        total+=Math.pow(n,2);
    return total;
}
console.log(squareAndSum(2,4,3));