let clave = ""; 
let encriptado= "";
function asignarTextoElemento(elemento, texto){
    let advertencia = document.querySelector(elemento);
    advertencia.innerHTML = texto;
}

function encriptarPalabras(){
    let fraseUsuario = document.getElementById("entradaTexto").value; 
    console.log(fraseUsuario);
    let nuevaFrase=fraseUsuario.replace(/[aeiou]/g,function(match){
        switch(match){
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
        }
            
        })
    ;

    console.log(nuevaFrase);


}
function desencriptarPalabras(){
    let fraseEncriptada = document.getElementById("entradaTexto").value;
    let nuevaFrase=fraseEncriptada.replace(/ai|enter|imes|ober|ufat/g,function(match){
        switch(match){
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";

        }
    });
    console.log(nuevaFrase);
}


asignarTextoElemento("h3", "solo letras minusculas sin acentos");