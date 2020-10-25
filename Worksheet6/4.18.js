var col=parseInt(prompt("Columnas de la tabla:"));
var filas=parseInt(prompt("Filas de la tabla:"));
var altura=parseInt(prompt("Altura de la tabla:"));
var anchura=parseInt(prompt("Anchura de las celdas:"));
document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
for(let i=0;i<filas;i++){
    document.write('<tr bgcolor="white" height="'+altura+'">');
    for(let j=0; j<col;j++)
        document.write('<td width="'+anchura+'">&nbsp;</td>');
    document.write('</tr>');
}
document.write('</table>');