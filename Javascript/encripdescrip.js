function encriptxt(){
//optener valor de a encriptar
    var pen = document.getElementById("palabrac1").value;
    //analizar si se lleno informacion
    if (pen=="") {
        //si se leer vacio se manda mensaje de alerta
        alert("Ningun mensaje fue encontrado, Ingresa el texto que desees encriptar o desencriptar."); 
    }else{
        //creamos un arreglo para colocar las letras y su encriptacion
var mapObj = {
   e:"enter",
   i:"imes",
   a:"ai",
   o:"ober",
   u:"ufat"
};
//iniciamos el remplazo de las letras, en una funcion que trabaja como un siclo for o while, regresa la lectura de todo el arreglo segun la letra a la que coincida
pen1 = pen.replace(/e|i|a|o|u/g, function(matched){
  return mapObj[matched];});
  //se manda a mostrar el resultado
  // se ocultan los datos de presentacion y se muestra el resultado con el boton copiar
//console.log(pen1);
document.getElementById("palabracd1").style.visibility = "hidden";
document.getElementById("palabracd2").style.visibility = "hidden";
document.getElementById("copy").hidden = false;
document.getElementById("respuesta").style.visibility = "visible";
document.getElementById("respuesta").value = pen1; 
document.getElementById("palabrac1").value = ""; 
//optener valor del div a modificar la clase
var miDiv = document.getElementById('palabracd');
// Cambiar a otra clase
miDiv.className = 'palabracdst2';

    }
   
}
function desencriptxt(){
    //optener valor a desencriptar
    var pdesen = document.getElementById("palabrac1").value;
      //analizar si se lleno informacion
    if (pdesen=="") {
        //si se leer vacio se manda mensaje de alerta
        alert("Ningun mensaje fue encontrado, Ingresa el texto que desees encriptar o desencriptar."); 
    }else{
          //creamos un arreglo para colocar las palabras y su letra correspondiente
var mapObj = {
    enter:"e",
    imes:"i",
    ai:"a",
    ober:"o",
    ufat:"u"
};
//iniciamos el remplazo de las letras, en una funcion que trabaja como un siclo for o while, regresa la lectura de todo el arreglo segun la palabra a la que coincida
pdesen1 = pdesen.replace(/enter|imes|ai|ober|ufat/g, function(matched){
  return mapObj[matched];});
// se ocultan los datos de presentacion y se muestra el resultado con el boton copiar
//console.log(pdesen1);
document.getElementById("palabracd1").style.visibility = "hidden";
document.getElementById("palabracd2").style.visibility = "hidden";
document.getElementById("copy").hidden = false;
document.getElementById("respuesta").style.visibility = "visible";
document.getElementById("respuesta").value = pdesen1; 
document.getElementById("palabrac1").value = ""; 
//optener valor del div a modificar la clase
var miDiv = document.getElementById('palabracd');
// Cambiar a otra clase
miDiv.className = 'palabracdst2';
    }
}

function cptexto(){
//funcion de copiar para asignar a boton
document.getElementById("respuesta").disabled = false;
let copyText = document.querySelector("#respuesta");
copyText.select();
document.execCommand("copy");
document.getElementById("respuesta").disabled = true;
}


/* Reglas de encrptado y desencriptado:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/