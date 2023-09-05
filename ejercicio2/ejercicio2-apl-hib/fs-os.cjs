const fs = require("fs");
const os = require("os");
const path = require('path');

//Creo Carpeta y Archivo

fs.mkdir('archivos', (error) =>{
    if(error){
        console.log("error");
    }else{
        console.log("Carpeta Creada")
    }
})

let ruta = path.join("./archivos", "notas.txt");

fs.writeFileSync(ruta, "¡Hola Mundo!");

// Leo el archivo
fs.readFile(ruta, "utf-8", (error, data) => {
    if(error){
        console.log("error");
    }else {
        console.log(data);
    }
})

const platform = os.platform();
const arquitec = os.arch();

let ruta2 = path.join("./archivos", "info.txt");

//Creo Archivo info.txt
fs.writeFileSync(ruta2, platform);

fs.writeFile(ruta2, arquitec, {flag: "a"}, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log("Archivo Modificado");
    }
});

fs.writeFile(ruta2, "\nGonzalo - Valar Morghulis", {flag: "a"}, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log("Archivo Modificado");
    }
});