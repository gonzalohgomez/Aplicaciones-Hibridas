import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Gonzalo Gómez</h1>");
})

app.get("/materia", (req, res) => {
    res.send("<h1>Aplicaciones Hibridas</h1>");
})

app.get("/profesor", (req, res) => {
    res.send("<h1>Camila Belen Marcos Galbán</h1>");
})


const tecnologias = ["Node","HTML-CSS","REACT","SQL","C#"];

app.get('/stack/:tecnologia', (req, res) => {
    const tecnoParametro = req.params.tecnologia;
    let tecnoEncontrada = false;

    tecnologias.forEach(element => {
        if(element === tecnoParametro){
            tecnoEncontrada = true;
        }
    });

    if (tecnoEncontrada) {
        res.send('Donde te dejo el CV?');
    } else {
        res.send('A leer la documentación entonces...');
    }
});

const productos = [
    {id: "1", nombre: "Shampoo", precio: 1259},
    {id: "2", nombre: "Acondicionador", precio: 1179},
    {id: "3", nombre: "Vino", precio: 1029},
    {id: "4", nombre: "Galletitas", precio: 359},
    {id: "5", nombre: "Levadura", precio: 99},
    {id: "6", nombre: "Chocolate", precio: 659},
    {id: "7", nombre: "Agua Saborizada", precio: 412},
    {id: "8", nombre: "Tapa de Empanadas", precio: 389},
    {id: "9", nombre: "Capelletis", precio: 399},
    {id: "10", nombre: "Gin", precio: 2900},
];

app.get("/productos/:id", (req, res) => {
    const idProducto = req.params.id;

    let filterID = productos.filter(u => u.id === idProducto)
    if(!filterID.length === 0){
        return res.status(400).send({status: "error", error: "No existe el producto"});
    }
    res.send({filterID});
})

app.get("/productos", (req, res) => {
    let {minimo, maximo} = req.query;
    if(minimo && maximo){
        const productosFiltrados = productos.filter((p) => (p.precio > minimo && p.precio < maximo));
        res.send(productosFiltrados);
    }else if (minimo && !maximo){
        const productosFiltrados = productos.filter((p) => (p.precio > minimo));
        res.send(productosFiltrados);
    }else if(maximo && !minimo){
        const productosFiltrados = productos.filter((p) => (p.precio < maximo));
        res.send(productosFiltrados);
    }else{
        res.send(productos);
    }
});


app.use((req, res) => {
    res.status(404).send("<h1>404 Página no encontrada!</h1>");
})

app.listen(2023, () => console.log("Server running on port 2023..."));