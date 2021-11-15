
var numCol1 = 2;
var numCol2 = 2;
var numCol3 = 2;

var cambiarFondo = (min, max) => {
  var fondo = document.getElementById("fondo");
  numCol1 = Math.floor(Math.random() * (max - min)) + min;
  numCol2 = Math.floor(Math.random() * (max - min)) + min;
  numCol3 = Math.floor(Math.random() * (max - min)) + min;

  var codigoColor = "RGBA(" + numCol1 + "," + numCol2 + "," + numCol3 + ")"

  fondo.style["background-color"] = codigoColor;

  document.getElementById("num1").value = codigoColor;

  const brillo = Math.round(((numCol1 * 299) +
    (numCol2 * 587) +
    (numCol3 * 114)) / 1000);

  const colorTexto = (brillo > 125) ? 'black' : 'white';
  document.getElementById("titulo").style["color"] = colorTexto;
  document.getElementById("button-28").style["color"] = colorTexto;
  document.getElementById("button-28").style["border"] = "1px solid " + colorTexto;

  var gris1 = document.getElementById("gris1");
  var gris2 = document.getElementById("gris2");
  var gris3 = document.getElementById("gris3");
  var gris4 = document.getElementById("gris4");
  var gris5 = document.getElementById("gris5");
  var gris6 = document.getElementById("gris6");

  var codigoColor = "RGBA(" + numCol1 + "," + numCol2 + "," + numCol3 + ")"



var rgb1 = "RGBA(" + (numCol1-25) + "," + (numCol2-25) + "," + (numCol3-25) + ")";
var rgb2 = "RGBA(" + (numCol1-15) + "," + (numCol2-15) + "," + (numCol3-15) + ")";
var rgb3 = "RGBA(" + (numCol1-10) + "," + (numCol2-10) + "," + (numCol3-10) + ")";
var rgb4 = "RGBA(" + (numCol1+10) + "," + (numCol2+10) + "," + (numCol3+10) + ")";
var rgb5 = "RGBA(" + (numCol1+15) + "," + (numCol2+15) + "," + (numCol3+15) + ")";
var rgb6 = "RGBA(" + (numCol1+25) + "," + (numCol2+25) + "," + (numCol3+25) + ")";


 gris1.style["background-color"] = rgb1;
 gris2.style["background-color"] = rgb2;
 gris3.style["background-color"] = rgb3;
 gris4.style["background-color"] = rgb4;
 gris5.style["background-color"] = rgb5;
 gris6.style["background-color"] = rgb6;

 gris1.innerHTML = rgb2;
 gris2.innerHTML = rgb2;
 gris3.innerHTML = rgb3;
 gris4.innerHTML = rgb4;
 gris5.innerHTML = rgb5;
 gris6.innerHTML = rgb6;

 document.querySelector(".gris").style["color"] = colorTexto;

}

var copiarText = () => {
  texto = document.getElementById("num1");
  navigator.clipboard.writeText(texto.value);

}

