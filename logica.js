let textoOriginal = [];
let textoDos = [];
let vocalA = [];
let vocalE = [];
let vocalI = [];
let vocalO = [];
let vocalU =[];
let mensajeEncriptado = [];
let mensajeEncriptadoDos = [];

function ocultarImagen() {
    document.getElementById("imagen_muneco").style.display = "none";
}

function EncriptarMensaje() {
    ocultarImagen();
    textoOriginal = document.querySelector(".dentro_area_encriptar").value;
    if (typeof textoOriginal === 'string') {   
        vocalA = textoOriginal.replaceAll('a','ai');
        vocalE = vocalA.replaceAll('e','enter');
        vocalI = vocalE.replaceAll('i','imes');
        vocalO = vocalI.replaceAll('o','ober');
        mensajeEncriptado = vocalO.replaceAll('u','ufat');
    }
    document.querySelector(".dentro_area_encriptado").value = mensajeEncriptado;
}

function desencriptarMensaje() {
    ocultarImagen();
    textoOriginal = document.querySelector(".dentro_area_encriptar").value;
    if (typeof textoOriginal === 'string') {   
        vocalA = textoOriginal.replaceAll('enter','e');
        vocalE = vocalA.replaceAll('imes','i'); 
        vocalI = vocalE.replaceAll('ai', 'a');
        vocalO = vocalI.replaceAll('ober','o');
        vocalU = vocalO.replaceAll('ufat','u')
        mensajeEncriptadoDos = vocalU;
    }  
    document.querySelector(".dentro_area_encriptado").value = mensajeEncriptadoDos;
}

function copiarMensaje() {
    mensajeEncriptadoDos = document.querySelector(".dentro_area_encriptado").value;
    document.querySelector(".dentro_area_encriptar").value = mensajeEncriptadoDos;
}

function limpiarTexto() {
    document.querySelector(".dentro_area_encriptar").value = " ";
    document.querySelector(".dentro_area_encriptado").value = " ";
    document.querySelector(".muneco").style.display = img;
}
