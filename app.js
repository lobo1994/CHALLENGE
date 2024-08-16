let clave = ""; 
let encriptado= "";
let mostrar= document.getElementById("despuesDeClic");
    mostrar.style.display= "none";
function asignarTextoElemento(elemento, texto){
    let advertencia = document.querySelector("."+elemento);
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
            
        });
    let ocultar = document.getElementById("antesDeClic");
        ocultar.style.display="none";
        asignarTextoElemento("resultado", nuevaFrase);
        mostrar.style.display="block";


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
    asignarTextoElemento("resultado", nuevaFrase);
    mostrar.style.display="block";
    console.log(nuevaFrase);
}
function copiarTexto(){
    var elementoCopiado = document.getElementById("textoCopiar");
    var textoCopiado=document.createElement("input");
    document.body.appendChild(textoCopiado);
    textoCopiado.value = elementoCopiado.textContent;
    console.log(textoCopiado);
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999);
    document.execCommand('copy');
    pegartexto(textoCopiado.value);
    document.body.removeChild(textoCopiado);
    
}
function pegartexto(copia){
    var textoPegar = document.getElementById("entradaTexto");
    textoPegar.value=copia;

}


asignarTextoElemento("advertencia", "solo letras minusculas sin acentos");
asignarTextoElemento("mensaje1", "Ningun mensaje fue encontrado");
asignarTextoElemento("mensaje2", "Ingresa el texto que deseas encriptar o desencriptar");