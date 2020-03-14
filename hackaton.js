//ejercicio 0
let primera_mayuscula = function(texto){
  return texto.charAt(0).toUpperCase() + texto.substring(1);
}
var result = primera_mayuscula('sdsdsdsdsd dsdsd');
console.log(result);

//ejercicio 1
let palabra_mas_larga = function(texto){
    let array = texto.split(' ');
    let largo = 0, posicion = 0;
    for ( let i in array ) {
        if ( array[i].length > largo ) {
            posicion = i;
        }
        largo = array[i].length;
    }
    return array[posicion];
}
var result = palabra_mas_larga('sdsdsdsdsd dsdsd, sss');
console.log(result);

//ejercicio 2
let numero_par = function(numero){
    return ( Number.isInteger(numero/2) ) ? 'par' : 'impar';
}
var result = numero_par(2);
console.log(result);

//ejercicio 3
let palabra_mas_corta = function(texto){
    let array = texto.split(' ');
    let largo = array[0].length, posicion = 0;
    for ( let i in array ) {
        if ( array[i].length < largo ) {
            posicion = i;
        }
        largo = array[i].length;
    }
    return array[posicion];
}
var result = palabra_mas_corta('sdsdsdsdsd dsdsd, sss');
console.log(result);

//ejercicio 4
let numero_de_vocales = function(texto){
    let array = texto.split('');
    let largo = 0, nvocales = 0;
    let vocales = new Array('a','e','i','o','u');
    for ( let i in array ) {
        if ( vocales.indexOf(array[i]) != -1 ) {
            nvocales += 1;
        }
    }
    return nvocales;
}
var result = numero_de_vocales('sdsasdse');
console.log(result);

//ejercicio 5
let numero_con_comas = function(numero){
    let separado = numero.split('.');
    let array = separado[0].split('');
    let largo = 0, posicion = 0,texto='';
    var fin = array.length;
    for ( let i = 0; fin > i; i++ ) {
        posicion = (i-1)/3;
        if ( Number.isInteger(posicion) && i != fin-1 ) {
            texto += array[i]+',';
        } else {
            texto += array[i];
        }
    }
    if ( separado[1] != undefined ) {
        texto += '.'+separado[1];
    } 
    return texto;
}
var result = numero_con_comas('15645655464688.25');
console.log(result);
