const fs = require("fs");
const os = require("os");

//Creo Carpeta y Archivo

fs.mkdir('archivos', (error) =>{
    if(error){
        console.log("error");
    }else{
        console.log("Carpeta Creada")
    }
})

fs.writeFileSync("./archivos/notas.txt", "¡Hola Mundo!");


// Leo el archivo
fs.readFile("./archivos/notas.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    }else {
        console.log(data);
    }
})

const platform = os.platform();
const arquitec = os.arch();

//Creo Archivo info.txt
fs.writeFileSync("./archivos/info.txt", platform);

fs.writeFile("./archivos/info.txt", arquitec, {flag: "a"}, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log("Archivo Modificado");
    }
});

fs.writeFile("./archivos/info.txt", "\nGonzalo - Valar Morghulis", {flag: "a"}, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log("Archivo Modificado");
    }
});