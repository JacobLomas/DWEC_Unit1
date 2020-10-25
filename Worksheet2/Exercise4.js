var tempC = parseInt(prompt("Introduce la temperatura en grados Celsius"));
var tempF = (tempC * 9/5) + 32;
document.write(tempC+"°C is "+ tempF + "°F <br>");
var tempF2 = parseInt(prompt("Introduce la temperatura en grados Farenheit"));
var tempC2 =(tempF2-32) *5/9;
document.write(tempF2+"°F is "+ tempC2 + "°C");