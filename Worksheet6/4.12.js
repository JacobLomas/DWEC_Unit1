var col=parseInt(prompt("Columnas de la tabla:"));
var altura=parseInt(prompt("Altura de la tabla:"));
var anchura=parseInt(prompt("Anchura de las celdas:"));
document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="'+altura+'">');
for(let i=0; i<col;i++){
    if(!(i%2))
        document.write('<td width="'+anchura+'"bgcolor="black">&nbsp;</td>');
    else
        document.write('<td width="'+anchura+'">&nbsp;</td>');
}
document.write('</tr>');
document.write('</table>');